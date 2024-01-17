---
layout: page
title:  2. Prime Places
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

<div id="exbtns-wrapper" class="instructions-wrapper">
    <div id="exbtns" style="margin: 0 auto 0;">
        <button id="0" class="noselect">Start</button>
        <button id="1" class="noselect">Run 1</button>
        <button id="2" class="noselect">Run 2</button>
        <button id="3" class="noselect">Run 3</button>
        <button id="4" class="noselect">Run 4</button>
        <button id="5" class="noselect">Run 5</button>
    </div>
    <div class="usr-msg legend">
        <button class="top" disabled="true">Top</button>
        <button class="bot" disabled="true">Bottom</button>
    </div>
</div>
<div id="elevators" class="elevators noselect"></div>

<div id="part1-end">
    <div class="messages">
        <span id="elevator-feedback" class="usr-msg">Which elevators are at the bottom after 100 runs?</span>
        <button id="check-elevators" class="noselect">Check My Answer</button>
    </div>
</div>

<div id="part2">
<p>
You make a mad dash to each of the elevators numbered by a perfect square and just manage to squeeze into the last spot on the last elevator.
</p>
<p>
After a long, rickety ride, you step out to find panicked miners rushing toward the exit. Apparently, an evil gem hunter has planted bombs on some of the elevators when they were at the bottom of the mine. The bombs have been set to explode the next time the elevator goes back down.
</p>
<p>
The bomb squad has arrived, but unfortunately, there isn't enough time to clear all 100 elevators before they head back down in the morning.
</p>
<p>
You reason that since none of the bombs have gone off yet, the only elevators that could have a bomb on them are the ones that have only gone down once. Also, the bomb squad has already checked that <strong>elevator 1 is safe</strong> but found bombs on elevators 2 and 3.
</p>
<p>
Can you figure out which elevators might have a bomb, and which ones are safe?
</p>

<div class="instructions-wrapper">
    <button id="set-all-safe" class="noselect set-bombs">Set All Safe</button>
    <button id="set-all-bomb" class="noselect set-bombs">Set All Bomb</button>
    <div class="usr-msg legend">
        <button class="safe" disabled="true">Safe</button>
        <button class="bomb" disabled="true">Bomb</button>
    </div>
</div>
<div id="elevators2" class="elevators noselect"></div>

<div id="part2_end">
    <div class="messages">
        <span id="elevator2-feedback" class="usr-msg">Which elevators, other than 1, only went down once?</span>
        <button id="check-bombs" class="noselect">Check My Answer</button>
    </div>
</div>
</div>

<div id="part3">
<p>
Phew! You manage to help the bomb squad defuse the last bomb just in time.
</p>
<p>
Walking toward the exit, you see a small note on the floor:
</p>
<div class="note">
    <p>
    The gem was within my reach. I activated the portal, but no matter how hard I tried, I just couldn't get the box open! Well, if I can't have it, then no one can. The bombs I've planted in the elevators down here will explode the next time they come back down and collapse the mine. 
    </p>
    <p>
    I'm so done with these gems. If anyone cares, I've left the one already in my possession in the primest locker &mdash; that is, the locker labelled by a prime number such that all the numbers formed by separating its digits are also prime.
    </p>
</div>
<p>
    Can you determine the locker number and retrieve the mathemagical gem?
</p>
<br>
Note: 
    <ul>
        <li>All the lockers are labelled by a 3-digit number.</li>
        <li>The locker number is prime. Furthermore, all numbers formed by separating its digits are also prime.</li>
    </ul>
Non-examples:
<ul>
    <li>113 &rarr; 1 | 13 &emsp; 11 | 3 &emsp; 1 | 1 | 3</li>
    <li>523 &rarr; 5 | 23 &emsp; 52 | 3 &emsp; 5 | 2 | 3</li>
</ul>
<p>
    113 is not the right answer because 1 not prime. 
</p>
<p>
    523 is not the right answer because 52 is not prime.
</p>

<div class="number-input">
    <input id="locker-input" type="number"><button id="check-locker" class="noselect">Check My Answer</button>
</div>
</div>