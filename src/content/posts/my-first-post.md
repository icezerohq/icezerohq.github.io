---
title: Astro 部署 GitHub Pages 404 问题解决方案（base路径 + Actions配置）
description: 记录 Astro 项目部署到 GitHub Pages 出现 404、样式丢失、资源路径错误的排查与解决方法
pubDate: 2026-05-13
tags: ['Astro', 'GitHub Pages', '部署', '404', 'base路径', 'GitHub Actions']
---

这篇记录一下 Astro 项目部署到 GitHub Pages 时遇到的几个典型问题：

- 页面 404
- CSS / JS 丢失
- 图片资源加载失败
- GitHub Actions 构建问题

基本都是部署路径和配置问题。

---

## 问题一：GitHub Pages 部署后 404

刚开始部署完，访问 GitHub Pages 地址直接 404。

但 GitHub Actions 是成功的，没有报错。

后来才发现是部署配置或者路径问题导致的。

---

## 问题二：Astro 在 GitHub Pages 必须配置 base

GitHub Pages 的项目站点不是根路径，而是：

```
https://username.github.io/repo-name/
```

所以必须在 `astro.config.mjs` 中配置 base：

```js
import { defineConfig } from 'astro/config'

export default defineConfig({
  base: '/你的仓库名/'
})
```

如果不配置，会出现：

- CSS 加载失败
- JS 不执行
- 页面结构正常但无样式

---

## 问题三：静态资源路径错误（图片 / CSS）

本地开发时通常这样写：

```
/images/xxx.png
```

在 GitHub Pages 上会失效，因为路径不在根目录。

解决方式是使用 base 路径：

```js
import.meta.env.BASE_URL + 'images/xxx.png'
```

或者统一使用相对 base 的资源路径管理方式。

---

## 问题四：GitHub Actions 构建失败（Node / pnpm）

第一次使用默认 workflow 时遇到构建失败，主要原因是：

- Node 版本过低
- pnpm 未正确安装或未缓存依赖

修改后配置：

- Node 18+
- 正确安装依赖（pnpm install）
- 构建命令 pnpm build

之后构建正常。

---

## 最终解决步骤总结

这次问题最终是通过以下几步解决的：

1. 在 astro.config.mjs 中配置 base
2. 修复静态资源路径
3. 修改 GitHub Actions 构建配置

重新部署后正常访问。

---

## 相关关键词（方便搜索）

Astro GitHub Pages 404  
Astro 部署失败  
GitHub Pages CSS 不生效  
Astro base 配置  
Astro 静态资源路径错误  
GitHub Actions Astro 部署  
Astro 项目上线问题

---

## 结语

这类问题本质上都不是代码错误，而是部署路径问题。

本地正常 ≠ 部署正常，尤其是 GitHub Pages 这种子路径站点。

以后遇到类似问题，优先检查 base 和资源路径。
