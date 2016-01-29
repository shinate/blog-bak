$(document).ready(function () {
    // random color
    (function () {
        function randomColor(tags, property, colors) {
            for (var i = 0; i < tags.length; i++) {
                var color = colors[i % colors.length];
                $(tags[i]).css(property, color);
            }
        }

        var randomColorTargets = {
            "target_1": {
                "tag": ".post-content h2",
                "property": "border-color",
                "colors": ["#6599ff", "#92cd00", "#ff0000"]
            }
        }

        for (var target in randomColorTargets) {
            if (randomColorTargets.hasOwnProperty(target)) {
                var target_v = randomColorTargets[target];
                randomColor($(target_v["tag"]), target_v["property"], target_v["colors"]);
            }
        }
    })();

    // insert caption for post imgs
    //(function () {
    //    var caption = "";
    //    if ($(".post-content").hasClass("chinese")) {
    //        caption = "图";
    //    } else {
    //        caption = "Figure";
    //    }
    //    var imgs = $(".post-content img");
    //    for (var i = 0; i < imgs.length; i++) {
    //        $(imgs[i]).parent().append("<p style='text-align:center'>" + caption + " " + (i + 1) + "</p>");
    //    }
    //})();

    // show off-canvas menu
    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".post-archive").css("top", $(".post-header").height() + 29);
        var $postArchive = $(".post-archive-icon, .post-archive");
        $(".post-archive-trigger, .post-archive").click(function () {
            // console.log("click");
            if ($postArchive.hasClass("post-archive-triggered")) {
                $postArchive.removeClass("post-archive-triggered");
            } else {
                $postArchive.addClass("post-archive-triggered");
            }
        });
    }

    var post_archive = $('.post-archive');
    if (post_archive.length) {
        var post_archive_iterms = $('.post-archive-iterms');
        var post_archive_currentiterm = post_archive_iterms.find('.checked').parent();

        post_archive.scrollTop(post_archive_currentiterm.position().top - (post_archive.height() - post_archive_currentiterm.height()) / 2);
    }
    //if (window.matchMedia('(min-width: 769px)').matches) {
    //    $(".post-archive").css("top", "");
    //}
});
