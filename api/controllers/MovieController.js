/**
* MovieController
*
* @description :: Server-side logic for managing movies
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

	count: function (req, res) {
		Movie.count().exec(function count(error, found) {
			return res.json(found);
		});
	},

	test: function (req, res) {
                Movie.findOne({id : req.param('id'), year: req.param('year')}).exec(function count(error, found) {
                        return res.json({
                                first : found
                        });
                });
        }
	
};
