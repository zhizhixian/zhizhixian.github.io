# zhizhixian.github.io

个人主页，地址：https://zhizhixian.github.io

纯 HTML + CSS，不需要构建。推送到 `main` 分支后，GitHub Pages 会自动发布。

## 文件说明

| 文件 | 内容 |
|---|---|
| `index.html` | 首页：简介、新闻、代表论文 |
| `publications.html` | 全部论文（按年份） |
| `cv.html` | 简历摘要 + PDF 下载 |
| `misc.html` | 其他：奖项、研究以外的内容 |
| `assets/css/style.css` | 样式。改 `--accent` 可以换主色 |
| `assets/img/` | 头像、网站图标 |
| `assets/cv.pdf` | 简历 PDF（更新简历时直接替换这个文件） |

## 常见修改

- **加一条新闻**：在 `index.html` 的 `<dl class="news">` 里复制一行 `<dt>…</dt><dd>…</dd>`。
- **加一篇论文**：在 `publications.html` 里复制一个 `<li class="pub">…</li>`，把 Abstract / Bib 那两个 id（比如 `icml26-abs`、`icml26-bib`）换成新的名字，不能和别的论文重复。
- **换头像**：用新照片替换 `assets/img/avatar.jpg`（建议 500×600 像素）。
- **导航栏**：每个页面顶部都有一份，改的时候四个页面都要改。

## 本地预览

```bash
cd ~/zhizhixian.github.io
python3 -m http.server 4000
```

然后打开 http://localhost:4000
