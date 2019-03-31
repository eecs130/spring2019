---
layout: default
title: 7. Semantic Tags
nav_order: 7
parent: HTML Resources
---

# Semantic Tags
> **Reference Videos & Readings**
* Suggested Lynda.com Videos:
  * [The value of structure](http://www.lynda.com/HTML-tutorials/value-structure/170427/196152-4.html) (2:48)
  * [Controlling document outlines](http://www.lynda.com/HTML-tutorials/Controlling-document-outlines/170427/196153-4.html) (10:40)
* Optional Lynda.com Videos
  * [The nav element](http://www.lynda.com/HTML-tutorials/nav-element/170427/196154-4.html) (5:32)
  * [The article element](http://www.lynda.com/HTML-tutorials/article-element/170427/196155-4.html) (5:19)
  * [The section element](http://www.lynda.com/HTML-tutorials/section-element/170427/196156-4.html) (5:12)
  * [The div element](http://www.lynda.com/HTML-tutorials/div-element/170427/196158-4.html) (6:04)
* W3Schools Reference:
  * [http://www.w3schools.com/html/html5_semantic_elements.asp](http://www.w3schools.com/html/html5_semantic_elements.asp)
  * [http://www.w3schools.com/html/html_layout.asp](http://www.w3schools.com/html/html_layout.asp)

Semantic elements clearly describe the purpose of the tag in the tag itself, and are new in HTML5. &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;aside&gt;, etc. are examples of semantic tags. Semantic tags are useful for grouping your page into logical sections that are easy for a screen reader or web crawler to interpret.

## Example 1: Simple
```
|---------------------------------|
|             <header>            |
|-----------|---------------------|
| <nav>     | <section>           |
|-----------|---------------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/zBYeRm/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

## Example 2: More Complicated
```
|---------------------------------|
|             <header>            |
|---------------------------------|
|               <nav>             |
|-----------------|---------------|
| <section>       |               |
|-----------------| <aside>       |
| <article>       |               |
|-----------------|---------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/rLNPoq/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>
