// СХЕМА МОДЕЛІ ЗАМОВЛЕННЯ В БД

const {Schema, model} = require('mongoose')

const OrderSchema = new Schema({
    orderID: { type: Number},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    car: {type: String},
    budget: {type: String},
    addInfo: {type: String},
    serviceType:{type: String},
    status: {type: String, default: 'нова заявка'},
    messageID: {type: Number},
    cancelInfo: {type: String},
    notes: {type: String}
}, {timestamps: true})

module.exports = model('Order', OrderSchema)