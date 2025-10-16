import { createRouter, createStorageKey, redirect, type Middleware, type RouteHandlers } from "@remix-run/fetch-router";
import { logger } from "@remix-run/fetch-router/logger-middleware";
import { routes } from "src/routes";
import { render } from "src/app/utils/render";
import { newEntityManager } from "src/db";
import { Author, EntityManager } from "src/entities";
import { getEntityManager, requestContextStorage, storeContext } from "./utils/context";
import { HomeController } from "./controllers/home";
import { AuthorsController } from "./controllers/authors";

export let router = createRouter({});

if (process.env.NODE_ENV === "development") {
  router.use(logger());
}

export const EM_KEY = createStorageKey<EntityManager>()

router.use(storeContext);
router.use(({ storage }) => {
  const em = newEntityManager();
  storage.set(EM_KEY, em);
});


router.map(routes.home, HomeController);
router.map(routes.authors, AuthorsController);
