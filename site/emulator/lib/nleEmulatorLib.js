; (function (window) {

    function nleEmulator() {


        var self = this;

        self.ready = false;
        self.readysetToken = false;
        self.onready = [];
        self.onreadysetToken = [];
        self.ongetxml = null;
        self.ongetunencryptedxml = null;
        self.onsetxml = null;
        self.oninit = null;
        self.autoresize = true;
        self.height = 0;
        self.width = 0;
        self.url = '';

        self.lastInit = null;

        window.timeSpan = 0;


        window.clearInterval(window.timeIntver);

        window.timeIntver = window.setInterval(() => {

            window.timeSpan++;

            if (self.iframe && window.timeSpan > 10 && self.__proto__.loaddiv.style.display == "block") {

                console.log("10秒了还是显示loading");
                window.timeSpan = 0;
                let url = self.iframe.src;
                self.iframe.src = "";
                self.iframe.src = url;

                // self.Create();

            } else {
                // console.log("timeSpan:" + window.timeSpan);
                if (window.timeSpan > 10) {
                    window.timeSpan = 0;
                }
            }

        }, 1000);

        self.Create = function (container) {

            var parent = window.document.getElementById(container);
            if (parent) {
                var iframe = null;
                if (self.__proto__.iframe) {
                    iframe = self.__proto__.iframe;

                    if (self.__proto__.iframe.parentNode) {
                        self.__proto__.iframe.parentNode.removeChild(self.__proto__.iframe);
                    }

                    if (self.__proto__.loaddiv.parentNode) {
                        self.__proto__.loaddiv.parentNode.removeChild(self.__proto__.loaddiv);
                    }

                    parent.appendChild(self.__proto__.loaddiv);
                    parent.appendChild(self.__proto__.iframe);

                    window.removeEventListener("message", self.__proto__.receiveMessage);
                } else {

                    var loaddiv = window.document.createElement('div');
                    loaddiv.innerText = self.__proto__.loadtext;
                    loaddiv.style.margin = '15% auto';
                    loaddiv.style.color = '#aaa';
                    loaddiv.style.width = '200px';
                    loaddiv.onclick = function () {
                        /*
                        if(!self.ready){
                            self.iframe.src = null;
                            console.log('reload',self.url );
                            self.iframe.src =  self.url;
                        }
                        */
                    };
                    self.__proto__.loaddiv = loaddiv;
                    parent.appendChild(self.__proto__.loaddiv);

                    iframe = window.document.createElement('iframe');
                    self.url = self.url.replace('#/','');
                    iframe.src = self.url;
                    iframe.style.display = 'block';
                    iframe.style.borderWidth = 0;
                    iframe.style.visibility = 'hidden';
                    //iframe.title = new Date().getTime();
                    iframe.frameborder = 'no';
                    iframe.scrolling = 'no';
                    iframe.allowTransparency = 'yes';
                    iframe.border = 0;
                    iframe.marginwidth = 0;
                    iframe.marginheight = 0;
                    self.__proto__.iframe = iframe;

                    parent.appendChild(self.__proto__.iframe);

                }

                self.__proto__.current = self;
                window.addEventListener("message", self.receiveMessage, false, 0, true);

                iframe.width = parent.offsetWidth;
                iframe.height = parent.offsetHeight;
                iframe.style.visibility = 'hidden';
                self.__proto__.loaddiv.style.display = 'block';
                self.ready = false;

                setInterval(function () {
                    if (self.autoresize && (self.width != parent.offsetWidth || self.height != parent.offsetHeight)) {
                        self.width = iframe.width = parent.offsetWidth;
                        self.height = iframe.height = parent.offsetHeight;
                        self.Resize();
                    }
                }, 1000);

                return self;
            }
            return null;

        }

        self.receiveMessage = function (event) {

            if (self !== self.__proto__.current)
                return;
            // For Chrome, the origin property is in the event.originalEvent
            // object. 
            // 这里不准确，chrome没有这个属性
            // var origin = event.origin || event.originalEvent.origin; 
            var origin = event.origin;
            var data = event.data;
            var source = event.source;
            // if (source == window){
                
            //     return;
            // }
            //console.log("自己给自己的消息不要", source.BASE_URL, window.BASE_URL);    

            console.dirxml(`I调用平台 <- E仿真平台 appid = ${data.appid}  method = ${data.method} parameter = ${ data.parameter} `, event);

            if (data.appid === self.__proto__.appid && data.method == 'Ready') {
                self.ready = true;

                self.Resize();

                for (var i = 0; i < self.onready.length; i++) {
                    self.onready[i]();
                }

                self.onready.length = 0;

            } else if (data.appid === self.__proto__.appid && data.method == 'GetXml') {

                self.error = data.error;
                
                if (self.ongetxml) {
                    self.ongetxml(data.parameter);
                }

            } else if (data.appid === self.__proto__.appid && data.method == 'GetUnencryptedXml') {

                if (self.ongetunencryptedxml) {
                    self.ongetunencryptedxml(data.parameter);
                }

            } else if (data.appid === self.__proto__.appid && data.method == 'SetXml') {

                if (self.onsetxml) {
                    self.onsetxml(data.parameter);
                }

            } else if (data.appid === self.__proto__.appid && data.method == 'Resize') {

            } else if (data.appid === self.__proto__.appid && data.method == 'Init') {

                if (self.oninit) {
                    self.oninit();
                }

                self.__proto__.iframe.style.visibility = 'visible';
                self.__proto__.loaddiv.style.display = 'none';
            } else if (data.appid === self.__proto__.appid && data.method == 'readysetToken') {
                self.readysetToken = true;

                if(self.onreadysetToken.length==0){//没有的话，自己取
                    let token = window.nleEmulatorTools.getCookie('cloud-token');
                    if(token){
                        self.SetToken(token);
                    }
                }

                for (var i = 0; i < self.onreadysetToken.length; i++) {
                    self.onreadysetToken[i]();
                }
                self.onreadysetToken.length = 0;
            }
        }

        self.Init = function (parameter) {
            self.lastInit = parameter;
            if (self.__proto__.iframe) {
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.ready) {
                    var data = { appid: self.__proto__.appid, method: 'Init', parameter: parameter };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onready.push(function () {
                            var data = { appid: self.__proto__.appid, method: 'Init', parameter: parameter };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);
                            iframe_cw.postMessage(data, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            return self;
        }

        self.Resize = function (parameter) {

            if (self.__proto__.iframe && self.__proto__.iframe.contentWindow) {
                var size = null;
                if (parameter) {
                    size = parameter;
                    self.__proto__.iframe.width = size.width;
                    self.__proto__.iframe.height = size.height;
                    autoresize = false;
                }
                else {
                    self.__proto__.iframe.width = self.__proto__.iframe.parentNode.offsetWidth;
                    self.__proto__.iframe.height = self.__proto__.iframe.parentNode.offsetHeight;
                    size = {};
                    size.width = self.__proto__.iframe.width;
                    size.height = self.__proto__.iframe.height
                }
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.ready) {
                    var data = { appid: self.__proto__.appid, method: 'Resize', parameter: size };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onready.push(function () {
                            var data =  { appid: self.__proto__.appid, method: 'Resize', parameter: size };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);        
                            iframe_cw.postMessage({ appid: self.__proto__.appid, method: 'Resize', parameter: size }, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }

                }
            }
            return self;
        }

        self.GetXml = function () {

            if (self.__proto__.iframe) {
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.ready) {
                    var data =   { appid: self.__proto__.appid, method: 'GetXml', parameter: null };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);        
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onready.push(function () {
                            var data = { appid: self.__proto__.appid, method: 'GetXml', parameter: null };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);  
                            iframe_cw.postMessage(data, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            return self;
        }

        self.GetUnencryptedXml = function () {

            if (self.__proto__.iframe) {
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.ready) {
                    var data = { appid: self.__proto__.appid, method: 'GetUnencryptedXml', parameter: null };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);  
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onready.push(function () {
                            var data = { appid: self.__proto__.appid, method: 'GetUnencryptedXml', parameter: null };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);          
                            iframe_cw.postMessage(data, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            return self;
        }

        self.SetXml = function (xml) {

            if (self.__proto__.iframe) {
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.ready) {
                    var data = { appid: self.__proto__.appid, method: 'SetXml', parameter: xml };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);  
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onready.push(function () {
                            var data = { appid: self.__proto__.appid, method: 'SetXml', parameter: xml };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);          
                            iframe_cw.postMessage(data, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            return self;
        }

        self.SetToken = function (token) {

            if (self.__proto__.iframe) {
                //console.dirxml('nleEmulator.Init', data);
                var iframe_cw = self.__proto__.iframe.contentWindow;
                //console.dirxml('nleEmulator.Init', self.__proto__.iframe.loaded);
                if (self.readysetToken) {
                    var data = { appid: self.__proto__.appid, method: 'SetToken', parameter: token };
                    console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);          
                    iframe_cw.postMessage(data, '*');
                } else {
                    try {
                        //console.dirxml('nleEmulator.Init', 'onload');
                        self.onreadysetToken.push(function () {
                            var data = { appid: self.__proto__.appid, method: 'SetToken', parameter: token };
                            console.dirxml(`I调用平台 -> E仿真平台 appid = ${data.appid}  method = ${data.method}  parameter = ${data.parameter}` , data);                  
                            iframe_cw.postMessage(data, '*');
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            return self;
        }

    }

    //prototype 类似静态属性
    nleEmulator.prototype.appid = 'nleEmulator20200709';
    nleEmulator.prototype.iframe = null;
    nleEmulator.prototype.loaddiv = null;
    nleEmulator.prototype.loadtext = '加载中，请稍后 ...';
    nleEmulator.prototype.reloadtext = '重新加载';
    nleEmulator.prototype.current = null;

    function nleEmulatorTools() {
        this.Base64ToUint8Array = function (base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        this.ArrayBufferToBase64 = function arrayBufferToBase64(buffer) {
            var binary = '';
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }
         
    }

    nleEmulatorTools.getCookie = function(cname)
    {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) 
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    }


    window.nleEmulatorTools = nleEmulatorTools;
    window.nleEmulator = nleEmulator;

})(window);

