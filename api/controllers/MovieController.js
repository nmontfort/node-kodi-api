/**
* MovieController
*
* @description :: Server-side logic for managing movies
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

	count: function (req, res) {
		Movie.count().exec(function count(error, found) {
			return res.json({
				count: found
			});
		});
	}
	
};
