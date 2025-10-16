import { type Remix, hydrated } from '@remix-run/dom'
import { Layout } from "src/app/components/Layout";
import type { Author } from "src/entities";
import { Counter } from "src/app/components/assets/Counter";

export function HomeIndexView(this: Remix.Handle) {
  return ({ authors }: { authors: Author[] }) => (
    <Layout>
      <h1 >Home</h1>
      <div>
        <p>Welcome to my website!</p>
        <Counter />
      </div>
    </Layout>
  );
}

