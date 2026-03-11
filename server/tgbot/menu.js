// МЕНЮ БОТА, УСІ КНОПКИ БОТА

module.exports = {
    // ================= ГОЛОВНЕ МЕНЮ ПІД КЛАВІАТУРОЮ =================
    mainMenu: {
            keyboard: [
                ['Активні замовлення'],
                ['Відхилені замовлення'],
                ['Звітність'],
            ],
            resize_keyboard: true,
            one_time_keyboard: true
    },
    workMenu: {
            keyboard: [
                ['Редагувати замовлення'],
                ['Скасувати замовлення'],
                ['Завершити замовлення'],
                ['<-НАЗАД']
            ],
            resize_keyboard: true,
            one_time_keyboard: true
    },
    cancelMenu: {
            keyboard: [
                ['Взяти в роботу'],
                ['<-НАЗАД']
            ],
            resize_keyboard: true,
            one_time_keyboard: true
    },
    menuEditOrder: {
            keyboard: [
                ['Авто', 'Бюджет'],
                ['Побажання клієнта', 'Примітки'],
                ['<-НАЗАД']
            ],
            resize_keyboard: true,
            one_time_keyboard: true
    },
    backMenu: {
            keyboard: [
                ['<-НАЗАД']
            ],
            resize_keyboard: true,
            one_time_keyboard: true
    },
    // ================= КНОПКИ  НОВОГО ЗАМОВЛЕННЯ =================
    menuUnderNewOrder: {
            inline_keyboard: [
                [{text: 'Взяти в роботу', callback_data: 'takeOrder'}],
                [{text: 'Відмовитись від роботи', callback_data: 'cancelOreder'}]
            ]
    },
    // ================= КНОПКИ ДОДАВАННЯ ПРИМІТОК =================
    menuUnderQuestion: {
            inline_keyboard: [
                [{text: 'Так', callback_data: 'addNotes'}],
                [{text: 'Ні', callback_data: 'cancelNotes'}]
            ]
    },
    // ================= КНОПКИ ПАГІНАЦІЇ =================
    // ================= В РОБОТІ =================
    inlineButtonsWork: (nextPage, page) => {
        let buttons = []
        if(page > 0){
            buttons.push({text: '<-Назад', callback_data: `page_${page-1}`})
        }
        // Якщо номер сторінки * на к-ть елементів менше за розмір замовлень в БД то додаємо кнопку вперед
        if(nextPage){
            buttons.push({text: '->Вперед', callback_data: `page_${page+1}`})
        }
        // Повертаємо навігацію для сторінок
        return{
            inline_keyboard: [buttons]
        }
    },
    // ================= ВІДХИЛЕННЯ =================
    inlineButtonsCancel: (nextPage, page) => {
        let buttons = []
        if(page > 0){
            buttons.push({text: '<-Назад', callback_data: `cancel_${page-1}`})
        }
        if(nextPage){
            buttons.push({text: '->Вперед', callback_data: `cancel_${page+1}`})
        }
        return{
            inline_keyboard: [buttons]
        }
    }
}