$(document).ready(function() {
    const url = "https://colornames.org/random/json/"
    $.get(url, function(data, status) {
        console.log(data)
            //document.body.style.background = ""
    })
})