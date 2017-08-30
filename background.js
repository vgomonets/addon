window.addEventListener("message", function (event) {
    console.log('message', event);
    if (event.data &&
        event.data.direction == "open-my-page" && event.data.message == 'open-tab') {
        browser.tabs.create();
    }
});
