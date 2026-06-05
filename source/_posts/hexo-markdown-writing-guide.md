---
title: Hexo 博客写作指南：Markdown 语法速查
date: 2026-05-10 09:00:00
categories:
  - 教程
tags:
  - Hexo
  - Markdown
  - 写作
cover: https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Markdown%20writing%20guide%20with%20clean%20typography%20and%20code%20snippets%20on%20minimal%20white%20background&image_size=landscape_16_9
---

## 前言

Markdown 是一种轻量级标记语言，让你可以用简单的语法写出格式丰富的文章。本文是 Hexo 博客写作中常用的 Markdown 语法速查手册。

## 基础语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

### 强调

- **加粗**：`**加粗**`
- *斜体*：`*斜体*`
- ~~删除线~~：`~~删除线~~`

### 列表

无序列表：

- 项目一
- 项目二
- 项目三

有序列表：

1. 第一步
2. 第二步
3. 第三步

## 代码

### 行内代码

使用 `console.log('Hello')` 输出日志。

### 代码块

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## 引用

> 好的代码是自身最好的文档。当你打算添加注释时，问问自己——"我如何改进代码以使注释变得不必要？"
>
> —— Steve McConnell

## 链接与图片

### 链接

```markdown
[链接文字](URL)
```

例如：[Hexo 官网](https://hexo.io/)

### 图片

```markdown
![图片描述](图片URL)
```

## 表格

| 语法 | 说明 | 示例 |
|------|------|------|
| `#` | 标题 | `# 标题` |
| `**` | 加粗 | `**加粗**` |
| `*` | 斜体 | `*斜体*` |
| `` ` `` | 行内代码 | `` `code` `` |
| `>` | 引用 | `> 引用` |

## Hexo 专属语法

### Front Matter

每篇文章开头需要添加 Front Matter：

```yaml
---
title: 文章标题
date: 2026-01-01 00:00:00
categories:
  - 分类名
tags:
  - 标签1
  - 标签2
cover: 封面图片URL
---
```

### 文章摘要

使用 `<!-- more -->` 分隔摘要和正文：

```markdown
这是摘要部分，会显示在首页。

<!-- more -->

这是正文部分，需要点击"阅读更多"才能看到。
```

## 写作建议

1. **标题层级清晰**：不要跳级使用标题
2. **代码加语言标识**：方便语法高亮
3. **善用列表和表格**：让内容更有条理
4. **适当使用引用**：突出重要信息
5. **添加封面图**：让文章更美观

---

*掌握这些语法，你就可以写出排版精美的博客文章了！*
