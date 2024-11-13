function openTab(){
    var newTab = browser.tabs.create({
        url: 'https://github.com/Magnus984',
        active: true
    })
}
browser.browserAction.onClicked.addListener(openTab)