const bcrypt = require('bcrypt');
const db = require('../database/db');
const Service = require('../services/services');

const saltRounds = 10;

async function addItem(req,res){
    try{
        const result = await Service.addItem(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function showItem(req,res){
    try{
        const result = await Service.showItem();
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function searchItemByName(req,res){
    try{
        const result = await Service.searchItemByName(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function sortItemByCategory(req,res){
    try{
        const result = await Service.sortItemByCategory(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function deleteItem(req,res){
    try{
        const result = await Service.deleteItem(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}
module.exports = {
    addItem,
    showItem,
    searchItemByName,
    sortItemByCategory,
    deleteItem
}