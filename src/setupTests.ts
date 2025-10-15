import { getKnex, closeKnex } from "src/db";
import { beforeEach, afterAll } from "@jest/globals";

export let queries: string[] = [];

export function resetQueries(): void {
  queries = [];
}

// Initialize query tracking for tests
const knex = getKnex();
knex.on("query", (e: any) => {
  queries.push(e.sql);
});

// Re-export newEntityManager for tests
export { newEntityManager } from "src/db";

beforeEach(async () => {
  const knex = getKnex();
  await knex.select(knex.raw("flush_database()"));
  queries = [];
});

afterAll(async () => {
  await closeKnex();
});
