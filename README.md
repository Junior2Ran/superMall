# superMall
通用电商平台的设计与实现：）

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

3. 本地预览可以通过
```bash
npm run server
```
然后访问`localhost:8080`来查看本地效果

4. 针对线上环境，先打包，运行
```bash
npm run build
```
然后找到文件目录下的`dist`文件夹，即是打包过后的文件内容（暂时`images`文件夹无法打包到`dist`内，需要手动复制粘贴`build`目录下的`images`文件夹到`dist`内），直接运行`dist`目录下的`index.html`文件即可正常运行
