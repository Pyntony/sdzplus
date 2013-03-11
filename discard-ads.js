chrome.extension.sendRequest({method: "getLocalStorage", key: "block_ads"}, function(response) {
    if (response.data != "false") {
        $(".adBan").css('visibility', 'hidden').height(0).css('padding', 0)
        $("#headerPub").css('visibility', 'hidden')
        $(".pavement").remove()
        $("script[src*='googletagservices.com']").remove()
        $("script[src*='googleadservices.com']").remove()
        $("script[src*='googlesyndication.com']").remove()
        $("script[src*='criteo.com']").remove()
        $("script[src*='doubleclick.net']").remove()
        $("script[src*='serving.sys.com']").remove()
    }
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "block_stats"}, function(response) {
    if (response.data == "true") {
        $("script[src*='google-analytics.com']").remove()
    }
});

