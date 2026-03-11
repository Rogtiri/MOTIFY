// ШАБЛОНИ ПОВІДОМЛЕНЬ

module.exports = {
    // ================= Нові замовлення =================
    orderMessage(order) {
    const { orderID, name, phone, car, budget, createdAt, addInfo, serviceType} = order

    return `
*Нове замовлення 🚗*
Номер замовлення: *${orderID}*
------------------------
👤 Імя: *${name}*
📞 Телефон: *${phone}*
🚙 Авто: *${car}*
💵 Бюджет: *${budget}*
Обрана послуга: *${serviceType}*
🕒 Час заявки: *${new Date(createdAt).toLocaleString('uk-UA', {timeZone: 'Europe/Kyiv'})}*
Побажання клієнта: *${addInfo}*
    `
},
// ================= Замовлення в роботі =================
    workMessage(order) {
    const { orderID, name, phone, car, budget, createdAt, addInfo, notes, serviceType} = order

    return `
*Замовлення в роботі 🚗*
Номер замовлення: *${orderID}*
------------------------
👤 Імя: *${name}*
📞 Телефон: *${phone}*
🚙 Авто: *${car}*
💵 Бюджет: *${budget}*
Обрана послуга: *${serviceType}*
🕒 Час заявки: *${new Date(createdAt).toLocaleString('uk-UA', {timeZone: 'Europe/Kyiv'})}*
Побажання клієнта: *${addInfo}*
Примітки: *${notes}*
    `
},
// ================= Готові замовлення ================= 
    doneMessage(order) {
    const { orderID, name, phone, car, budget, createdAt, addInfo, notes, serviceType} = order

    return `
*Завершене замовлення 🚗*
Номер замовлення: *${orderID}*
------------------------
👤 Імя: *${name}*
📞 Телефон: *${phone}*
🚙 Авто: *${car}*
💵 Бюджет: *${budget}*
Обрана послуга: *${serviceType}*
🕒 Час заявки: *${new Date(createdAt).toLocaleString('uk-UA', {timeZone: 'Europe/Kyiv'})}*
Побажання: *${addInfo}*
Примітки: *${notes}*
    `
},
// ================= Замовлення від яких відмовились =================
    cancelMessage(order) {
    const { orderID, name, phone, car, budget, createdAt, addInfo, cancelInfo, serviceType} = order

    return `
*Відмова 🚗*
Номер замовлення: *${orderID}*
------------------------
👤 Імя: *${name}*
📞 Телефон: *${phone}*
🚙 Авто: *${car}*
💵 Бюджет: *${budget}*
Обрана послуга: *${serviceType}*
🕒 Час заявки: *${new Date(createdAt).toLocaleString('uk-UA', {timeZone: 'Europe/Kyiv'})}*
Побажання: *${addInfo}*
Причина відмови: *${cancelInfo}*
    `
},

}