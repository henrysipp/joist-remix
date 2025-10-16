import { press } from "@remix-run/events/press";
import { type Remix, hydrated } from '@remix-run/dom'

export const Counter =  hydrated(
  "/assets/Counter.js#Counter",
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