const db = require('../data/dbConfig.js')
module.exports = {
  add,
  findAll,
  findBy,
  findById,
  generateDefaultBoard
};

async function generateDefaultBoard(user) {
    await db("boards").insert({
        owner: user.id,
        name: user.username,
        is_default: true
    })
}
async function findAll() {
  return await db("boards").select("*").orderBy("created_at");
}

async function findBy(filter) {
  return await db("accounts").where(filter).orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("accounts").insert(user, "id");
    const newUser =  await findById(id);
    await generateDefaultBoard(newUser);
    return newUser
  } catch (error) {
    throw error;
  }
}

async function findById(id) {
  return await db("accounts").where({ id }).first();
}