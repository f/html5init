var application = {
    module:function () {
        var modules = {};
        return function (name) {
            if (modules[name]) {
                return modules[name];
            }
            return modules[name] = { Views:{} };
        };
    }(),
    fetchTemplate:function (path, done) {
        if (this.JST && this.JST[path]) {
            return done(this.JST[path]);
        }
        return $.get(path, function (contents) {
            done(_.template(contents));
        });
    },
    app:_.extend({}, Backbone.Events)
};
jQuery(function ($) {

    var app = application.app;

    var Example = application.module("example");

    var Router = Backbone.Router.extend({
        routes:{
            "":"index"
        },

        index:function () {

        }
    });

    // Router
    app.router = new Router();

    // History start
    Backbone.history.start({ pushState:true });

    // Link handler.
    $(document).on("click", "a:not([data-bypass])", function (evt) {
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
        if (href.slice(protocol.length) !== protocol) {
            evt.preventDefault();
            app.router.navigate(href, true);
        }
    });
});
