---
layout: page
title:  1. Mind the Divisors
custom_js: quest1
custom_css: quest1
gem_img: gem1.png
desmos_link: https://www.desmos.com/3d/3c155ae977?invertedColors=true
---

According to your pet [canary](https://www.smithsonianmag.com/smart-news/story-real-canary-coal-mine-180961570/){:target="_blank"}, the first mathemagical gem can be found in the [deepest mine in the world](https://www.mining-technology.com/features/feature-top-ten-deepest-mines-world-south-africa/?cf-view){:target="_blank"}.

You grab you hardy hard hat and flashy flashlight and head down the mine shaft to investigate (leaving your pet canary to enjoy the fresh air at the park of course). Following the trail of magic, you find yourself in front of an inactive portal with a keypad next to it. Can you activate the portal and retrieve the mathemagical gem?

<div class="puzzle">
    <div class="buttons noselect">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>11</button>
        <button>12</button>
    </div>
    <div class="messages">
        <span class="feedback">Power Required: 50</span>
        <span id="total" class="feedback">Total Power: 0</span>
    </div>
    <button id="reset">Reset</button>
</div>

{% include gem.html %}
