---
layout: page
title:  "4. Counting Consecutively"
custom_js: quest4
custom_css:
 - quest_common
 - quest4
gem_img: gem4.png
desmos_link: https://www.desmos.com/3d/76c4342033?invertedColors=true
---

The king is overjoyed that his music box is working once more and promises to invite you to his next square dance party. 

In the mean time, you still have get the rest of the mathemagical gems. The rumour is that the [Canadian Space Agency](https://www.asc-csa.gc.ca/eng/) (CSA) has located one of the gems on Mars. Even better, it is believed that they have recovered a secret martian spaceship that could be used to get to Mars.

Upon arriving at the CSA, you are immediately recognized for your previous mathemagical exploits and ushered into the secret lab, where mathematicians are busy trying to hack into the spaceship's user interface. To succeed, the sum of consecutive numbers from the starting number must reach the target exactly. But be careful, the targets change each time you reset the hacking device.

Can you help the CSA hack the martian spaceship by finding the correct starting number for all three targets?

<br>

<div class="table_component" role="region" tabindex="0">
<table id="table1">
    <thead>
        <tr>
            <th>Start</th>
            <th>Target</th>
            <th>Sum</th>
            <th>Series</th>
        </tr>
    </thead>
    <tbody>
        <tr id="tr1">
            <td><input id="input1" type="number" min="1" value="1"></td>
            <td><br></td>
            <td id="sum1"></td>
            <td class="series" id="series1"></td>
        </tr>
        <tr id="tr2">
            <td><input id="input2" type="number" min="1" value="1"></td>
            <td></td>
            <td id="sum2"></td>
            <td class="series" id="series2"></td>
        </tr>
        <tr id="tr3">
            <td><input id="input3" type="number" min="1" value="1"></td>
            <td></td>
            <td id="sum3"></td>
            <td class="series" id="series3"></td>
        </tr>
    </tbody>
</table>
</div>

<div>
    <div class="submission-wrapper">
        <div class="messages-wrapper">
            <span class="usr-msg">
                <strong>Start</strong> must be a whole number less than <strong>Target</strong>.
            </span>
        </div>
        <button id="add_btn">Add</button>
        <button id="reset_btn">Reset</button>
    </div>
</div>