---
layout: page
title:  "4. Cumulating Consecutive Counts"
custom_js: quest4
custom_css:
 - quest_common
 - quest4
gem_img: gem4.png
desmos_link: https://www.desmos.com/3d/c5009e0bf2?invertedColors=true
---

The king is overjoyed that his music box is working once more and promises to invite you to his next square dance party. 

In the mean time, you still have get the rest of the mathemagical gems. The rumour is that the [Canadian Space Agency](https://www.asc-csa.gc.ca/eng/) (CSA) has located one of the gems on Mars. Even better, it is believed that they have recovered a secret martian spaceship that could be used to get to Mars.

Upon arriving at the CSA, you are immediately recognized for your previous mathemagical exploits and ushered into the secret lab, where mathematicians are busy hacking into the spaceship's user interface. 

<br>

<div class="table_component" role="region" tabindex="0">
<table id="table1">
    <thead>
        <tr>
            <th>Start</th>
            <th>Target</th>
            <th>Sum</th>
            <th>Series of consecutive numbers</th>
        </tr>
    </thead>
    <tbody>
        <tr id="tr1">
            <td><input type="number" min="1" max="20" value="1" inputmode="numeric"></td>
            <td>21</td>
            <td></td>
            <td class="series"></td>
        </tr>
    </tbody>
</table>
</div>

<div>
    <div class="submission-wrapper">
        <div class="messages-wrapper">
            <span class="usr-msg">
                <strong>Start</strong> must be a positive integer less than <strong>Target</strong>.
            </span>
        </div>
        <button id="add_btn">Add</button>
        <button id="reset_btn">Reset</button>
    </div>
</div>

What is the sum of all the starting numbers that will reach the target of 21?

<div class="number-input">
    <input id="part1_input" type="number">
    <button id="part1_check" class="noselect">Check</button>
</div>

<br>

<div id="part2">
<p>
In order to gain full access to the ship's systems, the sum of consecutive numbers starting from the chosen number must reach each target exactly. But be careful, the targets change each time you reset the hacking device!
</p>
<p>
Can you help the CSA hack into the martian spaceship by finding the starting number for all five targets?
</p>
<br>
<div class="table_component" role="region" tabindex="0">
<table id="table2">
    <thead>
        <tr>
            <th>Start</th>
            <th>Target</th>
            <th>Sum</th>
            <th>Series of consecutive numbers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="number" min="1" value="1" inputmode="numeric"></td>
            <td></td>
            <td></td>
            <td class="series"></td>
        </tr>
        <tr>
            <td><input type="number" min="1" value="1" inputmode="numeric"></td>
            <td></td>
            <td></td>
            <td class="series"></td>
        </tr>
        <tr>
            <td><input type="number" min="1" value="1" inputmode="numeric"></td>
            <td></td>
            <td></td>
            <td class="series"></td>
        </tr>
        <tr>
            <td><input type="number" min="1" value="1" inputmode="numeric"></td>
            <td></td>
            <td></td>
            <td class="series"></td>
        </tr>
        <tr>
            <td><input type="number" min="1" value="1" inputmode="numeric"></td>
            <td></td>
            <td></td>
            <td class="series"></td>
        </tr>
    </tbody>
</table>
</div>

<div>
    <div class="submission-wrapper">
        <div class="messages-wrapper">
            <span class="usr-msg">
                <strong>Start</strong> must be a positive integer less than <strong>Target</strong>.
            </span>
        </div>
        <button id="add_btn2">Add</button>
        <button id="reset_btn2">Reset</button>
    </div>
</div>
</div>