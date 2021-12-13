const mongoose = require('mongoose')

const programsSchema = mongoose.Schema(
    {
        checked:{
            type:String,
            required: true,
        },
        label:{
            type:String,
            required: true,
        }

    }
)
const Programs = mongoose.model("Programs", programsSchema);

module.exports = Programs