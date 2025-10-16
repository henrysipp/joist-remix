import { AsyncLocalStorage } from 'node:async_hooks'
import type { Middleware, RequestContext } from "@remix-run/fetch-router";

import { EM_KEY } from '../router.tsx'

export const requestContextStorage = new AsyncLocalStorage<RequestContext>()

export let storeContext: Middleware = (context, next) => {
  return requestContextStorage.run(context, () => next())
}

/**
 * Get the current RequestContext from AsyncLocalStorage.
 * This can be called from anywhere in your application during a request.
 */
export function getContext(): RequestContext {
  let context = requestContextStorage.getStore()

  if (!context) {
    throw new Error('No request context found. Make sure the storeContext middleware is installed.')
  }

  return context
}

/**
 * Get the storage from the current RequestContext.
 * This is a convenience helper for the most common use case.
 */
export function getStorage() {
  return getContext().storage
}

/**
 * Get the EntityManager from the current RequestContext.
 * This is a convenience helper for the most common use case.
 */
export function getEntityManager() {
  return getStorage().get(EM_KEY)
}
