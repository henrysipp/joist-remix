import { route, resources } from '@remix-run/fetch-router'

export let routes = route({
  assets: '/assets/*path',
  home: resources('/', { only: [ 'index' ]}),
  authors: resources('/authors', { only: [ 'index', 'show', 'new', 'create', 'destroy' ]})
})