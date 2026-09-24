window.config = {

              domain: "",

  // ------------- 应用配置 ------------- 

              app_id: "nleEmulator20200709",
          app_secret: "",
         app_version:"1.0.0.6",//本前端版本
app_socker_compatibility: ["1.0.0.8","1.0.0.6"],//助手向下兼容版本

  // ------------- sso 相关 ------------- 

    web_host: "https://10.5.128.95/training-server", // 本平台服务接口（部署环境下由网关统一授权验证）
        redirect_uri: "https://10.5.128.95/account/login", // 统一登录
   redirect_register: "https://10.5.128.95/account/register", // 统一注册
          cloud_host: "https://10.5.128.95/gateway/", // 云服务接口（获取用户信息等）
  cloud_myinfo: "https://10.5.128.95/account/my/info", // 云服务接口（个人中心）

  // ------------- 其他服务 ------------- 

         socket_host: "ws://127.0.0.1:6600",  // 本地助手
    doc_priview_host: "https://10.5.128.95/preview_v2.2.1", // 文件预览
 doc_priview_version: "2.2.1", // 文件预览版本
        compile_host: "https://compile.xclass.nlecloud.com", // 统一编译服务
       emulator_host: "https://10.5.128.95/emulator", // 仿真平台
    doc_host: "http://10.5.128.95:83",//走本地通道，因为证书问题，这里用http而不是https


    title: "",
    plateName: "",
    videoFileSizeLimit: 1024 * 1024 * 2048,
    appFileSizeLimit: 1024 * 1024 * 300,
    documentFileSizeLimit: 1024 * 1024 * 200,
    do_not_show_enterprise_info: false,
    do_not_asyn_server_time: false,
    do_not_show_register: true,
    do_not_show_lessons: false,
    do_not_show_devices: false,
    do_not_show_rfid: false,
    do_not_show_selfstudy: false,
    do_not_show_emulator: false,
    socket_app_alwaysload: false,
    do_not_showchract:true,


// ------------- 教师端菜单配置 ------------- 

menu_教学总览:'教学总览',
menu_任务管理:'教学管理',
menu_任务列表:'教学列表',
menu_任务进度:'教学进度',
menu_任务评分:'任务评分',
menu_任务报告:'课程报告',
menu_课程管理:'课程管理',
menu_课程列表:'课程列表',
menu_课程任务:'课程任务',
menu_课件管理:'课件管理',
menu_实训管理:'实训管理',
menu_习题管理:'习题管理',
menu_自主学习:'自主学习',
menu_仿真工具:'线上实验室',
menu_自动识别工程实训与仿真系统:'自动识别工程实训与仿真系统',
menu_技术仿真:'仿真工具',
menu_实验记录:'实验记录',
menu_班级管理:'班级管理',
menu_学生管理:'学生管理',


roleSettings: [{
        roleName:'老师',//角色
        defualtPath:'/main/teacher/stat',//默认路径
        startsWiths:['/main/teacher','/main/task'],
    },{
        roleName:'学生',
        defualtPath:'/main/student/home',
        startsWiths:['/main/student','/main/task'],
    },{
        roleName: '管理员',
        defualtPath: '/main/admin',
        startsWiths: ['/main/admin'],
    }],

};

window.onload = function(){
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = window.config.emulator_host + '/lib/nleEmulatorLib.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}