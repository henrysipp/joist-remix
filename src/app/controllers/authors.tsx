import { redirect, type RouteHandlers } from "@remix-run/fetch-router";
import { routes } from "src/routes";
import { getEntityManager } from "../utils/context";
import { Author } from "src/entities";
import { render } from "src/app/utils/render";
import { AuthorShowView } from "../views/authors/show";
import { AuthorIndexView } from "../views/authors/index.tsx";
import { AuthorNewView } from "../views/authors/new";

export let AuthorsController: RouteHandlers<typeof routes.authors> = {
  use: [],
  handlers: {
    async index() {
      const em = getEntityManager();
      const authors = await em.find(Author, {});
      return render(<AuthorIndexView authors={authors} />);
    },
    async show({ params }) {
      const em = getEntityManager();
      const author = await em.load(Author, params.id);
      return render(<AuthorShowView author={author} />);
    },
    async new() {
      return render(<AuthorNewView />);
    },
    async create({ formData }) {
      const em = getEntityManager();
      em.create(Author, {
        firstName: formData.get("firstName")?.toString() ?? "",
        lastName: formData.get("lastName")?.toString() ?? "",
      });
      await em.flush();
      return redirect(routes.authors.index.href());
    },
    async destroy({ params }) {
      console.log(" Destroy author ")
      const em = getEntityManager();
      const author = await em.load(Author, params.id);
      em.delete(author);
      await em.flush();
      return redirect(routes.authors.index.href());
    },
  },
};

