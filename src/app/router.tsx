import { createRouter, redirect, type RouteHandlers } from "@remix-run/fetch-router";
import { logger } from "@remix-run/fetch-router/logger-middleware";
import { routes } from "src/routes";
import { render } from "./utils/render";
import { newEntityManager } from "src/db";
import { Author } from "src/entities";

export let router = createRouter({});

if (process.env.NODE_ENV === "development") {
  router.use(logger());
}

const em = newEntityManager();

export let home: RouteHandlers<typeof routes.home> = {
  use: [],
  handlers: {
    index() {
      const authors = em.getEntities(Author);

      return render(
        <div>
          <p>Hello, huh!</p>
          {authors.map((author) => (
            <p>{author.firstName}</p>
          ))}
          <form action={routes.home.action.href()} method="POST">
            <button type="submit">Create Author</button>
          </form>
        </div>,
      );
    },
    async action() {
      await em.create(Author, { firstName: "a1" });
      return redirect(routes.home.index.href());
    },
  },
};

router.map(routes.home, home);
