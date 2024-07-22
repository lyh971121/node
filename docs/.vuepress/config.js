module.exports = {
  title: "小刘的工作日志",
  base: "/",
  themeConfig: {
    editLinkText: "编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "worklog",
        link: "/worklog/"
      },
      {
        text: "front",
        link: "/front/"
      }, {
        text: "java",
        link: "/java/"
      },
      {
        text: "back",
        link: "/houduan/"
      },
      {
        text: "devOps",
        link: "/devOps/"
      },
      {
        text: "interview",
        link: "/interview/"
      },
      {
        text: "article",
        link: "/article/"
      }
      ,
      // {
      //   text: "GitHub",
      //   link: "https://github.com/lyh971121"
      // }
    ],
    sidebar: {
      "/article/": [{
        title: "article",
        collapsable: false,
        children: [
          "webpack5",
          "webpack",
          "module",
          "vueAnalysis",
          "vueN",
          "promise",
          "frontModle",
          "vuePlugin",
          "jwtPrinciple",
          "routerAuth",
          "statusCode",
          "useLibrary",
          "reg",
        ]
      }, {
        title: 'vue',
        collapsable: false,
        children: [
          "vueSource",
        ]
      }, {
        title: 'axios',
        collapsable: false,
        children: [
          "axios",
        ]
      }, {
        title: 'upload',
        collapsable: false,
        children: [
          "upload",
        ]
      }, {
        title: 'binary',
        collapsable: false,
        children: [
          "binary",
        ]
      }, {
        title: 'http',
        collapsable: false,
        children: [
          "http",
        ]
      }
      ],
      "/worklog/": [{
        title: "worklog",
        collapsable: false,
        children: [
          "技术分享",
          "h5转盘小游戏",
          "红包活动",
          "mock",
          "koa",
          "http"
        ]
      }],
      "/front/": [{
        title: 'front',
        collapsable: false,
        children: [
          "css",
          "js",
          "react",
          "vue",
          "vuepress",
          "phone",
          "webpack",
          "video"
        ]
      }, {
        title: 'js',
        collapsable: false,
        children: [
          "jsBase",
        ]
      }],

      "/java/": [{
        title: "java",
        collapsable: false,
        children: [
          "流程控制",
          "数组",
          "方法",
          "类和对象",
          "封装",
          "对象补充",
          "继承",
          "多态",
          "内部类等",
          "异常_Object",
          "基础API",
          "常用API",
        ]
      }],
      "/houduan/": [{
        title: "houduan",
        collapsable: false,
        children: [
          "node",
          "ios",
          "mongodb",
          "mock",
          "koa",
          "http"
        ]
      }],
      "/devOps/": [{
        title: "devOps",
        collapsable: false,
        children: [
          "git",
          "nginx",
          "linux",
          "vscode",
        ]
      }],
      "/interview/": [{
        title: 'interview',
        collapsable: false,
        children: [
          "interviewBase",
          "interviewJs",
          "interviewVue",
          "interviewWebpack",
          "status",
          "suanfa"
        ]
      }]
    }
  }
};