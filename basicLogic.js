function myFunction() {
    var cName = document.getElementById("search-form").value;
    var params = {
        "q": cName,
        "subscription-key": "6da4e4a5da49409ab75994a611f05ed8",
        "count": "1"
    };
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6da4e4a5da49409ab75994a611f05ed8");
        },
        type: "POST",
        processData: true
    })
        .done(function (data) {
        var ctUrl = data.value[0].contentUrl;
        $("html").css("background-image", "url('" + ctUrl + "')");
    })
        .fail(function () {
        console.log("fail");
        alert("error");
    });
}
