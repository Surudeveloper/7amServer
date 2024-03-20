const { getStudentDAO, registerStudentDAO } = require('../dao/studentDAO')

function getStudentService(req) {
    console.log('getStudentService called');
    getStudentDAO(data)
}

async function registerStudent(req) {
    var data = req.body.data
    var response = await registerStudentDAO(data)

    return response
}

module.exports = { getStudentService, registerStudent }