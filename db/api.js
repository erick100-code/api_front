import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import unidade from './unidade.js'

dotenv.config()

const app = express()
const PORT = 8000

app.use(express.json())

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("conectado ao mongoDB. ÊXTIO!")
    } catch (error) {
        console.log(`impossivel conectar ao mongoDB (error: ${error})`)
    }
}

conectarDB()

app.post("/unidade", async (req, res) => {
    try {
        const unit = await unidade.create(req.body)
        res.json(unit)
    } catch (error) {
        res.json({ error: error })
    }
})

app.get("/unidade", async (req, res) => {
    try {
        const ler = await unidade.find()
        res.json(ler)
    } catch (error) {
        res.json({ error: error })
    }
})

app.put("/unidade/:id", async (req, res) => {
    try {
        const upd = await unidade.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(upd)
    } catch (error) {
        res.json({ error: error })
    }
})

app.delete("/unidade/:id", async (req, res) => {
    try {
        const del = await unidade.findByIdAndDelete(
            req.params.id
        )
        res.json(del)
    } catch (error) {
        res.json({ error: error })
    }
})

app.listen(PORT, () => {
    console.log(`api conectada na porta ${PORT}. ÊXITO!`)
})