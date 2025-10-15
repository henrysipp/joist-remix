import * as http from 'node:http'
import { createRequestListener } from '@remix-run/node-fetch-server'

import { router } from './app/router.tsx'

console.log({ env: JSON.stringify(process.env.DATABASE_URL) })

let server = http.createServer(
  createRequestListener(async (request) => {
    try {
      return await router.fetch(request)
    } catch (error) {
      console.error(error)
      return new Response('Internal Server Error', { status: 500 })
    }
  }),
)

let port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000 

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
