const { getStudentDAO, registerStudentDAO } = require('../dao/studentDAO')

function getStudentService(req) {
    console.log('getStudentService called');
    getStudentDAO(data)
}

function registerStudent(req) {
    var data = req.body.data
    var response = registerStudentDAO(data)

    return response
}

module.exports = { getStudentService, registerStudent }