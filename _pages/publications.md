---
layout: page
permalink: /publications/
title: Publications
description: 
papers_years: [2025,2024,2023,2021,2018]
journals_years: [2024]
nav: true
order: 2
---

### Conferences

<div class="publications">

{% for y in page.papers_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

### Journals

<div class="publications">

{% for y in page.journals_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f journals -q @*[year={{y}}]* %}
{% endfor %}

</div>