import { Layout } from "src/app/components/Layout";
import { routes } from "src/routes";
import type { Author } from "src/entities";

export function AuthorShowView({ author }: { author: Author }) {
  return (
    <Layout>
      <div class='wa-stack wa-gap-md'>
        <h1>Author Details</h1>
        <div>
          <p>
            <strong>ID:</strong> {author.id}
          </p>
          <p>
            <strong>First Name:</strong> {author.firstName}
          </p>
        </div>
        <div class="wa-stack wa-gap-md">
          <div>
          <form action={routes.authors.destroy.href({ id: author.id })} method="POST">
            <input type="hidden" name="_method" value="DELETE" />
            <wa-button type="submit" variant="danger">
              Delete Author
            </wa-button>
          </form>
          </div>
          <a href={routes.authors.index.href()}>Back to Authors</a>
        </div>
      </div>
    </Layout>
  );
}
