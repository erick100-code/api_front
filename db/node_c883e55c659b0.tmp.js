import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
const PORT = 6000

app.listen(PORT, () => {
    console.log(`api conectada na porta ${PORT}`)
})