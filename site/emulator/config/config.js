
let platName="training"; //official||training  //统一平台|教学平台
switch(platName){
    case "official":
        
    case "training":
        window.config = {
            platName:platName,
            authPrefix:'Bearer',//请求头token 前缀
            domain: "http://xxx.dd.com",
            // ------------- 应用配置 ------------- 
            app_id: "nleEmulator20200709",
            app_secret: "",
            // ------------- sso 相关 ------------- 
            cloud_host: "https://10.5.128.95/gateway", // 云服务接口（获取用户信息等）
            redirect_uri: "https://10.5.128.95:/account/login", // 统一登录
            redirect_register: "https://10.5.128.95:/account/register", // 统一注册
 
            // ------------- 其他服务 ------------- 
            web_host: "https://10.5.128.95/emulator-server", // 本平台服务接口
            socket_host: "ws://127.0.0.1:6600",
            app_version: "1.0.0.7",//本前端版本
            app_store_path: "https://10.5.128.95/training-server/api/FileManager/Download/NLEEmulatorClientAssistant.exe",//助手存储地址
            app_socker_compatibility: ["1.0.0.8","1.0.0.7","1.0.0.6","1.0.0.5"],//助手向下兼容版本
 
        
        };
        break;
}




