import { routes } from "src/routes";
import { Layout } from "src/app/components/Layout";

export function AuthorNewView() {
  return (
    <Layout>
      <div>
        <h1>New Author</h1>
        <form action={routes.authors.create.href()} method="POST" class="wa-stack wa-gap-md">
          <div>
            <wa-input
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <wa-input
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
          <div>
            <wa-textarea
              name="bio"
              label="Biography"
              placeholder="Enter author biography"
              rows={4}
            />
          </div>
          <div class="wa-flank wa-gap-md">
            <wa-button type="submit" variant="brand">
              Create Author
            </wa-button>
            <a href={routes.authors.index.href()}>
              <wa-button type="button" variant="outline">
                Cancel
              </wa-button>
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
}
