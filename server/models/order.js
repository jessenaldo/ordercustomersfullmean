var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	product: String,
	quantity: Number,
	created_date: {type: Date, default: new Date}
})

mongoose.model('Order', OrderSchema);