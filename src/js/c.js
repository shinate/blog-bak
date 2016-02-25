$(document).ready(function () {

    if (!isBP()) {

        randomColor();

        // show off-canvas menu
        if (window.matchMedia('(max-width: 800px)').matches) {
            $(".post-archive").css("top", $(".post-header").height());
            var $postArchive = $(".post-archive-icon, .post-archive");
            $postArchive.on('click', function () {
                if ($postArchive.hasClass("post-archive-triggered")) {
                    $(document.body).css('overflow', '');
                    $postArchive.removeClass("post-archive-triggered");
                } else {
                    $(document.body).css('overflow', 'hidden');
                    $postArchive.addClass("post-archive-triggered");
                }
            });
        }

        var PA = $('.post-archive');

        PA.length && $.get($CONFIG.url + '/post-archive.html', function (ret) {
            PA.html(ret);
            var current = PA.find('[href="' + noHashUrl() + '"]');
            archiveFocus(current);
        });

        window.history.replaceState({URL: noHashUrl()}, null, window.location.href);

    }

    var ua = window.navigator.userAgent.toLowerCase();

    // !! SUPPORT BP !!
    if (!/msie/.test(ua) && !(/gecko/.test(ua) && !/(compatible|webkit)/.test(ua)) && 'pushState' in window.history) {

        $('.post-archive,.post-nav').on('click', 'a', HANDLE.BPLink);
        $(window).on('popstate', HANDLE.BPPop);

    }
});

var HANDLE = {
    // link
    BPLink: function (evt) {
        var el = $(this);
        var url = el.attr('href');
        window.history.pushState({URL: url}, null, url);
        BPLoad(url);
        archiveFocus($('.post-archive [href="' + url + '"]'));
        evt.preventDefault();
        return false;
    },
    // History
    BPPop: function () {
        var state = window.history.state;
        BPLoad(state.URL);
        archiveFocus($('.post-archive [href="' + state.URL + '"]'));
    }
};

var BPLoad = function (url, cb) {
    var frameLoader = $('<iframe class="BPLoader"></iframe>');
    var name = 'BP_' + (+new Date);

    frameLoader.on('load', function () {
        var el = $(this);
        if (window._b_p_active_name === name) {
            var innerDocument = $(window.frames[name].document);
            $('.post-header').html(innerDocument.find('.post-header').html());
            $('.post-content').html(innerDocument.find('.post-content').html());
            $('.post-nav').html(innerDocument.find('.post-nav').html());
            $('title').text(innerDocument.find('title').text());
            randomColor();
        }
        el.off('load', arguments.callee);
        el.remove();
    });
    frameLoader.attr('src', url + '#_b_p_');
    frameLoader.attr('name', name);
    frameLoader.appendTo($(document.body));
    window._b_p_active_name = name;
};

var archiveFocus = function (target) {
    var _p = $('.post-archive');
    _p.find('.checked').removeClass('checked');
    target.addClass('checked');
    _p.scrollTop(_p.scrollTop() + target.position().top - ((_p.height() - target.height()) / 2));
};


// H2 random color
function randomColor() {
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
}

function isBP() {
    return window.location.hash.indexOf('_b_p_') > 0;
}

function noHashUrl() {
    var _p = window.location.href;
    var _i = _p.indexOf('#');
    return _i < 0 ? _p : _p.substr(0, i);
}