---
# ============================================================================
#  Blank page template. Copy this file to _pages/<name>.md (WITHOUT the
#  leading underscore — files starting with "_" are never published), then
#  edit the values below. See README.md, section "新增页面".
#  Chinese version: copy it again to _pages/zh/<name>.md, use a /zh/... permalink,
#  and give both files the same `ref:` (see README.md, "多语言").
# ============================================================================
title: New Page                 # heading and browser-tab title
permalink: /new-page/           # address: https://lgs001elite.github.io/new-page/
ref: new-page                   # same value in the English and Chinese versions of this page
description: Optional one-line description shown under the title.
nav: true                       # show in the top menu (false = page exists but is not in the menu)
nav_order: 9                    # menu position (Main = 1)
# nav_title: Short label        # menu label if different from the title
# published: false              # keep the page offline while drafting

# Optional blocks after the content (same names as on the home page), e.g.:
# sections:
#   - news
#   - name: list
#     data: awards
#     title: Awards
---
Write the page in **Markdown**. A few useful patterns:

## A heading

A paragraph with a [link](https://example.org) and an image:

![Description](/assets/img/your-image.jpg)

- bullet one
- bullet two

<p class="callout">A highlighted note (orange box).</p>

{% include sections/list.html data="awards" title="A data list placed anywhere in the text" %}
