function myFunction() {
    var cName = document.getElementById("search-form").value;
    //var cName="hongkong";
    var params = {
        "q": cName,
        "subscription-key": "6da4e4a5da49409ab75994a611f05ed8"
    };

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            //xhrObj.setRequestHeader("Content-Type","application/json; charset=utf-8");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6da4e4a5da49409ab75994a611f05ed8");
            xhrObj.getResponseHeader("Access-Control-Allow-Origin:*");
        },
        type: "GET",
        // Request body
        // data: "{body}"
    })
        .done(function (data) {
            if (data.length != 0) { // if data is received
                // Get the picture
                var contentUrl = data.value[0].contentUrl;
                $("html").css('background-image', 'url(contentUrl)');

                callback(contentUrl);
            } else {
                pageheader.innerHTML = "It seems we can't get there. Try another city?";
            }
        })
        .fail(function () {
            alert("error");
        });
}
FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
        object:'https://developers.facebook.com/docs/',
    })
}, function(response){});