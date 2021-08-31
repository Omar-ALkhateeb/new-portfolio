
$(function () {
    $(".glitch-img").mgGlitch({
        // set 'true' to stop the plugin
        destroy: false,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: true,
        // set 'false' to stop glitch blending
        blend: true,
        // select blend mode type
        blendModeType: 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin: 200,
        // set max time for glitch 1 elem
        glitch1TimeMax: 400,
        // set min time for glitch 2 elem
        glitch2TimeMin: 10,
        // set max time for glitch 2 elem
        glitch2TimeMax: 100,
    });
    $.ajax({
        url: "https://api.github.com/users/Omar-ALkhateeb/repos",
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function (res) {
            $("#load").hide();
            for (let repo of res) {
                console.log(repo)
                $("#repos").append(`<li><a href="${repo['clone_url']}">${repo['name']}</a></li>`);
            }
        }
    });

});