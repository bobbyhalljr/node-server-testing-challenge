const db = require('../data/dbConfig');

module.exports = {
    addUser,
    update,
    remove,
    getAll,
    findById
}

async function addUser(user){
    const [id] = await db('users').insert(user, 'id');

    return db('users')
    .where({ id })
    .first();
}

function getAll(){
    return db('users')
}

async function update(id, changes) {
    return null;
}
  
function remove(id) {
    return null;
}

function findById(id) {
    return null;
  }