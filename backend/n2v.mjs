// .N2V project-file decryption.
//
// The emulator front-end ships an RSA key pair and decrypts project packages
// itself (module 73ec in app.<hash>.js: `N2VToXml_JS` -> jsencrypt.decrypt).
// The server side of that API is expected to do the same. The private key is
// published in the mirrored client bundle, so it is not a secret here; keeping
// it in one place documents exactly where it came from.
//
// Encoding: the package is a sequence of 1024-bit RSA blocks. Some files are
// stored raw, others base64-wrapped — both appear in the wild, so sniff.
import crypto from 'node:crypto';

const PRIVATE_KEY_PEM = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDgjWIGqVumZIEbkkfGFWLd2Jumzj/hTxfqLBttY84B+OjlnJ4h
Cwo0IqZosjSfnnb0qVvLDHEnkpVZfadHITTdqmpzVnnLxsGN/hp/a9v7vR/vqY9t
7IqtWQJTU00dFhqDscrE8uIDyrWzwyRsLJ8KkTLu3KlEBRLgJpDFQ/52PQIDAQAB
AoGBAIukAGiqGv9/krZFonKxS/kvwaPasOj5GaMbaLb/ENYzJwna+o8L4X2IarnC
0GzOy6TcSOQdSaTVSCENvd/C668fFZBvDUMmhAdv6fRZ8VJ2DC0fujDZ159Jnpnc
WYu7jlfIashwC207h0P2YNJAmZYrUa1UjgfCh7ty2RUqxI51AkEA828XN0DuScU4
Wb7w29YCN3ShQqsiwU0oNEy4xWYUJ1Z1x/zys2xJ+mwDLWzYf8mcz3q4R7WQeRvv
c8cQg6dHEwJBAOwkxsIQZIJWGlVCYq/5CEs0LX57nbnDXtTV1+SSOor3Q8jPcVuY
ZC9y0Utlf+ehBJMbIq/kCi1DN0KqzSFqZ28CQGKU3mX12YnuYD+X35pnNEaY6KVD
ALQfNuTXHQxzpj23+cKfYPngJKVREIhYx+QYFXTAUdhYYsVo1rOgLcPi/hkCQGbO
jAmpAVkNC2HbCQP7s3SqPrQ2NTDOsdaPUvKcBwjBJa2jQoLSEavmnN/qTIkXPNqe
kbdp3FRgUwqfObc2j9kCQGOvHz4+wRq//+CEd/PzC4z41M4JgmJKm8yOS7D4iqbB
LS8tMligK1KpcmHhnLB3DrAKGdIZGLqA2Ft/yapeWSE=
-----END RSA PRIVATE KEY-----
`;

const BLOCK = 128; // 1024-bit RSA

let key = null;
function privateKey() {
  if (!key) key = crypto.createPrivateKey(PRIVATE_KEY_PEM);
  return key;
}

// A package is base64 when every byte is in the base64 alphabet. Project files
// are otherwise raw ciphertext, which contains arbitrary high bytes.
function looksBase64(buf) {
  const text = buf.toString('latin1').trim();
  return text.length > 0 && /^[A-Za-z0-9+/\r\n=]+$/.test(text);
}

export function decryptN2V(buf) {
  const payload = looksBase64(buf) ? Buffer.from(buf.toString('latin1').trim(), 'base64') : buf;

  if (payload.length === 0 || payload.length % BLOCK !== 0) {
    throw new Error(`长度不是 ${BLOCK} 的整数倍 (${payload.length} 字节)，不是有效的 .N2V 包`);
  }

  const parts = [];
  for (let off = 0; off + BLOCK <= payload.length; off += BLOCK) {
    parts.push(
      crypto.privateDecrypt(
        { key: privateKey(), padding: crypto.constants.RSA_PKCS1_PADDING },
        payload.subarray(off, off + BLOCK),
      ),
    );
  }

  const xml = Buffer.concat(parts).toString('utf8');
  if (!xml.trimStart().startsWith('<?xml') && !xml.includes('<Workbench')) {
    throw new Error('解密结果不是有效的工作台 XML');
  }
  return xml;
}

// Encrypting back (export) mirrors the client: chunk the XML so each piece fits
// one RSA block after PKCS#1 v1.5 padding (117 bytes of payload).
export function encryptN2V(xml) {
  const data = Buffer.from(xml, 'utf8');
  const CHUNK = BLOCK - 11;
  const parts = [];
  for (let off = 0; off < data.length; off += CHUNK) {
    parts.push(
      crypto.publicEncrypt(
        { key: privateKey(), padding: crypto.constants.RSA_PKCS1_PADDING },
        data.subarray(off, Math.min(off + CHUNK, data.length)),
      ),
    );
  }
  return Buffer.concat(parts);
}
