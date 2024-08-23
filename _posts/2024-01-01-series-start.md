---
layout: page
title:  "Series Start"
custom_js: quest1
custom_css:
 - quest_common
 - quest1
gem_img: tetrahedron.png
desmos_link: https://www.desmos.com/3d/skbyuxc7oi?invertedColors=true
---

The rumour is that the [Canadian Space Agency](https://www.asc-csa.gc.ca/eng/) (CSA) has located one of the *mathemagical gems* on Mars. Even better, it is believed that they have recovered a secret martian spaceship that could be used to get to there.

Upon arriving at the CSA, you are immediately recognized for your skills and ushered into the secret lab, where mathematicians are busy hacking into the spaceship's user interface. The first challenge is to find which starting numbers will lead to a series of consecutive numbers that sum exactly to 21.

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
In order to gain full access to the ship's systems, the sum of consecutive numbers from the starting number must reach each target exactly. But be careful, the targets change each time you reset the hacking device and some targets are not reachable by any starting number!
</p>
<p>
Can you help the CSA hack into the martian spaceship by selecting the starting number for all five targets?
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

<div>
What is the sum of all the positive numbers less than 100 that are not reachable from any starting number?

<div class="number-input">
    <input id="part3_input" type="number">
    <button id="part3_check" class="noselect">Check</button>
</div>
</div>