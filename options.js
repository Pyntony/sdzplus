function save_options() {

    // Retrieve inputs
    var input_block_ads    = document.getElementById("block_ads");
    var input_block_stats  = document.getElementById("block_stats");
    var input_label_blue   = document.getElementById("label_blue");
    var input_label_orange = document.getElementById("label_orange");
    var input_label_green  = document.getElementById("label_green");
    var input_signature    = document.getElementById("signature");

    // Retrieve values
    var block_ads    = input_block_ads.checked;
    var block_stats  = input_block_stats.checked;
    var label_blue   = input_label_blue.value;
    var label_orange = input_label_orange.value;
    var label_green  = input_label_green.value;
    var signature    = input_signature.value;

    // Store values
    localStorage["block_ads"]    = block_ads;
    localStorage["block_stats"]  = block_stats;
    localStorage["label_blue"]   = label_blue;
    localStorage["label_orange"] = label_orange;
    localStorage["label_green"]  = label_green;
    localStorage["signature"]    = signature;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

function restore_options() {

    // Retrieve stored options
    var block_ads;
    if (localStorage["block_ads"] == "true")
        block_ads    = true;
    else if (localStorage["block_ads"] == "false")
        block_ads    = false;
    var block_stats;
    if (localStorage["block_stats"] == "true")
        block_stats  = true;
    else if (localStorage["block_stats"] == "false")
        block_stats  = false;
    var label_blue   = localStorage["label_blue"];
    var label_orange = localStorage["label_orange"];
    var label_green  = localStorage["label_green"];
    var signature    = localStorage["signature"];

    // Retrieve inputs
    var input_block_ads    = document.getElementById("block_ads");
    var input_block_stats  = document.getElementById("block_stats");
    var input_label_blue   = document.getElementById("label_blue");
    var input_label_orange = document.getElementById("label_orange");
    var input_label_green  = document.getElementById("label_green");
    var input_signature    = document.getElementById("signature");

    // Set default options
    if (block_ads == undefined)
        block_ads = true;
    if (block_stats == undefined)
        block_stats = false;
    if (label_blue == undefined)
        label_blue = "Admin";
    if (label_orange == undefined)
        label_orange = "Manager";
    if (label_green == undefined)
        label_green = "Staff";
    if (signature == undefined)
        signature = "";

    // Bind values to inputs
    if (block_ads)
        input_block_ads.setAttribute("checked", "checked");
    if (block_stats)
        input_block_stats.setAttribute("checked", "checked");
    input_label_blue.value = label_blue;
    input_label_orange.value = label_orange;
    input_label_green.value = label_green;
    input_signature.value = signature;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
