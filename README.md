# website-optimisation
This is a task in partial fulfilment of the Udacity Front-End Development Nanodegree programme. The aim of the assignment is to optimise performance of a portfolio website. Specifically, the <code>index.html</code> page is required to achieve PageSpeed Insight (https://developers.google.com/speed/pagespeed/insights/) scores above 90% in both mobile and desktop tests and the <code>pizza.html</code> page has to run jank-free at 60 fps (where it matters).

In order to view the optimised version of the portfolio you need to open the <code>dist/index.html</code> file. The files have been minimised and optimised with grunt processes. Below I will outline the steps I took in order to achive the required performance enhancements.

## Optimisations
### index.html
* identified external files that could be loaded asynchronously to prevent render blocking
* scaled and optimised images
* placed styling inline to prevent render blocking 
* minified files using a grunt workflow
    * the dependencies used in this project were:
      - clean
      - concurrent
      - cssmin
      - htmlmin
      - imagemin
      - inline
      - jshint
      - uglify

These changes resulted in PageSpeed Insight scores of 94% for both mobile and desktop.
### pizza.html
The optimised version of this file can be accessed from <code>dist/pizza.html</code>.
The jank was apparent in two main animations:

1. scrolling
2. resizing images

####Scrolling
1. An excessively large number of background images that needed to move on scrolling were being created. Therefore the first action was to reduced these. I achieved this by relating the number of rows required to the number of vertical pixels on the screen. This ensures that regardless of the screen resolution the correct number of background pizzas will always be created.
2. In a <code>for-loop</code> that updated the co-ordinates of each background pizza DOM properties were being interrogated unnecessarily.
```
for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
```
Therefore I have moved this outside of the loop and assigned the values to a variable.
```
var scrollRatio = document.body.scrollTop/1250;
  var count = items.length;
  for (var i = 0; i < count; i++) {
    var phase = Math.sin(scrollRatio + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
```
These changes have resulted in teh page consistently achieving frame rates greater than 60 fps during scrolling
###Resizing images
Similar to the scrolling one of the main issues with chaging pizza sizes was the number of DOM property interrogations. In order to simply the process I removed the `determineDx` function completely. The concept that I worked on was just changing the width of the pizza image relative to the size of the div. The percent width was a function of the pizza size 100, 75, 50% for large, medium and small, respectively. In addition I minimised all instances of unnecessary DOM interrogation. In order to prevent excessive painting with the property width change I forced the pizzas onto a separate layer by specifiy
```
#pizzaGenerator {
  will-change: transform;
}
```
in the CSS file.
All these improvements result in a pizza resize time of 0.67 ms.
### Additional changes
Finally, as a perfromance improvement I changed the way in which the pizza menu was generated. Instead of adding a DOM element after each pizza is created, the entire menu list is now created and then added in one single block into the DOM. This has resulted in improved page loading.




