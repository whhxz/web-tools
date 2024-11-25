创建ts项目

```
# 初始化项目
pnpm init
# 添加ts支持 用于直接运行
pnpm add -D ts-node typescript @types/node
# 生成tsconfig.json
npx tsc --init
# 添加依赖包
```

### 编译运行
`npx tsc`编译
`node ./dist/main.js`运行

### 直接运行
`npx ts-node src/main.ts`