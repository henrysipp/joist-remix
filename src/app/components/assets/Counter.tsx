import { press } from "@remix-run/events/press";
import { type Remix, hydrated } from '@remix-run/dom'
import { routes } from "src/routes.ts";

export const Counter =  hydrated(
  routes.assets.href({ path: "Counter.js#Counter" }),
  function(this: Remix.Handle, {}) {
  let counter = 0

  let add = () => {
    counter = counter + 1
    this.update()
  }

  return () => (
    <div>
      <p>Count: {counter}</p>
      <button on={press(() => add())}>Add</button>
    </div>
  );
})