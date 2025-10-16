import { route, resources } from '@remix-run/fetch-router'

export let routes = route({
  home: resources('/', { only: [ 'index' ]}),
  authors: resources('/authors', { only: [ 'index', 'show', 'new', 'create', 'destroy' ]})
})