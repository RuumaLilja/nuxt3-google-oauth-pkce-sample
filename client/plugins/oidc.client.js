// plugins/oidc.client.js
import { UserManager, WebStorageStateStore } from 'oidc-client-ts'

export default defineNuxtPlugin(() => {
  const { apiBase, googleClientId, callbackPath } = useRuntimeConfig().public

  const mgr = new UserManager({
    authority: 'https://accounts.google.com',
    client_id: googleClientId,
    redirect_uri: `${window.location.origin}${callbackPath}`,
    response_type: 'code',
    scope: 'openid profile email',
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    metadata: {
      issuer: 'https://accounts.google.com',
      authorization_endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      token_endpoint:      `${apiBase}/auth/exchange`,
      userinfo_endpoint:   `${apiBase}/auth/userinfo`,
      jwks_uri:            'https://www.googleapis.com/oauth2/v3/certs'
    }
  })

  return { provide: { oidcManager: mgr } }
})
