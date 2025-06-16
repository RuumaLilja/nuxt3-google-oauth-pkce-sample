// src/index.js
import express from 'express'
import cors    from 'cors'
import dotenv  from 'dotenv'
import exchangeRouter from './routes/exchange.js'
import userinfoRouter from './routes/userinfo.js'

dotenv.config()
const app = express()

// 開発時は全オリジン許可で動作確認
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/auth/exchange',  exchangeRouter)
app.use('/auth/userinfo',  userinfoRouter)

// エラーハンドラ
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message })
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Auth server on http://localhost:${process.env.PORT||4000}`)
})
