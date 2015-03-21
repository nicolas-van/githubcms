
(function() {
"use strict";
    window.app = {};

    app.init = function() {
        $("form").submit(doIt);
    };

    function doIt(e) {
        e.preventDefault();
        console.log("yop");
        var github = new Github({
            username: "nicolas-van",
            password: $("#pass").val(),
            auth: "basic",
        });

        var repo = github.getRepo("nicolas-van", "githubapitest");
        repo.write("gh-pages", "yopla.html", 'yohoho', 'testing', function(err, res) {
            debugger;
        });
    };
})();