---
layout: page
title:  1. Divisors and Taxes
custom_js: quest1
custom_css: quest1
gem_img: testgem.png
desmos_link: https://www.desmos.com/calculator/49qyn3c7xg
---

You see the first gem in a vending machine and it looks like it only costs 50 magic coins!

Luckily for you, the coins you need are also just lying about in 12 piles. The first pile has 1 coin, the second pile has 2 coins, and so on. There are definitely enough coins in total, but it looks like every time you take a pile of coins, other piles are [taxed](https://constitutioncenter.org/blog/benjamin-franklins-last-great-quote-and-the-constitution){:target="_blank"}!

Can you work out how these magic coins are taxed and how you can claim the total of 50 coins needed to get the mathemagical gem?

<div>
    <div class="buttons noselect">
        <button id="b1">1</button>
        <button id="b2">2</button>
        <button id="b3">3</button>
        <button id="b4">4</button>
        <button id="b5">5</button>
        <button id="b6">6</button>
        <button id="b7">7</button>
        <button id="b8">8</button>
        <button id="b9">9</button>
        <button id="b10">10</button>
        <button id="b11">11</button>
        <button id="b12">12</button>
    </div>
    <div class="messages">
        <span class="feedback">You need 50 coins.</span>
        <span id="msg" class="feedback">The tax collector must be paid!</span>
        <span id="total" class="feedback">Total: 0</span>
    </div>
    <button id="reset">Reset</button>
</div>

{% include gem.html %}
