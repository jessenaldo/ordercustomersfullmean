var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CustomerSchema = new mongoose.Schema({
	name: String,
	created_date: {type: Date, default: new Date},
	orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
})

mongoose.model('Customer', CustomerSchema);