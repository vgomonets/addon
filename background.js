window.addEventListener("message", function (event) {
    if (event.data &&
        event.data.direction == "open-my-page" && event.data.message == 'open-tab') {
        browser.tabs.create();
    }
});
