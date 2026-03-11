const express = require('express')
const rout = express.Router()
const bot = require('./tgbot/tgbot')
require('./tgbot/callback')(bot)
require('dotenv').config()
const {orderMessage} = require('./tgbot/message')
const {mainMenu, menuUnderNewOrder} = require('./tgbot/menu')
const orderSchema = require('./orderModels/newOrder')

const chatID = process.env.CHATID

// ================= СПОВІЩЕННЯ ПРО НОВЕ ЗАМОВЛЕННЯ ТА ЗБЕРЕЖЕННЯ В БД =================
rout.post('/newOrder', async (req, res) => {
    try {
       const infoOrder = new orderSchema({
        ...req.body,
        orderID: Math.floor(100000 + Math.random() * 900000)
       })
       await infoOrder.save()
        const message = orderMessage(infoOrder)
        await bot.sendMessage(chatID, 'НОВЕ ЗАМОВЛЕННЯ', {reply_markup: mainMenu})
        const sentMessage = await bot.sendMessage(chatID, message, {parse_mode: 'Markdown', reply_markup: menuUnderNewOrder})
        
        infoOrder.messageID =  sentMessage.message_id
        await infoOrder.save()
        res.status(200).send({message: 'allDone'})
    } catch (error) {
        console.error('Помилка при обробці нового замовлення' + error)
    }
    

})

module.exports = rout