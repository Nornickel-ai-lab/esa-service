# ESA — единая авторизация

Login UI для клиентских приложений (rdmap и др.).

## Dev

```bash
npm install
npm run dev
```

http://localhost:5174/login?redirect_uri=http://localhost:8080/auth/callback

## Docker

Собирается через `server-service/docker-compose` на порту **8081**.

## Redirect

После login редирект на `redirect_uri` с query `access_token`.
Whitelist origins: `localhost:8080`.
