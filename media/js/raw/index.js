let theme = "light";

$(".switchtheme").click(() => {
    if(theme === "light") {
        theme = "dark";
        $("body").addClass("dark");
        $(".switchtheme").removeClass("dark");
    } else if(theme === "dark") {
        theme = "light";
        $(".body").removeClass("dark");
        $(".switchtheme").addClass("dark");
    }
});
