import mongoose, { mongo } from "mongoose";

const modelo = new mongoose.Schema({
    carro: String,
    velocidade: Number,
})

export default mongoose.model("unidade", modelo)