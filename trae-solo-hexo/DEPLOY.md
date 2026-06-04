# GitHub Pages 部署指南

## 已完成的配置

### 1. GitHub Actions 工作流
已创建 `.github/workflows/deploy.yml`，包含：
- 自动在 `main` 分支推送时触发构建部署
- 使用 peaceiris/actions-gh-pages 自动部署到 `gh-pages` 分支
- 支持手动触发工作流

### 2. Hexo 配置
- 已更新部署分支为 `gh-pages`

---

## 后续需要完成的步骤

### 步骤一：仓库设置

1. 访问您的 GitHub 仓库：https://github.com/Eagle-Mao/trae-solo-hexo
2. 进入 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - **Source**: 选择 `Deploy from a branch`
   - **Branch**: 选择 `gh-pages` 分支，`/ (root)` 文件夹
4. 点击 **Save**

### 步骤二：推送代码

将更改推送到 GitHub：

```bash
git add .
git commit -m "配置 GitHub Actions 自动部署"
git push origin main
```

### 步骤三：查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 查看最新的 workflow 运行状态
3. 等待构建成功后，博客将自动部署

---

## 访问您的博客

部署完成后，您的博客地址为：
**https://Eagle-Mao.github.io/trae-solo-hexo**

---

## 工作原理说明

- **工作流程**：
  1. 推送代码到 `main` 分支
  2. GitHub Actions 自动运行
  3. 构建 Hexo 静态文件
  4. 部署到 `gh-pages` 分支
  5. GitHub Pages 从 `gh-pages` 分支提供服务

---

## 下一步建议

1. 确认 GitHub Pages 设置完成后，您可以：
   - 撰写新的博客文章
   - 更换 Hexo 主题
   - 添加自定义域名

祝您博客愉快！
