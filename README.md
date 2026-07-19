# miracleqihe.github.io

可直接部署到 `https://miracleqihe.github.io/` 的学术个人主页。网站使用原生 HTML、CSS 和 JavaScript，无需安装依赖或执行构建命令。

## 本地预览

在项目目录运行：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173/`。

## 编辑内容

1. 点击网页右上角的“编辑”。
2. 修改个人信息、教育经历、论文、其他作品与学术链接。
3. 头像和首屏背景可从电脑上传；图片会在浏览器中自动压缩。
4. “保存预览”只保存到当前浏览器，适合预览和继续编辑。
5. 点击“导出”，下载新的 `content.js`，并用它替换仓库根目录中的同名文件，提交后公开网站才会更新。

也可以直接用文本编辑器修改 [content.js](content.js)。论文条目支持作者、期刊/会议、年份、卷期页码、状态、DOI、PDF、代码、项目页、摘要和 BibTeX。

## 部署到 GitHub Pages

1. 在 GitHub 创建公开仓库 `miracleqihe.github.io`。仓库名必须与 GitHub 用户名完全对应。
2. 将本目录全部文件放在仓库根目录并推送到 `main` 分支。
3. 在仓库 `Settings > Pages` 中选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`。
4. 等待 GitHub Pages 完成部署，访问 `https://miracleqihe.github.io/`。

首次推送可使用：

```powershell
git init
git add .
git commit -m "Create academic homepage"
git branch -M main
git remote add origin https://github.com/miracleqihe/miracleqihe.github.io.git
git push -u origin main
```

GitHub 默认的 `github.io` 地址不需要 `CNAME` 文件。只有绑定自定义域名时才需要另行配置。

## 文件结构

- `index.html`：页面语义结构与编辑器界面
- `styles.css`：响应式布局、莫兰迪渐变与动效
- `script.js`：内容渲染、编辑、头像上传、导入导出
- `content.js`：可发布的个人资料与学术条目
- `assets/campus.jpg`：默认首屏图片，可在编辑器中替换
- `assets/favicon.png`：站点图标
- `assets/lucide.min.js`：本地化图标库，无 CDN 依赖

默认首屏图片来自 Unsplash（photo ID `1562774053-701939374585`），建议在正式发布前替换为与你所在学校、实验室或研究主题有关的照片。
