chrome.extension.sendRequest({method: "getLocalStorage", key: "label_blue"}, function(response) {
    if (response.data)
        $(".labelBlue").text(response.data)
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "label_orange"}, function(response) {
    if (response.data)
        $(".labelOrange").text(response.data)
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "label_green"}, function(response) {
    if (response.data)
        $(".labelGreen").text(response.data)
});
