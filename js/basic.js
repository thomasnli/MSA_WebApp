function myFunction() {
    var cName = document.getElementById("search-form").value;
    //var cName="hongkong";
    var params = {
        "q": cName,
        "subscription-key": "d42e179206f54aacadb02556105f5b81",
        "count":"1"
    };

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?"+$.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json; charset=utf-8");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d42e179206f54aacadb02556105f5b81");
            //xhrObj.getResponseHeader("Access-Control-Allow-Origin:*");
        },
        type: "GET",
        //data: {q: cName,"subscription-key": "6da4e4a5da49409ab75994a611f05ed8"},
        //     subscription-key: 6da4e4a5da49409ab75994a611f05ed8,
        //   count:1},
        processData: true

        // Request body
        // data: "{body}"
    })
        .done(function (data) {
            //console.log("success");
            //alert("success123");
            //if (data.length != 0) { // if data is received
            // Get the picture
            var ctUrl = data.value[0].contentUrl;
            //alert(ctUrl);
            //document.getElementById("body").style.backgroundImage="url("contentUrl")";
            //var ct=""http://content.bookyourgolf.net/Images/Region/1/229-849.jpg""
            $("html").css("background-image", "url('"+ctUrl+"')");

            //   callback(contentUrl);
            //} else {
            //    pageheader.innerHTML = "It seems we can't get there. Try another city?";
            // }  http://www.marktanner.com/art/wellington-large.jpg
        })
        .fail(function () {
            console.log("fail");
            alert("errorJ");
        });
}
FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
        object:'https://developers.facebook.com/docs/',
    })
}, function(response){});
