---
layout: page
title:  3. Some Square Sides
custom_js: quest3
custom_css:
 - quest_common
 - quest3
gem_img: gem3.png
desmos_link: https://www.desmos.com/calculator/ejxejkil35?invertedColors=true
---

Stories of your amazing feats of mathemagical prowess at the mine have reached the king, and he has summoned you to help him with a particularly puzzling problem. In return, the king has promised you a mathemagical gem.

The king presents you with an odd-looking [square dance](https://en.wikipedia.org/wiki/Square_dance) music box. There are some squares on the sides of the box, and on each square, there is a numbered dancer. The king tells you that only a special arrangement of the dancers, where each pair of adjacent squares sums to a square number, will open the box.

Can you open the music box by arranging the squares in the correct sequence?

<div id="puzzle1" class="puzzle">
    <div class="block--isDraggable">0</div>
    <div class="block--isDraggable">2</div>
    <div class="block--isDraggable">4</div>
    <div class="block--isDraggable">5</div>
    <div class="block notDraggable top bot left right"><button id="submit1">Open</button></div>
    <div class="block--isDraggable">7</div>
    <div class="block--isDraggable">9</div>
    <div class="block--isDraggable">11</div>
    <div class="block--isDraggable">14</div>
</div>

<div id="usr-msg1" class="usr-msg">
    Adjacent pairs must sum to a square number.
</div>

<div id="part2">
<p>
You've opened the music box &mdash; or at least you've made some progress. It seems that the sides of the music box have expanded and more dancers have appeared. Perhaps, if you also find the correct arrangement for these dancers, you will find your reward inside.
</p>
<p>
Can you fully open the music box by arranging the squares in the correct sequence?
</p>
<div id="puzzle2" class="puzzle">
    <div class="block--isDraggable">0</div>
    <div class="block--isDraggable">1</div>
    <div class="block--isDraggable">2</div>
    <div class="block--isDraggable">3</div>
    <div class="block--isDraggable">4</div>
    <div class="block--isDraggable">5</div>
        <div class="block notDraggable top left"></div>
        <div class="block notDraggable top"></div>
        <div class="block notDraggable top right"></div>
    <div class="block--isDraggable">6</div>
    <div class="block--isDraggable">7</div>
        <div class="block notDraggable left"></div>
        <div class="block notDraggable"><button id="submit2">Open</button></div>
        <div class="block notDraggable right"></div>
    <div class="block--isDraggable">9</div>
    <div class="block--isDraggable">10</div>
        <div class="block notDraggable left bot"></div>
        <div class="block notDraggable bot audio-wrapper">
            <audio controls loop id="song">
                <source src="{{ site.baseurl }}/assets/audio/2-star bound.mp3" type="audio/mpeg">
            </audio>
        </div>
        <div class="block notDraggable right bot"></div>
    <div class="block--isDraggable">11</div>
    <div class="block--isDraggable">12</div>
    <div class="block--isDraggable">13</div>
    <div class="block--isDraggable">14</div>
    <div class="block--isDraggable">15</div>
    <div class="block--isDraggable">16</div>
</div>
<div id="usr-msg2" class="usr-msg">
    Adjacent pairs must sum to a square number.
</div>

</div>