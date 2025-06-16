// server/src/routes/userinfo.js
import { Router } from 'express'
import fetch from 'node-fetch'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const auth = req.header('Authorization')?.replace(/^Bearer\s+/, '')
    if (!auth) {
      return res.status(401).json({ error: 'no token provided' })
    }
    // Google の discovery ドキュメント取得
    const oidcConfig = await fetch(process.env.OIDC_WELL_KNOWN).then(r => r.json())
    // UserInfo エンドポイントを叩く
    const userInfo = await fetch(oidcConfig.userinfo_endpoint, {
      headers: { Authorization: `Bearer ${auth}` }
    }).then(r => r.json())
    res.json(userInfo)
  } catch (err) {
    next(err)
  }
})

export default router
