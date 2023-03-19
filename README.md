# study react with Create React App

## problem
### 因为项目包使用 pnpm 管理，在不小心使用 npm 后已经无法 run 起来，但是输出又是正常的

- 删掉 node_moudle 重新下载


### 引入第三方包却报错："无法找到模块 react "的声明文件
方法一：安装库的TypeScript声明文件
```shell
pnpm install -D @types/lib-name

```
举个例子：`npm install @types/react --save-dev`

方法二，自定义 type 