---
layout: default
title: 3. Hyperlinks
nav_order: 3
parent: HTML Resources
---

# Hyperlinks Using Anchors
> **Overview Resources**
>
> * Lynda.com video: [Exploring the anchor element](http://www.lynda.com/HTML-tutorials/Exploring-anchor-element/170427/196164-4.html) (2:58)
> * [Absolute versus relative paths](http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)

## 1. Navigating Relative File Paths
Given the image below, the following relative paths are from the perspective of the index.html file.

![](/spring2019/assets/images/file_paths.png)
```shell
../test.html # go up one directory and access the test.html file
../files/blah.html # go up one directory and then into the files directory, and access the blah.html file
../images/dogs/a1.png # go up one directory, then into the images directory, then into the dogs directory, and access the a1.png image
styles/my_style.css # go into the styles directory and access the my_style.css file
styles/dark/new.css # go into the styles directory, then into the dark directory, and access the new.css file
```
<a href="/spring2019/assets/paths.zip">Download the sample files</a> to experiment with relative file paths (and view the home/index.html).

## 2. Linking to pages within your own site
* Lynda.com Video: [Linking to pages within your own site](http://www.lynda.com/HTML-tutorials/Linking-pages-within-your-site/170427/196165-4.html) (10:21)

## 3. Linking to external pages
<iframe src="//codepen.io/vanwars/embed/mERgZY/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

> **Additional Resources**
* Lynda.com Video: [Linking to external pages](http://www.lynda.com/HTML-tutorials/Linking-external-pages/170427/196166-4.html) (4:18)


## 4. Linking to page regions
<iframe src="//codepen.io/vanwars/embed/rLjbXG/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


> **Additional Resources**
* Lynda.com Video: [Linking to page regions](http://www.lynda.com/HTML-tutorials/Linking-page-regions/170427/196168-4.html) (9:46)


## 5. Organizing links into a menu
The links in this example don't link to anything (yet), but is meant to show that div and span tags can be useful for grouping links into conceptual widgets (like menus)
<iframe src="//codepen.io/vanwars/embed/YMWqoO/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>