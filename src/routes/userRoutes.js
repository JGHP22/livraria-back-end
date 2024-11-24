const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Create user
router.post('/', async (req, res) => {
    try{
        const {name,email,password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    } catch(error){
        res.status(400).json({ error: error.menssage});
    }
});

//List users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

//Get user
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
})

//Update user
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {name,email,password} = req.body;
        const user = await User.findByPk(id);
        await user.update({ name, email, password});
        await user.save();
        res.status(201).json(user)
    } catch(error) {
        res.status(400).json({ error: error.menssage});
    }
});
//Delete user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        await user.destroy();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.menssage});
    }
});

module.exports = router;