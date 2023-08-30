---
layout: page
permalink: /publications/
title: Publications
description: 
papers_years: [2023,2022,2021,2019,2018]
journals_years: [2022,2021]
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