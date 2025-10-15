import { createRouter, createStorageKey, redirect, type Middleware, type RouteHandlers } from "@remix-run/fetch-router";
import { logger } from "@remix-run/fetch-router/logger-middleware";
import { routes } from "src/routes";
import { render } from "src/app/utils/render";
import { newEntityManager } from "src/db";
import { Author, EntityManager } from "src/entities";
import { getEntityManager, requestContextStorage } from "./utils/context";
import { Layout } from "./layout";

export let router = createRouter({});

if (process.env.NODE_ENV === "development") {
  router.use(logger());
}

export const EM_KEY = createStorageKey<EntityManager>()

export let storeContext: Middleware = (context, next) => {
  return requestContextStorage.run(context, () => next())
}

router.use(storeContext);
router.use(({ storage }) => {
  const em = newEntityManager();
  storage.set(EM_KEY, em);
});

export let home: RouteHandlers<typeof routes.home> = {
  use: [],
  handlers: {
    async index() {
      const em = getEntityManager();
      const authors = await em.find(Author, {});
      return render(
        <Layout>
          <p>Hello, huh!</p>
          <ul>
            {authors.map((author) => (
              <li key={author.id}>Author: {author.firstName}</li>
            ))}
          </ul>
          <form action={routes.home.action.href()} method="POST">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Create Author</button>
          </form>
        </Layout>,
      );
    },
    async action( { }) {
      const em = getEntityManager();
      await em.create(Author, { firstName: "a1" });
      await em.flush();
      return redirect(routes.home.index.href());
    },
  },
};

router.map(routes.home, home);
