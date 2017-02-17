$(document).ready(function() {
    $("#offer").on("tap", function() {
        $(this).hide();
        $("#top-grey-bar").addClass("grey-bar").addClass("grey-bar-23px");
        $("#order-coffee-page-link").attr("href", "#coffee-order-confirm");
        event.preventDefault();
    });
});
