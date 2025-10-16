import { routes } from "src/routes";
import { getEntityManager } from "../utils/context";
import { Author } from "src/entities";
import { render } from "src/app/utils/render";
import { type RouteHandlers } from "@remix-run/fetch-router";
import { HomeIndexView } from "../views/home/index.tsx";

export let HomeController: RouteHandlers<typeof routes.home> = {
    use: [],
    handlers: {
      async index() {
        const em = getEntityManager();
        const authors = await em.find(Author, {});
        return render(<HomeIndexView authors={authors} />);
      },
    },
  };