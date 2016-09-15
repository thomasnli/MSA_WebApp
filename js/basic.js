var cityName;
$(document).ready(function() {



    $("#searchbtn").on("click", function () {
        var cName=readSearchForm();
        var url=sendPicRequest(cName);
        changeImg(url);



    });


    function readSearchForm() {
        //cityName=$("#search-form").val("value");
        cityName=document.getElementById("search-form").value;
        return cityName;
    }


    function sendPicRequest(cName) {
        // var count=1; var

        var parms={"q":cName, "count":1};
        var testVar=$.param(parms);
        $.ajax({
            //url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=wellington&count=1"
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(parms),
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Content-Type", "multipart/form-data");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6da4e4a5da49409ab75994a611f05ed8");
            },
            type: "POST",
            data: {"q":cName, "count":1}


        })
            .done(function (data) {
                if (data.length != 0) { // if data is received
                    // Get the picture
                    var contentUrl = data.value[0].contentUrl;
                    callback(contentUrl);
                } else {
                    pageheader.innerHTML = "It seems we can't get there. Try another city?";
                }
            })
            .fail(function (error) {
                pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
                console.log(error.getAllResponseHeaders());
            });


    }



    function changeImg(url) {
        //var picture=value.contentUrl;
        $("html").css('background-image', 'url(url)');
        //document.getElementById("body").style.backgroundImage="url(url)";
    }
});



