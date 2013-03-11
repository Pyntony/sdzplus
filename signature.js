chrome.extension.sendRequest({method: "getLocalStorage", key: "signature"}, function(response) {
    if (response.data) {
        var comment = $("#ThreadForum_comments_0_wysiwyg_message, #Comment_wysiwyg_message");
        var form = comment.closest("form");

        form.submit(function(event) {
            comment.val(comment.val() + "\n__________\n" + response.data);
        });
    }
});
