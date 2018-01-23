# superMall
电商平台移动端前端  
微信开发者服务端请点击：[电商平台移动端微信开发者服务端](https://github.com/Junior2Ran/supermallDemo)

## 技术框架
react + antd-mobile + webpack

## 环境搭建说明
1. 将本仓库代码克隆到本地
```bash
git clone https://github.com/Junior2Ran/superMall.git
```

2. 安装npm依赖包
```bash
cd .\superMall
npm install
```

3. 本地服务器预览可以通过
```bash
npm run server
```
然后访问`localhost:8080`来查看本地效果

4. 针对线上环境，首先打包
```bash
npm run build
```
然后找到文件目录下的`dist`文件夹，即是打包过后的内容（一个`index.html`文件，一个`js`文件夹）  
PS.暂时`images`文件夹无法打包到`dist`内，需要手动复制粘贴`build`目录下或`src/static`目录下的`images`文件夹到`dist`内，同时`build`目录和`src/static`目录下的文件也只能手动同步。

5. 上传到线上服务器，部署到公众号  
详细操作请访问：[supermallDemo说明文档](https://github.com/Junior2Ran/supermallDemo/blob/master/README.md)  
将打包好的文件布置在`supermallDemo`项目中对应的位置，上传更新后的`supermallDemo`到github，然后在服务端pull下代码。
