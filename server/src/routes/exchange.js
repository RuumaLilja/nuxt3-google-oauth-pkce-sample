import { Router } from 'express'
import fetch from 'node-fetch'
import qs from 'qs'

const router = Router()

router.post('/', async (req, res, next) => {
  try {
    const { code, code_verifier } = req.body
    const oidcConfig = await fetch(process.env.OIDC_WELL_KNOWN).then(r => r.json())
    const tokenRes = await fetch(oidcConfig.token_endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: qs.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.OIDC_CLIENT_ID,
        client_secret: process.env.OIDC_CLIENT_SECRET,
        redirect_uri: process.env.OIDC_REDIRECT_URI,
        code,
        code_verifier
      })
    })
    const tokenJson = await tokenRes.json();
    console.log(tokenJson);
    return res.json(tokenJson);
  } catch (err) {
    next(err);
  }
})

export default router
