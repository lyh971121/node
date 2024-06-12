module.exports = {
  title: "NorthUnicorn",
  base: "/",
  themeConfig: {
    editLinkText: "编辑此页",
    lastUpdated: "上次更新",
    nav: [{
      text: "front",
      link: "/front/"
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
    {
      text: "GitHub",
      link: "https://github.com/lyh971121"
    }
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
      },{
        title:'vue',
        collapsable:false,
        children:[
          "vueSource",
        ]
      },{
        title:'axios',
        collapsable:false,
        children:[
          "axios",
        ]
      },{
        title:'upload',
        collapsable:false,
        children:[
          "upload",
        ]
      },{
        title:'binary',
        collapsable:false,
        children:[
          "binary",
        ]
      },{
        title:'http',
        collapsable:false,
        children:[
          "http",
        ]
      }
    ],
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
      },{
        title: 'js',
        collapsable: false,
        children: [
          "jsBase",
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
        title:'interview',
        collapsable:false,
        children:[
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