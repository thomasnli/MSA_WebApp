function myFunction() {
    var cName = document.getElementById("search-form").value;
    var params = {
        "q": cName,
        "subscription-key": "d42e179206f54aacadb02556105f5b81",
        "count":"1"
    };

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?"+$.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type","application/json; charset=utf-8");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d42e179206f54aacadb02556105f5b81");
        },
        type: "GET",
        processData: true

    })
        .done(function (data) {
            var ctUrl = data.value[0].contentUrl;
            $("html").css("background-image", "url('"+ctUrl+"')");

        })
        .fail(function () {
            console.log("fail");
            alert("errorT");
        });
}
