---
layout: post
title: Cookies Policy
permalink: /cookies/
---

Cookies are small text files stored on your computer that can be used to track your activities on a website.
<br><br>
If enabled on this website, cookies will only be used to track whether each gem quest has been completed on your device. No personal information is collected. No third-party, marketing, analytics, or social media cookies are used on this website. Cookies are set to automatically expire one year after they are created.
<br><br>
If you change your mind, you can enable or disable cookies using the buttons below. If you disable cookies, no new cookies will be created, but previously created cookies will remain until they expire or you delete them from your browser settings.
<br><br>

<div class="buttons">
<button id="enable-btn">Enable Cookies</button>
<button id="disable-btn">Disable Cookies</button>
</div>

<script>
    function createCookie(name,value,days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    enable_btn = document.getElementById("enable-btn");
    disable_btn = document.getElementById("disable-btn");

    enable_btn.addEventListener("click", () => {
        createCookie('cookie-notice-option', 'true', 365);
        alert("Cookies have been enabled.");
    })

    disable_btn.addEventListener("click", () => {
        createCookie('cookie-notice-option', '', -1);
        alert("Cookies have been disabled.");
    })
</script>