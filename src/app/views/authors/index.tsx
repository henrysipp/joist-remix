import { routes } from "src/routes";
import { Layout } from "src/app/components/Layout";
import type { Author } from "src/entities";

export function AuthorIndexView({ authors }: { authors: Author[] }) {
  return (
    <Layout>
      <div class='wa-stack wa-gap-md wa-align-items-start'>
        <h1 >Authors</h1>
        <div >
          {authors.length === 0 ? (
            <p >No authors yet</p>
          ) : (
            <ul >
              {authors.map((author) => (
                <li key={author.id} class="">
                  <strong>{author.firstName}</strong> -{" "}
                  <a href={routes.authors.show.href({ id: author.id })} class="text-blue-500 hover:underline">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <wa-button type="submit" variant="brand" href={routes.authors.new.href()}>
          Create Author
        </wa-button>
        <a href={routes.home.index.href()}>
          Back to Home
        </a>
      </div>
    </Layout>
  );
}

