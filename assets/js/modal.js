let showSplashScreen = localStorage.getItem("splash");
let modalHideBtn = $(".btn-close");

if (!showSplashScreen) {
    $(document).ready(function(){
        $("#splash-screen").modal('show');
    });
    localStorage.setItem("splash", "shown")
} else {
    $("#splash-screen").modal('hide');
}

modalHideBtn.on("click", function() {
    $("#splash-screen").modal('hide');
});