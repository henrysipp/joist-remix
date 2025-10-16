import{c as n}from"./chunks/chunk-TLFW2ABB.js";n(document,{async loadModule(o,t){let r=await import(o);if(!r)throw new Error(`Unknown module: ${o}#${t}`);let e=r[t];if(!e)throw new Error(`Unknown component: ${o}#${t}`);return e},async resolveFrame(o){let t=await fetch(o);if(t.ok)return t.text();throw new Error(`Failed to fetch ${o}`)}});
//# sourceMappingURL=Entry.js.map
