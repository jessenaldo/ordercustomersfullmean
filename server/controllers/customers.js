var mongoose = require('mongoose');
Customer = mongoose.model('Customer');
Order = mongoose.model('Order');


module.exports = (function() {
	return {
		index: function(req, res) {

			Customer.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		create: function(req, res) {
			console.log('Customer to be saved in db')
			console.log(req.body.name)

			customer = new Customer({name: req.body.name});

			customer.save(function(err) {
				if(err) {
					console.log(err);
				} else {
					res.json(customer);
				}
			})
		},
		delete: function(req, res) { //DOESN'T WORK
			console.log('Customer to be deleted in db');
			console.log(req.params.id)


			// Customer.findOne({ _id: req.params.id }, function(err, customer) {

			// 	console.log(err)
			// 	console.log(customer)




			// 	if(customer.orders > 0) {
			// 		console.log(customer.orders)
			// 		console.log('if statement')

			// 		for (var i = 0; i < customer.orders.length; i++) {
			// 			Order.remove({ _id: customer.orders[i] }, function(err) {
			// 				console.log(err)
			// 				if(err) {
			// 					console.log(err);
			// 				} else {
			// 					console.log('Successfully deleted order');
			// 					if(customers.orders == null) {
			// 						Customer.remove({ _id: req.params.id }, function(err) {

			// 							if(err) {
			// 								console.log(err);
			// 							} else {
			// 								res.json('Successfully deleted')
			// 							}
			// 						})
			// 					}
			// 				}
			// 			})
			// 		}

			// 	} else {
			// 		console.log('else statement')
			// 		Customer.remove({ _id: req.params.id }, function(err) {

			// 							if(err) {
			// 								console.log(err);
			// 							} else {
			// 								res.json('Successfully deleted')
			// 							}
			// 						})
			// 	}
			// })


			Customer.remove({ _id: req.params.id }, function(err) {

				if(err) {
					console.log(err);
				} else {
					res.json('Successfully deleted')
				}
			})
		}
	}
})()