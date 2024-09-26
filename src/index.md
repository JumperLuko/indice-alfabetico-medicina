---
title: My first Eleventy Site
layout: base.njk
---

# Hello it is working

In some way, is expected fully working

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}

![cat of the day]({{ catpic }})