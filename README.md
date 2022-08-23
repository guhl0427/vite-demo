# LEARN VITE

1. [环境变量](#环境变量)
2. [eslint](https://github.com/antfu/eslint-config)
3. [husky](#husky)
4. [HMR](#hmr)
5. [Vitest](#vitest)

# 环境变量
> https://cn.vitejs.dev/guide/env-and-mode.html#modes

# husky
```
# 1.安装依赖
pnpm install husky -D

# 2.初始化
npx husky install 

# 3.添加钩子
npx husky add ./husky/pre-commit "npm run lint"
```

# HMR
> https://cn.vitejs.dev/guide/features.html#hot-module-replacement

# Vitest
```
pnpm add vitest -D
```