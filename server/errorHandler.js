function errorHandler(err, req, res, next) {
    console.log('Server error:' + err)
    res.status(500).send({message: 'Помилка на сервері'})
}

module.exports = {errorHandler}