$.ajax({
    url: "https://api.github.com/users/Omar-ALkhateeb/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function (res) {
        $("#load").hide();
        for (let repo of res) {
            console.log(repo)
            $("#repos").append(`<li><a href="${repo['git_url']}">${repo['name']}</a></li>`);
        }
    }
});