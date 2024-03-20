var mongodb = require('mongodb')
function getStudentDAO(data) {
    console.log('getStudentDAO called');
}

async function registerStudentDAO(data) {
    //connect with db //perform required operation // send the data to services
    try {
        var MongoClient = mongodb.MongoClient
        var url = ''
        var server = await MongoClient.connect(url) //since it is a asynchronous and return promise obj therefore use await or then catch
        var db = server.db('school')
        const collection = db.collection('Student')
        const result = await collection.insertOne(data)
         
        return result

    } catch (e) {
        console.error(e)
    } finally {

    }

}

module.exports = { getStudentDAO, registerStudentDAO }