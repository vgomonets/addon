browser.runtime.onMessage.addListener(function (event) {
    browser.tabs.create({
      url:"https://example.org"
    });
})
