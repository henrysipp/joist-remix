import { routes } from "src/routes";
import { Layout } from "src/app/components/Layout";
import type { Author } from "src/entities";

export function HomeIndexView({ authors }: { authors: Author[] }) {
  return (
    <Layout>
      <h1 >Home</h1>
      <div>
        <p>Welcome to my website!</p>
      </div>
    </Layout>
  );
}

