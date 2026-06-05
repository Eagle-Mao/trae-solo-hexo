---
title: 使用 Docker 容器化部署 Node.js 应用
date: 2026-05-15 14:20:00
categories:
  - 技术分享
tags:
  - Docker
  - Node.js
  - 容器化
  - DevOps
cover: https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Docker%20container%20whale%20logo%20with%20Node.js%20deployment%20illustration%20on%20tech%20blue%20background&image_size=landscape_16_9
---

## 什么是 Docker？

Docker 是一个开源的容器化平台，它允许开发者将应用及其依赖打包到一个轻量级、可移植的容器中，确保应用在任何环境中都能一致运行。

## 为什么选择 Docker？

- **环境一致性**：告别"在我电脑上能跑"的问题
- **快速部署**：秒级启动，快速扩展
- **资源隔离**：每个容器独立运行，互不干扰
- **版本管理**：镜像版本化，回滚方便

## 实战：容器化 Node.js 应用

### 1. 创建 Dockerfile

```dockerfile
# 使用官方 Node.js 20 Alpine 镜像作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "server.js"]
```

### 2. 创建 .dockerignore

```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.env
```

### 3. 构建和运行

```bash
# 构建镜像
docker build -t my-node-app .

# 运行容器
docker run -d -p 3000:3000 --name my-app my-node-app
```

### 4. 使用 Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 优化技巧

### 多阶段构建

```dockerfile
# 构建阶段
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

## 总结

Docker 容器化部署让应用的交付变得更加简单和可靠。掌握 Docker 是现代开发者必备的技能之一。
