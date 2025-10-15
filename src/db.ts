import { EntityManager } from "src/entities";
import { knex as createKnex, Knex } from "knex";
import { PostgresDriver } from "joist-orm";
import { newPgConnectionConfig } from "joist-utils";

let knex: Knex;

export function getKnex(): Knex {
  if (!knex) {
    knex = createKnex({
      client: "pg",
      connection: newPgConnectionConfig() as any,
      debug: false,
      asyncStackTraces: true,
    });
  }
  return knex;
}

export function newEntityManager(): EntityManager {
  return new EntityManager({}, new PostgresDriver(getKnex()));
}

export async function closeKnex(): Promise<void> {
  if (knex) {
    await knex.destroy();
  }
}

