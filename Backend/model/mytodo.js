import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
        maxLength:[50,'Maximum characters allowed are 50']
    },
    toDoList:[]
});