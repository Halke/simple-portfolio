import mongoose from "mongoose";

const {Schema} = mongoose;

const skillSchema = new Schema({
    title: {type: String, required: true},
    skillType: {type: String, default: "Programming"},
    skillImageLink: {type: String},
    knowledgeLevel: {type: Number, required: true}
});


const Skill = mongoose.model("Skill", skillSchema);

module.exports = {Skill};
