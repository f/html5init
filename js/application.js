/* Author:

*/
App = {

	//Application configuration
	config: function() {
		//Mustache syntax templates
		_.templateSettings = {
  			interpolate : /\{\{(.+?)\}\}/g
		};
        Backbone.emulateJSON = true;
	},

	//Application constructor
	start: function() {
		App.config();
		window._App = new App.Router();

        Backbone.history.start({pushState: true, root: '/'});
	},

    views : {}
};
	
//Application router
App.Router = Backbone.Router.extend({

    routes: {
        'index': 'index'
    },

	initialize: function() {
		App.views.app = new App.View();
	},

    index: function() {
        //Index controller
    }

});

App.View = Backbone.View.extend({

	el: $('h1'),
	
	initialize: function() {

		$('#example-template').render({el: this.el, vars: {
			message: 'Hello World',
			random: Math.random().toString().split('.')[1].substr(0,3)
		}});
	}
	
});
