import { route, formAction, resources } from '@remix-run/fetch-router'

export let routes = route({
//   assets: '/assets/*path',
//   images: '/images/*path',
//   uploads: '/uploads/*key',
  home: route('/', {
    index: { method: 'GET', pattern: '/' },
    action: { method: 'POST', pattern: '/' },
  })
})
