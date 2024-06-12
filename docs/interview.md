## css 优化
```js
1、降低 CSS 选择器的复杂性
2、使用 flexbox 而不是较早的布局模型
    flex 布局比 绝对定位、相对定位或浮动定位 的性能好
3、使用 transform 和 opacity 属性更改来实现动画
    transforms 和 opacity 这两个属性更改不会触发重排与重绘，它们是可以由合成器（composite）单独处理的属性
4、减少使用昂贵的属性
    如box-shadow/border-radius/filter/透明度/:nth-child等。
核心 减少重排与重绘
```

## html 优化
```js
1、https 中a标签默认是非预解析 下面强制打开预解析
    <meta http-equiv='x-dns-prefect-control' content='on'/>
2、script 标签的 defer 和 async 合理使用
    正常请求的数据 完成就会去加载
    defer 推迟请求  文件立即请求 不会堵车 html解析 等待html解析完成后 在解析加载的资源
    async 异步请求  文件立即请求 不会堵车 html解析 等待资源加载完成 立即解析加载资源 会堵塞html解析
3、seo 优化
    a、<title> 是搜索引擎了解网页的入口
        <title>
            小米商城 - 小米11、Redmi Note 9、小米MIX Alpha，小米电视官方网站
        </title>
    b、Keywords是页面关键词，是搜索引擎关注点之一。
        <meta name="keywords" content="小米,redmi,小米11,Redmi Note 9,小米MIX Alpha,小米商城">
```

## js
```js
1、慎用全局变量
2、避开闭包陷阱, 使用完闭包 后及时清理变量
3、防抖&&节流
4、节点添加优化, 多个节点添加的时候 使用虚拟代码片段合并操作，减少DOM的重绘。
5、事件委托
6、合理使用缓存机制、
7、清除的定时器
```

## webpack
```js
1、thread-loader 多进程打包
2、cache 配置缓存 webpack5 新增的自带api
3、一般在loader中文件查找：exclude(不需要处理的文件) & include(需要处理的文件)
4、生产环境对文件进行压缩(css js 图片都有对应的插件处理)
5、tree-shaking 优化, 代码写的时候 采用 es6 的 导入导出
6、打包体积分析 利用`webpack-bundle-analyzer`插件
7、splitChunk
8、小图片转base64
9、动态链接库-抽离公共文件
10、babel-loader 开启缓存
```

## vue2
```js
1、路由懒加载
2、keep-alive(路由缓存)
3、活用v-show，减少v-if
4、循环添加key 一般设置为id
5、对只显示的数据 采用 Object.freeze
6、图片懒加载
7、srr渲染
8、虚拟列表
```

## 网络
```js
1、减少HTTP请求数
2、开启gzip传输压缩
3、DNS预解析
4、CDN加速
5、开启http缓存
```