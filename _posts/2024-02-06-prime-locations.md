---
layout: page
title:  2. Prime Locations
custom_js: quest2
custom_css: 
 - quest_common
 - quest2
gem_img: gem2.png
desmos_link: https://www.desmos.com/calculator/vvn2gwwvex?invertedColors=true
---

[Time must have passed more quickly](https://en.wikipedia.org/wiki/Time_dilation) in the portal because the elevators are about to make their last run of the day and you are still stuck at the bottom of the mine. 

There are 100 elevators that run on a rather peculiar schedule, and you need to figure out which ones you might be able to take. At the start of each day, all the elevators are at the top. On the first run, all the elevators go down to the bottom. On the second run, every second elevator goes back up to the top. On the third run, every third elevator makes a run, so those at the top go down and those at the bottom go up. This pattern continues for 100 runs.

The elevators have just finished their 100th run. One final run will bring all the elevators up to reset for the next day. However, they are filling up fast and you don't have time to check them all. Can you identify all the elevators that are at the bottom of the mine after 100 runs?

<div id="exbtns-wrapper" style="display: flex; margin: 1em 0 3px;">
    <div id="exbtns" style="margin: 0 auto 0;">
        <button id="0" class="noselect">Start</button>
        <button id="1" class="noselect">Run 1</button>
        <button id="2" class="noselect">Run 2</button>
        <button id="3" class="noselect">Run 3</button>
        <button id="4" class="noselect">Run 4</button>
        <button id="5" class="noselect">Run 5</button>
    </div>
    <div class="instructions-wrapper">
        <div class="instructions legend">
            <button class="top" disabled="true">Top</button>
            <button class="bot" disabled="true">Bottom</button>
        </div>
    </div>
</div>
<div id="elevators" class="elevators noselect"></div>

<div class="wrapper">
    <div class="messages">
        <span id="elevator-feedback" class="instructions">Which elevators are at the bottom after 100 runs?</span>
        <button id="check-elevators" class="noselect">Check My Answer</button>
    </div>
</div>

<div id="part2">
<p>
You make a mad dash to each of the elevators numbered by a perfect square and just manage to squeeze into the last spot on elevator 100.
</p>
<p>
After a long, rickety ride, you step out to find a frenetic scene. Apparently, a frustrated gem hunter has planted bombs on some of the elevators when they were in the depths of the mine. The bombs have been set to explode the next time the elevator goes back down.
</p>
<p>
Unfortunately, the bomb squad doesn't have enough time to clear all 100 elevators before they head back down in the morning. They need your help to figure out which elevators might have a bomb and which ones are safe.
</p>
<p>
You reason that since none of the bombs have gone off yet, the only elevators that could have a bomb on them are the ones that have only gone down once. Also, the bomb squad has already cleared elevator 1 and found bombs on elevators 2 and 3.
</p>
<p>
Can you figure out which elevators might have a bomb, and which ones are safe?
</p>

<div class="instructions-wrapper">
    <div class="instructions legend">
        <button class="bomb" disabled="true">Bomb</button>
        <button class="safe" disabled="true">Safe</button>
    </div>
</div>
<div id="elevators2" class="elevators noselect"></div>

<div class="wrapper">
    <div class="messages2">
        <button id="reset" class="noselect">Reset</button>
        <span id="elevator2-feedback" class="instructions">Which elevators have a bomb?</span>
        <button id="check-elevators" class="noselect">Check My Answer</button>
    </div>
</div>
</div>

<div id="part3">
<p>
Phew! You manage to help the bomb squad defuse the last bomb just in time.
</p>
<p>
Walking toward the morning sun, you see a small note by the exit:
</p>
<div class="note">
    <p>
    The gem was within my reach. I activated the portal, but no matter how hard I tried, I just couldn't get the box open! Well, if I can't have it, then no one can. The bombs I've planted in the elevators when I was down here will explode the next time they go down and collapse the mine. 
    </p>
    <p>
    I'm done with these gems. If anyone cares, I've left the one already in my possession in the primest locker &mdash; that is, the locker labelled by a prime number such that all the numbers formed by separating its digits are also prime.
    </p>
</div>
<p>
    Can you determine the locker number and retrieve the mathemagical gem?
</p>
<br>
Note: All the lockers are labelled by a 3-digit number.
<br>
Examples:
<ul>
    <li>127 &rarr; 1 | 27 &emsp; 12 | 7 &emsp; 1 | 2 | 7</li>
    <li>223 &rarr; 2 | 23 &emsp; 22 | 3 &emsp; 2 | 2 | 3</li>
    <li>737 &rarr; 7 | 37 &emsp; 73 | 7 &emsp; 7 | 3 | 7</li>
</ul>
<p>
127 is not the right answer both because 12 is not prime and because 27 is not prime.
</p>
<p>
223 is not the right answer because 22 is not prime.
</p>
<p>
737 is not the right answer because 737 is not prime.
</p>

<div class="number-input">
    <input type="number"><button id="part3-input" class="noselect">Check My Answer</button>
</div>
</div>