window.addEventListener("message", function (event) {
    browser.runtime.sendMessage(event.message);
})
