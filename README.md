# lgs001elite.github.io

**Gaosheng Liu (刘高生)** 的个人学术主页 · <https://lgs001elite.github.io>
*Personal academic website, built by GitHub Pages (Jekyll) from the `liu` branch. Maintenance guide below (in Chinese).*

GitHub Pages 会在每次推送到 **`liu`** 分支后自动构建并发布网站（通常 1–2 分钟），不需要运行任何命令。
所有日常更新都可以直接在 GitHub 网页编辑器里完成。

---

## 目录

1. [网站结构总览](#1-网站结构总览)
2. [日常更新](#2-日常更新)
3. [首页区块（sections）](#3-首页区块sections)
4. [新增页面](#4-新增页面)
5. [导航菜单](#5-导航菜单)
6. [组件接口参考](#6-组件接口参考)
7. [扩展：新的数据列表 / 新的区块 / 新的集合](#7-扩展新的数据列表--新的区块--新的集合)
8. [修改样式](#8-修改样式)
9. [本地预览](#9-本地预览)
10. [发布与排错](#10-发布与排错)

---

## 1. 网站结构总览

```text
_config.yml                 站点设置：姓名、联系方式、菜单外链、新闻条数等
_pages/                     页面（每个 .md 文件 = 一个页面）
  Main.md                     首页：简介文字 + 首页区块顺序
  publications.md             预留：完整论文列表        (published: false)
  projects.md                 预留：项目卡片页          (published: false)
  service.md                  预留：获奖 / 学术服务 / 报告 (published: false)
  blog.md                     预留：博客列表            (published: false)
  _template.md                空白页面模板（以 _ 开头，永远不会发布，只用来复制）
_news/                      新闻，每条一个文件 YYYY-MM-DD-主题.md
_data/                      结构化数据（YAML）
  publications.yml            全部论文（selected: true 的显示在首页）
  awards.yml / service.yml / talks.yml   获奖、学术服务、报告列表
_projects/                  项目，每个项目一个文件（projects 页面使用）
_posts/                     博客文章 YYYY-MM-DD-标题.md（blog 页面使用）
_layouts/                   页面骨架
  default.html                所有页面的外框（head、导航、页脚、脚本）
  main.html                   首页布局（姓名、照片、简介 + 区块）
  page.html                   普通页面布局（标题、描述、正文 + 区块）
  project.html / post.html    单个项目 / 单篇博客
_includes/
  layout/                     外框部件：head、header(导航)、footer、scripts、sections(区块渲染器)
  sections/                   区块：news、selected_publications、publications、list、projects、posts、visitor_map、contact
  components/                 小组件：news_item、publication、project_card、social_icons
_sass/                      样式：_variables(颜色) _themes(明暗) _layout _navbar _components _footer _custom(自定义)
assets/                     静态文件：css/ img/ js/ pdf/
_bibliography/papers.bib    全部论文的 BibTeX（仅存档，不显示在网站上）
404.html                    “页面不存在”页
```

**三层关系：** 页面 (`_pages/*.md`) 选择一个布局 (`_layouts/`)，布局按页面 front matter 里的 `sections:` 依次插入区块 (`_includes/sections/`)，区块再用小组件 (`_includes/components/`) 渲染每一条内容。内容本身放在 `_data/`、`_news/`、`_projects/`、`_posts/` 里，和样式、模板完全分开。

> **front matter** 指文件开头两行 `---` 之间的设置（YAML 格式）。注意：缩进只能用空格，冒号后要有空格。

---

## 2. 日常更新

| 想改什么 | 改哪里 |
|---|---|
| 简介、名言、求职提示 | `_pages/Main.md` 的正文 |
| 新闻 | `_news/` 新建一个文件 |
| 论文 | `_data/publications.yml` |
| 简历 PDF | 用同名文件替换 `assets/pdf/resume_lgs.pdf` |
| 照片 | 替换 `assets/img/gaosheng9527.jpg`（建议宽 720px 左右，< 200 KB） |
| 邮箱、地址、微信、各平台 ID | `_config.yml` 的 Contact 部分（留空即隐藏该项） |
| 获奖 / 学术服务 / 报告 | `_data/awards.yml` / `service.yml` / `talks.yml` |

### 新增一条新闻
在 `_news/` 新建文件 `2026-12-01-best-paper.md`：

```markdown
---
date: 2026-12-01
---
Paper [论文标题](https://doi.org/...) accepted by **Conference 2027**.
```

首页显示最新 6 条，其余折叠在 “Show all news” 里（条数由 `_config.yml` 的 `news_limit` 控制）。外部链接会自动在新标签页打开。

### 新增一篇论文
复制 `_data/publications.yml` 里的一条，修改字段：

```yaml
- title: "论文标题"
  authors: [Gaosheng Liu, Co Author, Another Author]   # 你的名字自动加粗
  venue: IEEE Transactions on Mobile Computing           # 期刊/会议全称
  venue_short: IEEE TMC                                  # 简称（可选）
  year: 2027
  award: Best Paper Award                                # 可选
  selected: true                                         # true = 同时显示在首页
  links:                                                 # 可选，显示为小按钮
    DOI: https://doi.org/...
    arXiv: https://arxiv.org/abs/...
    PDF: /assets/pdf/paper.pdf                           # 站内 PDF 放到 assets/pdf/
    Code: https://github.com/...
```

首页按文件中的顺序显示 `selected: true` 的论文；完整列表页（启用后）按年份自动分组。

---

## 3. 首页区块（sections）

首页简介下面显示哪些区块、按什么顺序，由 `_pages/Main.md` 的 `sections:` 决定。删掉一行即隐藏，调整行的顺序即调整显示顺序：

```yaml
sections:
  - news
  - selected_publications
  - visitor_map
  - contact
```

可用区块（任何页面都可以用，不只是首页）：

| 区块名 | 内容 | 可选参数 |
|---|---|---|
| `news` | 新闻列表（`_news/`） | `limit`、`title` |
| `selected_publications` | 精选论文（`selected: true`） | `title` |
| `publications` | 全部论文，按年份分组 | `title` |
| `list` | 任意 `_data/*.yml` 的日期列表 | `data`（必填）、`title` |
| `projects` | 项目卡片（`_projects/`） | `title` |
| `posts` | 博客文章列表（`_posts/`） | `limit`、`title` |
| `visitor_map` | 访客地图 | — |
| `contact` | 图标 + 联系方式 | — |

带参数时写成下面的形式：

```yaml
sections:
  - name: news
    limit: 3
  - name: list
    data: awards
    title: Awards
  - name: posts
    limit: 3
    title: Recent posts
```

---

## 4. 新增页面

### 方式 A：启用预留页面（最简单）
以下页面已经做好，只是暂时没有上线。打开文件，把 `published: false` 改成 `published: true`，提交即可；菜单里会自动出现对应入口。

| 文件 | 地址 | 内容来源 |
|---|---|---|
| `_pages/publications.md` | `/publications/` | `_data/publications.yml`（全部论文，按年份） |
| `_pages/projects.md` | `/projects/` | `_projects/*.md`（每个项目一张卡片 + 一个详情页） |
| `_pages/service.md` | `/service/` | `_data/awards.yml`、`service.yml`、`talks.yml`（空列表自动隐藏） |
| `_pages/blog.md` | `/blog/` | `_posts/*.md` |

- 启用 Publications 页后，首页论文区块下会自动出现 “All publications” 链接。
- **项目**：复制 `_projects/example-project.md` 为 `_projects/项目短名.md`，删去其中的 `published: false`，填写标题、简介、图片（放在 `assets/img/projects/`）、`order`（排序）。示例文件本身保持 `published: false` 即可。
- **博客**：复制 `_posts/2026-11-05-example-post.md`，文件名必须是 `YYYY-MM-DD-标题.md`，删去 `published: false`。

### 方式 B：自定义新页面
1. 复制 `_pages/_template.md`，重命名为 `_pages/teaching.md`（**去掉开头的下划线**，以 `_` 开头的文件不会发布）。
2. 修改 front matter：

   ```yaml
   ---
   title: Teaching
   permalink: /teaching/          # 网址
   description: Courses and guest lectures.
   nav: true                      # 显示在菜单
   nav_order: 6                   # 菜单位置（Main = 1）
   # nav_title: Teach             # 菜单里的短名字（可选）
   # sections: [news]             # 正文后追加区块（可选）
   ---
   ```
3. 在下面用 Markdown 写正文。正文中也可以随处插入区块，例如：
   `{% include sections/list.html data="teaching" title="Courses" %}`

页面默认使用 `page` 布局（标题 + 描述 + 正文 + 区块），不需要写 `layout:`。
想先写不上线：加 `published: false`。想上线但不进菜单：`nav: false` 或删掉 `nav`。

---

## 5. 导航菜单

菜单顺序：① `nav: true` 的页面，按 `nav_order` 从小到大；② `_config.yml` 里的 `nav_links`；③ 明暗切换按钮。

`nav_links` 用于添加文件或外部网站链接：

```yaml
nav_links:
  - title: CV
    url: /assets/pdf/resume_lgs.pdf
  - title: Lab
    url: https://cs.mst.edu/research/labs/crewman/
```

菜单项达到 5 个及以上时，导航栏会自动变宽，并在宽度小于 992px 时折叠为 ☰ 按钮，保证一行放得下。菜单项很多时，用 `nav_title` 给页面起个短名字。

---

## 6. 组件接口参考

在任何页面的 Markdown 正文中都可以直接调用：

```liquid
{% include sections/list.html data="awards" title="Awards" %}       <!-- 任意数据列表 -->
{% include sections/publications.html %}                              <!-- 全部论文（按年） -->
{% include sections/projects.html %}                                  <!-- 项目卡片 -->
{% include sections/news.html %}                                      <!-- 新闻 -->

{% for pub in site.data.publications %}                                <!-- 自定义筛选论文 -->
  {% if pub.year >= 2024 %}{% include components/publication.html pub=pub %}{% endif %}
{% endfor %}
```

**数据格式约定**

| 数据 | 位置 | 字段 |
|---|---|---|
| 论文 | `_data/publications.yml` | `title` `authors` `venue` `venue_short` `year` `award` `selected` `links` |
| 日期列表 | `_data/<名字>.yml` | `date` `title` `detail`(Markdown，可选) `url`(可选) |
| 新闻 | `_news/YYYY-MM-DD-主题.md` | front matter：`date`；正文一行 Markdown |
| 项目 | `_projects/<短名>.md` | `title` `description` `image` `order` `link`(可选，卡片直接跳转外链) `links` |
| 博客 | `_posts/YYYY-MM-DD-标题.md` | `title` `description` `tags` |

**页面 front matter 约定**

| 字段 | 作用 |
|---|---|
| `title` / `description` | 页面标题 / 标题下的说明 |
| `permalink` | 网址，例如 `/teaching/` |
| `nav` / `nav_order` / `nav_title` | 是否进菜单 / 菜单位置 / 菜单短名 |
| `sections` | 正文后的区块列表 |
| `published: false` | 暂不发布 |
| `layout` | 默认 `page`；首页用 `main` |

---

## 7. 扩展：新的数据列表 / 新的区块 / 新的集合

### 新的数据列表（例如 Teaching）
1. 新建 `_data/teaching.yml`：
   ```yaml
   - date: Fall 2027
     title: CS 1234 Embedded Systems (Guest Lecture)
     detail: Missouri S&T
   ```
2. 在任意页面引用：`sections:` 里加 `- name: list` / `data: teaching`，或在正文里用 `include sections/list.html`。

### 新的区块
1. 新建 `_includes/sections/区块名.html`（可参考 `list.html`）。区块里用 `include.section.参数名` 读取参数。
2. 在页面的 `sections:` 里写上区块名即可使用。
3. 样式写进 `_sass/_components.scss` 或 `_sass/_custom.scss`。

> 如果 `sections:` 里写了一个不存在的区块名，构建会失败，GitHub 会发邮件提示（见第 10 节）。

### 新的集合（例如 Talks 每个都有详情页）
在 `_config.yml` 的 `collections:` 下仿照 `projects` 添加：
```yaml
  talks:
    output: true
    permalink: /talks/:name/
```
再新建 `_talks/` 文件夹，并在 `defaults:` 中指定布局（可复用 `project` 布局或新建 `_layouts/talk.html`）。

---

## 8. 修改样式

| 想改什么 | 文件 |
|---|---|
| 主题色（浅色：紫色，深色：青色）、橙色提示框颜色 | `_sass/_variables.scss` |
| 明暗模式配色 | `_sass/_themes.scss` |
| 内容宽度 | `_config.yml` 的 `max_width` |
| 宽导航栏的宽度 | `_sass/_variables.scss` 的 `$navbar-wide-width` |
| 自己的覆盖样式 | `_sass/_custom.scss`（最后加载，优先级最高） |

注意：`_sass/` 中只写英文/ASCII 字符（GitHub 使用的 Sass 编译器遇到中文注释会报错）。

页面上可用的现成样式：`<p class="callout">…</p>`（橙色提示框）。

---

## 9. 本地预览

需要 Ruby。在仓库目录下：

```bash
bundle install                                   # 只需第一次
bundle exec jekyll serve --livereload            # 打开 http://localhost:4000
bundle exec jekyll serve --livereload --unpublished   # 同时预览 published: false 的页面
```

`Gemfile` 使用 `github-pages` gem，本地构建与 GitHub 完全一致。修改 `_config.yml` 后需要重启 `jekyll serve`。

---

## 10. 发布与排错

- 推送到 `liu` 分支即发布。可在仓库 **Actions** 标签页查看 “pages build and deployment” 是否成功。
- 构建失败时 GitHub 会发邮件，邮件和 Actions 日志会写明出错的文件和行号。常见原因：
  - YAML 缩进或冒号错误（front matter、`_data/*.yml`、`_config.yml`）；
  - `sections:` 中写了不存在的区块名；
  - `_sass/` 中有中文字符。
- 网站没有更新：确认 Settings → Pages 的来源分支是 `liu`；浏览器强制刷新（Cmd+Shift+R）。
- 想撤销某次修改：在 GitHub 的提交历史中找到该提交，或在本地 `git revert <提交号>`。

---

基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题（MIT 许可证，见 `LICENSE`）。
