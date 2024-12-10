const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        FullName:
        {
            type: String,
            required: true
        },
        Email:
        {
            type: String,
            required:true
        },
        Gender:
        {
            type: String,
            enum: ['Male','Female'],
            required:true
        }

        
    }
);

model.export = mongoose.model('User',newSchema);