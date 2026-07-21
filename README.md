# miracleqihe.github.io

Keheng Zhu 的只读学术个人主页，发布地址为 <https://miracleqihe.github.io/>。

## 安全模型

- GitHub Pages 上的公开页面只负责展示 `content.js` 中的内容。
- 公网页面不包含编辑按钮、图片上传、导入、导出或本地草稿功能。
- 部署工作流使用文件白名单，只发布主页运行所需的文件。
- 只有拥有 GitHub 仓库写入权限的人才能修改并重新发布网站。

浏览器开发者工具可以临时改变任何网页在访问者自己电脑上的显示，但不会修改仓库，也不会影响其他访客。

## 修改内容

在本地修改根目录的 `content.js`，检查无误后提交并推送到 `main` 分支。论文条目支持作者、期刊或会议、年份、卷期页码、状态、DOI、PDF、代码、项目页、摘要和 BibTeX。

友链保存在 `content.js` 的 `friends` 数组中，每项支持名称、网站链接、头像和个人简介。公开友链页为 `friends.html`，首页只显示导航入口。

头像和首屏背景当前以图片数据保存在 `content.js` 中。需要更换图片时，可让 Codex 更新该文件并重新发布。

## 本地预览

这是纯静态网站，可以直接打开 `index.html`。也可以在项目目录运行：

```powershell
python -m http.server 4173
```

然后访问 <http://localhost:4173/>。

## 部署

推送到 `main` 分支后，`.github/workflows/pages.yml` 会生成只读站点产物并发布到 GitHub Pages。
