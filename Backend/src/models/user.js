const {Schema, model} = requiere('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique:true
    }
},{
    timestamp
})

module.exports = model('user', userSchema)