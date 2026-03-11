// СЛУХАЧІ ПОДІЙ

const bot = require('./tgbot')
const orderSchema = require('../orderModels/newOrder')
const {menuUnderQuestion} = require('./menu')
const {cancelMessage, workMessage} = require('../tgbot/message')
const {inlineButtonsWork, inlineButtonsCancel} = require('./menu')

let orderId

module.exports = (bot) => {
    bot.on('callback_query', async (query) => {
    const chatID = query.message.chat.id
    const messageId = query.message.message_id
    const data = query.data

    // ================= В РОБОТІ =================
    if (data === 'takeOrder') {
        const findMessage = await orderSchema.findOne({ messageID: messageId })
        if (!findMessage) {
            await bot.answerCallbackQuery(query.id, { text: '⚠️Цього замовлення не існує', show_alert: true })
            return
        }
        if (findMessage.status === 'В роботі') {
            await bot.answerCallbackQuery(query.id, { text: `⚠️ Замовлення ${findMessage.orderID} вже в роботі`, show_alert: true })
            return
        }
        if (findMessage.status === 'Відмовлено') {
            await bot.answerCallbackQuery(query.id, { text: 'Щоб взяти в роботу замовлення перейдіть в розділ "Відхилені замовлення"', show_alert: true })
            return
        }

        findMessage.status = 'В роботі'
        await findMessage.save()

        await bot.sendMessage(chatID, `✅Замовлення ${findMessage.orderID} взято в роботу.`)
        await bot.sendMessage(chatID, `Додати примітки?`, { reply_markup: menuUnderQuestion })

        orderId = findMessage.orderID
        return
    }

    // ================= СКАСОВАНІ =================
    if (data === 'cancelOreder') {
        const findMessage = await orderSchema.findOne({ messageID: messageId })
        if (!findMessage) {
            await bot.answerCallbackQuery(query.id, { text: '⚠️Цього замовлення не існує', show_alert: true })
            return
        }
        if (findMessage.status === 'Відмовлено') {
            await bot.answerCallbackQuery(query.id, { text: `⚠️ Замовлення ${findMessage.orderID} вже скасовано`, show_alert: true })
            return
        }
        if (findMessage.status === 'В роботі') {
            await bot.answerCallbackQuery(query.id, { text: 'Щоб відмінити взяте в роботу замовлення перейдіть в розділ "Замовлення в роботі"', show_alert: true })
            return
        }

        findMessage.status = 'Відмовлено'
        await findMessage.save()

        await bot.sendMessage(chatID, `✅Замовлення ${findMessage.orderID} скасовано`)
        await bot.sendMessage(chatID, 'Введіть причину відмови')

        bot.once('message', async (msg) => {
            findMessage.cancelInfo = msg.text
            await findMessage.save()
            await bot.sendMessage(chatID, 'Причина відмови зафіксована')
        })
        return
    }

    // ================= ДОДАТИ ПРИМІТКИ =================
    if (data === 'addNotes') {
        const order = await orderSchema.findOne({ orderID: orderId })
        await bot.editMessageText('Введіть примітки', {
            chat_id: chatID,
            message_id: query.message.message_id
        })

        bot.once('message', async (msg) => {
            order.notes = msg.text
            await order.save()
            await bot.sendMessage(chatID, 'Примітки успішно додані. Вдалої роботи)')
        })
        return
    }

    if (data === 'cancelNotes') {
        await bot.editMessageText('Вдалої роботи', {
            chat_id: chatID,
            message_id: query.message.message_id
        })
        return
    }

    // ================= ГОТОВЕ ЗАМОВЛЕННЯ =================
    if (data === 'finishOrder') {
        const findMessage = await orderSchema.findOne({ messageID: messageId })
        if (!findMessage) {
            await bot.sendMessage(chatID, '⚠️Цього замовлення не існує')
            return
        }

        findMessage.status = 'Готово'
        await findMessage.save()

        await bot.sendMessage(chatID, `✅Замовлення ${findMessage.orderID} виконано. Ви можете переглянути його в розділі "Звітність"`)
        return
    }
    // ================= ПАГІНАЦІЯ ЗАМОВЛЕНЬ В РОБОТІ =================
    const pageSize = 1
    if(query.data.startsWith('page_')){
        const totalWorkOder = await orderSchema.countDocuments({status: 'В роботі'})
        // Теперішня сторінка
        const page = parseInt(query.data.split('_')[1], 10)
        const order = await orderSchema.find({status: 'В роботі'})
                                                    .skip(page * pageSize)
                                                    .limit(pageSize)
        // Перевірка наявності замволень на наступній сторінці
        const nextPage = (page + 1) * pageSize < totalWorkOder
        const text = order.map((o) => 
            workMessage(o)
        ).join('\n\n')
        await bot.editMessageText(text, {
            chat_id: chatID,
            message_id: messageId,
            parse_mode: 'Markdown',
            reply_markup: inlineButtonsWork(nextPage, page)
        })
        return
    }
     // ================= ПАГІНАЦІЯ СКАСОВАНИХ ЗАМОВЛЕНЬ =================
    if(query.data.startsWith('cancel_')){
        const totalCancelOder = await orderSchema.countDocuments({status: 'Відмовлено'})
        const page = parseInt(query.data.split('_')[1], 10)
        const order = await orderSchema.find({status: 'Відмовлено'})
                                                    .skip(page * pageSize)
                                                    .limit(pageSize)
        const nextPage = (page + 1) * pageSize < totalCancelOder
        const text = order.map((o) => 
            cancelMessage(o)
        ).join('\n\n')
        await bot.editMessageText(text, {
            chat_id: chatID,
            message_id: messageId,
            parse_mode: 'Markdown',
            reply_markup: inlineButtonsCancel(nextPage, page)
        })
        return
    }
})
}
