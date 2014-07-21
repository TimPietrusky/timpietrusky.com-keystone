var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post
	};
	locals.data = {
		posts: []
	};
 


	// This request is not a redirect
	var redirectTo = null;

	// Array of redirects
	var _redirects = [
		{ src : 'i-love-r-emmmmmm-because-px-suck', dest : 'i-love-remmmmmm-because-px-suck' },
		{ src : 'emwaw-me', dest : 'emwawme' },
		{ src : 'svg-how-to-create-and-use-vector-graphics-on-the-web', dest : 'svg-how-to-create-use-vector-graphics-on-the-web' },
		{ src : 'knight-rider-loves-kitt' , dest : 'knight-rider-kitt' },
		{ src : 'codepen-slidor-widget', dest : 'codepen-slid0r-widget' }
	]

  // Iterate over all redirects
	_redirects.forEach(function(redirect) {
		if (redirect.src === req.params.post) {
			redirectTo = redirect.dest;
		}
	});



	// Redirect current request
	if (redirectTo !== null) {
		res.redirect(redirectTo, 301);

  // Load the post
	} else {

		// Create a query
		var q = keystone.list('Post').model.findOne({
			state: 'published',
			slug: locals.filters.post
		}).populate('author categories');
		
		
		// Execute the query and receive the result
		q.exec(function(err, result) {
			locals.data.post = result;

			// No post found
			if (result === null) {
				// Show 404 error
				view.render('errors/404');

		  // Post found
			} else {
				// The post has categories
				if (typeof result.categories !== 'undefined') {
					// Save the key of the the first category 
					locals.section = result.categories[0].key;
				}

				// // The post has an image for the meta tags
				// if (fs.existsSync(path)) {
				// 	locals.data.meta.image = "test";
				// }

				// Render the post view
				view.render('post');
			}
		});

	}


	
};
