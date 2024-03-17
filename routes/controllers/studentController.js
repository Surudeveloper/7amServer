/* http://localhost:2020/std+ /pathname */
var express = require('express')
var router = express.Router()
const { getStudentService, registerStudent } = require('../services/studentService.js')




router.get('/getStudents', function (req, res, next) {
    console.log('getStudents controller');
    getStudentService(req)
})

router.post('/regStudent', function (req, res, next) {
    var result = registerStudent(req)
    res.send(result)
})

module.exports = router