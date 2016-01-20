var mongoose = require('mongoose');
Order = mongoose.model('Order');
Customer = mongoose.model('Customer')

module.exports = (function() {
	return {
		index: function(req, res) {
			Order.find({}).populate('_customer').exec(function(err, orders) {

				if(err) {
					console.log('error retrieving orders');
				} else {
					console.log(orders);
					res.json(orders);
				}
			})

				
		},
		create: function(req, res) {
			console.log(req.body);
			console.log(req.body.customer._id)

			Customer.findOne( { _id: req.body.customer._id }, function(err, customer) {

				var order = new Order({ product: req.body.product.name, quantity: req.body.quantity})
				order._customer = customer._id;

				customer.orders.push(order);

				order.save(function(err) {
					if(err) {
						console.log('Error saving order');
						res.json('Error')
					} else {
						customer.save(function(err) {
							if(err) {
								console.log('Error saving customer');
							} else {
								console.log('Customer and Order successfully saved');
								res.json('Success')
							}
						})
					}
				})

			})
		}
	}
})()