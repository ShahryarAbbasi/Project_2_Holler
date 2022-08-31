require("./config/db.connection");
const mongoose = require("mongoose");

const db = require('./models')

async function createHoller(data){
    try{

        const newHoller = await db.Holler.create(data)
        console.log(newHoller)

    }catch(err){
        throw new Error(err)
    }
}



const newDoc = {
    body: "Hello World",
    user: "630e3714cae5e4174e3c1517"
}

createHoller(newDoc)