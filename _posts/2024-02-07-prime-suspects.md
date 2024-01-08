---
layout: page
title:  2. Prime Suspects
custom_js: quest2
custom_css: 
 - quest_common
 - quest2
gem_img: gem2.png
desmos_link: https://www.desmos.com/calculator/d5hengmylg?invertedColors=true
---

Time must have passed more quickly in the portal because the elevators are about to make their last run of the day and you are still stuck at the bottom of the mine. There are 100 elevators that run on a rather peculiar schedule, and you need to figure out which ones you might be able to take.

At the start of the day, all the elevators were at the top. On the first run, all the elevators went down to the bottom. On the second run, only every second elevator went back up to the top. On the third run, every third elevator made a run, so those at the top went down and those at the bottom went up. You can see where the elevators are after the first 5 runs by clicking the buttons below.

The elevators have just finished their 100th run of the day, and they are filling up fast, so you only have time to try the ones that are at the bottom. Can you identify all the elevators that are at the bottom after 100 runs? Click on the grid to input your answer.

<div id="exbtns-wrapper" style="display: flex; margin: 1em 0 3px;">
    <div id="exbtns" style="margin: 0 auto 0;">
        <button id="0">Start</button>
        <button id="1">Run 1</button>
        <button id="2">Run 2</button>
        <button id="3">Run 3</button>
        <button id="4">Run 4</button>
        <button id="5">Run 5</button>
    </div>
    <div class="instructions-wrapper">
        <div class="instructions legend">
            <button class="top" disabled="true">Top</button>
            <button class="bot" disabled="true">Bottom</button>
        </div>
    </div>
</div>
<div id="elevators" class="noselect"></div>

<div class="wrapper">
    <div class="messages">
        <span id="elevator-feedback" class="instructions">Which elevators are at the bottom after 100 runs?</span>
        <button id="check-elevators">Check My Answer</button>
    </div>
</div>


<div id="part2">
You exit the mine to find a roped off crime scene. The police will not let anyone through until they find the criminal.

The prime suspects are all wearing badges with prime numbers.
</div>