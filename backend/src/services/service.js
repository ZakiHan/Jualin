const bcrypt = require('bcrypt');
const db = require('../database/db');

async function addItem (jl){
    const {Name, Quantity, Category, LocationID, DateAdded} = jl;
    const query = `INSERT INTO item (Name, Description, Price, CategoryID) VALUES ('${Name}', '${Description}', '${Price}', '${CategoryID}')`;
    const result = await db.query(query);
    if(result.rowCount === 1){
        return {
            message: 'Item Created'
        }
    }else{
        return{
            message: 'Error'
        } 
    }
}

async function showItem (){
    const query = `SELECT * FROM item`;
    const result = await db.query(query);
    if(result.rowCount){
        return {
            message: 'Items found',
            showItem : result.rows
        }
    }else{
        return {
            message: 'no Items found'
        }
    }
}

async function searchItemByName (jl){
    const {Name} = jl;
    const query = `SELECT * FROM item WHERE name='${Name}'`;
    const result = await db.query(query);
    if(result.rowCount){
        return {
            message: 'Item found',
            searchItemByName : result.rows
        }
    }else{
        return {
            message: 'Item not found'
        }
    }
}

async function deleteItem(jl){
    const {ItemID} = jl;
    const query = `DELETE FROM items WHERE ItemID=${ItemID}`;
    const result = await db.query(query);
    if(result.rowCount > 0){
        return {
            message: 'Item deleted'
        }
    }
    else{
        return {
            message: 'Item not found'
        }
    }
}

module.exports = {
    addItem,
    showItem,
    searchItemByName,
    deleteItem
}