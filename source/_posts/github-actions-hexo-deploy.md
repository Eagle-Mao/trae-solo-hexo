---
title: GitHub Actions 自动部署 Hexo 博客实战
date: 2026-06-04 10:00:00
categories:
  - 技术分享
tags:
  - Hexo
  - GitHub Actions
  - CI/CD
  - 自动化
cover: https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GitHub%20Actions%20CI%20CD%20automation%20workflow%20illustration%20with%20gears%20and%20code%20on%20dark%20blue%20background&image_size=landscape_16_9
---

## 前言

在搭建个人博客的过程中，每次手动执行 `hexo deploy` 是一件繁琐的事情。通过 GitHub Actions，我们可以实现推送代码后自动构建和部署，真正做到"写作即发布"。

本文将详细介绍如何为 Hexo 博客配置 GitHub Actions 自动部署流程。

## 为什么选择 GitHub Actions？

- **免费**：公开仓库无限制使用，私有仓库每月 2000 分钟免费额度
- **无需服务器**：完全依赖 GitHub 基础设施
- **自动化**：推送代码即触发部署，无需手动操作
- **可靠**：GitHub 的 CI/CD 服务稳定性有保障

## 配置步骤

### 1. 创建工作流文件

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Hexo Blog to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build Hexo
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### 2. 配置 GitHub Pages

进入仓库的 **Settings → Pages**，将 Source 设置为 `gh-pages` 分支。

### 3. 推送代码

```bash
git add .
git commit -m "配置 GitHub Actions 自动部署"
git push origin main
```

## 常见问题

### 权限错误（403）

如果遇到 `Permission denied` 错误，需要在工作流中添加权限声明：

```yaml
permissions:
  contents: write
```

### 工作流文件路径

确保 `.github/workflows/deploy.yml` 位于**仓库根目录**，而不是子目录中，否则 GitHub Actions 无法识别。

## 总结

通过 GitHub Actions 自动部署 Hexo 博客，我们可以专注于内容创作，而无需关心部署流程。这种 CI/CD 的方式不仅提高了效率，也保证了部署的一致性和可靠性。

希望这篇文章对你有所帮助！
