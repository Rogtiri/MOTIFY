const TelegramAPI = require('node-telegram-bot-api')
require('dotenv').config()
const orderSchema = require('../orderModels/newOrder')
const {mainMenu, workMenu, cancelMenu, inlineButtonsWork, inlineButtonsCancel, menuEditOrder, backMenu} = require('./menu')
const {doneMessage, cancelMessage, workMessage} = require('../tgbot/message')

const bot = new TelegramAPI(process.env.BOT_API, {polling: true})

const commands = [
    {
        command: 'start',
        description: 'Запускает бота'
    },
    {
        command: 'help',
        description: 'Руководство по использованию бота'
    },
    {
        command: 'menu',
        description: 'Открывает меню если вдруг оно было не открыто'
    },
]



bot.setMyCommands(commands)


bot.onText(/\/start/, async (msg) => {
    await bot.sendSticker(msg.chat.id, 'https://data.chpic.su/stickers/h/HollowKnightSilksong/HollowKnightSilksong_001.webp')
    //await bot.sendMessage(msg.chat.id, 'Привет Пап, я написал этого бота для твоего личного использоания, чтоб тебе было проще работать с закзами. Если что-то непонятно то звони, пиши, а так команда /help должна полностью ответить на твои вопросы', {reply_markup: mainMenu})
})

bot.onText(/\/help/, async (msg) => {
    await bot.sendMessage(msg.chat.id, 'Text')
})

bot.onText(/\/menu/, async (msg) => {
    await bot.sendMessage(msg.chat.id, 'Меню бота', {reply_markup: mainMenu})
})




// ================= Кількість замовлень на сторінці =================
const pageSize = 1
// ЗБЕРЕЖЕННЯ В ФОРМАТІ КЛЮЧ ЗНАЧЕННЯ
const userStep = {}

const validation = async (order, chat) => {
    // Регулярний вираз який перевіря вміст на наявність лише цифр
    if(!/^\d+$/.test(order)){
        await bot.sendMessage(chat, 'Номер замовлення має містити лише цифри')
        return false
    }
    // Регулярний вираз який перевіря кількість цифр
    else if(!/^\d{6}$/.test(order)){
        await bot.sendMessage(chat, 'Номер замовлення має 6 цифр')
        return false
    }

    return true
}
// ================= РОЗДІЛИ МЕНЮ =================
bot.on('message', async (msg) => {
    const chatID = msg.chat.id
    const text = msg.text
    const page = 0
    // РОЗДІЛ В РОБОТІ
    if(text === 'Замовлення в роботі'){
        const totalWorkOder = await orderSchema.countDocuments({status: 'В роботі'})
        const workOder = await orderSchema.find({status: 'В роботі'})
                                            .skip(page * pageSize)
                                            .limit(pageSize)
        const nextPage = (page + 1) * pageSize < totalWorkOder
        if(totalWorkOder === 0){
            await bot.sendMessage(chatID, 'Немає замовлень у роботі')
            return
        }
        const textMessage = workOder.map((o) =>
            workMessage(o)
        ).join('\n\n')
        await bot.sendMessage(chatID, 'Меню оновлено', {reply_markup: workMenu})
        await bot.sendMessage(chatID, textMessage, {parse_mode: 'Markdown', reply_markup: inlineButtonsWork(nextPage, page)})
        return
    }
    // РОЗДІЛ ВІДХИЛЕНО
    if(text === 'Відхилені замовлення'){
        
        const totalCancelOder = await orderSchema.countDocuments({status: 'Відмовлено'})
        const cancelOder = await orderSchema.find({status: 'Відмовлено'})
                                            .skip(page * pageSize)
                                            .limit(pageSize)
        const nextPage = (page + 1) * pageSize < totalCancelOder
        if(totalCancelOder === 0){
            await bot.sendMessage(chatID, 'Немає скасованих замовлень')
            return
        }
        const textMessage = cancelOder.map((o) =>
            cancelMessage(o)
        ).join('\n\n')
        await bot.sendMessage(chatID, 'Меню оновлено', {reply_markup: cancelMenu})
        await bot.sendMessage(chatID, textMessage, {parse_mode: 'Markdown', reply_markup: inlineButtonsCancel(nextPage, page)})
        return
    }
    // ЗВІТНІСТЬ
    if(text === 'Звітність'){
        
        const totalFinishOder = await orderSchema.countDocuments({status: 'Завершене замовлення'})
        const cancelOder = await orderSchema.find({status: 'Завершене замовлення'})
                                            .skip(page * pageSize)
                                            .limit(pageSize)
        const nextPage = (page + 1) * pageSize < totalFinishOder
        if(totalFinishOder === 0){
            await bot.sendMessage(chatID, 'Немає завершених замовлень')
            return
        }
        const textMessage = cancelOder.map((o) =>
            doneMessage(o)
        ).join('\n\n')
        await bot.sendMessage(chatID, 'Меню оновлено', {reply_markup: backMenu})
        const report = `
        За весь час виконано *${totalFinishOder} замовлень*
        `
        await bot.sendMessage(chatID, report, {parse_mode: 'Markdown'})
        await bot.sendMessage(chatID, textMessage, {parse_mode: 'Markdown', reply_markup: inlineButtonsCancel(nextPage, page)})
        return
    }

    // РОЗДІЛ МЕНЮ ВЗЯТИ В РОБОТУ ВІДХИЛЕНЕ ЗАМОВЛЕННЯ
    if(text === "Взяти в роботу"){
        delete userStep[chatID]
        userStep[chatID] = 'awaitForCancelId'
        await bot.sendMessage(chatID, 'Введіть номер замовлення яке хочете взяти в роботу. НОМЕР ЗАМОВЛЕННЯ СКЛАДАЄТЬСЯ ІЗ 6 ЦИФР БЕЗ БУКВ')
        return
    }

    // РОЗДІЛ МЕНЮ СКАСУВАТИ ЗАМОВЛЕННЯ ВЗЯТЕ В РОБОТУ
    if(text === "Скасувати замовлення"){
        delete userStep[chatID]
        userStep[chatID] = 'awaitForWorkId'
        await bot.sendMessage(chatID, 'Введіть номер замовлення яке хочете скасувати. НОМЕР ЗАМОВЛЕННЯ СКЛАДАЄТЬСЯ ІЗ 6 ЦИФР БЕЗ БУКВ')
        return
    }

    // РОЗДІЛ МЕНЮ РЕДАГУВАТИ ЗАМОВЛЕННЯ ВЗЯТЕ В РОБОТУ
    if(text === "Редагувати замовлення"){
        delete userStep[chatID]
        userStep[chatID] = 'awaitForReductMessage'
        await bot.sendMessage(chatID, 'Введіть номер замовлення яке хочете відредагувати. НОМЕР ЗАМОВЛЕННЯ СКЛАДАЄТЬСЯ ІЗ 6 ЦИФР БЕЗ БУКВ')
        return
    }
    // РОЗДІЛ МЕНЮ ЗАВЕРШИТИ ЗАМОВЛЕННЯ ВЗЯТЕ В РОБОТУ
    if(text === "Завершити замовлення"){
        delete userStep[chatID]
        userStep[chatID] = 'awaitForFinished'
        await bot.sendMessage(chatID, 'Введіть номер замовлення яке вже завершили. НОМЕР ЗАМОВЛЕННЯ СКЛАДАЄТЬСЯ ІЗ 6 ЦИФР БЕЗ БУКВ')
        return
    }

    // ПОВЕРНУТИСЬ В ОСНОВНЕ МЕНЮ
    if(text == '<-НАЗАД'){
        delete userStep[chatID]
        await bot.sendMessage(msg.chat.id, 'Меню бота', {reply_markup: mainMenu})
        return
    }


    // ВЗЯТИ В РОБОТУ
    if(userStep[chatID] === 'awaitForCancelId'){
            const orderId = text
            const valid = await validation(orderId, chatID)
            if(!valid) return
            const findOrder = await orderSchema.findOne({orderID: Number(orderId)})
            if(!findOrder){
                await bot.sendMessage(chatID, 'Номер замовлення відсутній, або введено не коректно')
                return
            }
            await bot.sendMessage(chatID, `Замовлення №${orderId} взято в роботу`)
            findOrder.status = 'В роботі'
            await findOrder.save()

            delete userStep[chatID]
            return
    }
    // СКАСУВАТИ ЗАМОВЛЕННЯ
    if(userStep[chatID] === 'awaitForWorkId'){
            const orderId = text
            const valid = await validation(orderId, chatID)
            if(!valid) return
            const findOrder = await orderSchema.findOne({orderID: Number(orderId)})
            if(!findOrder){
                await bot.sendMessage(chatID, 'Номер замовлення відсутній, або введено не коректно')
                return
            }
            await bot.sendMessage(chatID, `Замовлення №${orderId} скасовано`)
            findOrder.status = 'Відмовлено'
            await findOrder.save()

            delete userStep[chatID]
            return
    }
    // ЗАВЕРШИТИ ЗАМОВЛЕННЯ
    if(userStep[chatID] === 'awaitForFinished'){
            const orderId = text
            const valid = await validation(orderId, chatID)
            if(!valid) return
            const findOrder = await orderSchema.findOne({orderID: Number(orderId)})
            if(!findOrder){
                await bot.sendMessage(chatID, 'Номер замовлення відсутній, або введено не коректно')
                return
            }
            await bot.sendMessage(chatID, `Замовлення №${orderId} завершено`)
            findOrder.status = 'Завершене замовлення'
            await findOrder.save()

            delete userStep[chatID]
            return
    }
    // РЕДАГУВАТИ ЗАМОВЛЕННЯ
    if(userStep[chatID] === 'awaitForReductMessage'){
            const orderId = text
            const valid = await validation(orderId, chatID)
            if(!valid) return
            const findOrder = await orderSchema.findOne({orderID: orderId})
            if(!findOrder){
                await bot.sendMessage(chatID, 'Номер замовлення відсутній, або введено не коректно')
                return
            }
            userStep[chatID] = {action: 'chooseField', orderId: findOrder.orderID}

            await bot.sendMessage(chatID, workMessage(findOrder), {reply_markup: menuEditOrder, parse_mode: 'Markdown'})
            await findOrder.save()
            return
    }

    if(userStep[chatID]?.action === 'chooseField'){
        const orderId = userStep[chatID].orderId
        // Обєкт ключ значення , де ключ це текст кнокпи, а значення назва поля в БД
        const fieldMap = {
            'Авто' : 'car',
            'Бюджет' : 'budget',
            'Побажання клієнта' : 'addInfo',
            'Примітки' : 'notes',
        }
        // Зберігаємо ключ
        const field = fieldMap[text]
        if(!field) return

        await bot.sendMessage(chatID, `Введіть нове значення для поля ${text}`)
        userStep[chatID] = {action: 'editField', field, orderId}
        return
    }

    if(userStep[chatID]?.action === 'editField'){
        const {orderId, field} = userStep[chatID]
        const findOrder = await orderSchema.findOne({orderID: orderId})
        findOrder[field] = text

        await findOrder.save()
        await bot.sendMessage(chatID, 'Зміни успішно додані')
        await bot.sendMessage(chatID, workMessage(findOrder), {reply_markup: menuEditOrder, parse_mode: 'Markdown'})

        userStep[chatID] = {action: 'chooseField', orderId: findOrder.orderID}
        return
    }
})




module.exports = bot

