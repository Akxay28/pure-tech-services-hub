// Client-side stub for node:async_hooks to prevent crashes in the browser.
// This file is only bundled on the client.

export class AsyncLocalStorage {
  disable() {}
  getStore() {
    return undefined;
  }
  run(store: any, callback: () => any, ...args: any[]) {
    return callback();
  }
  exit(callback: () => any, ...args: any[]) {
    return callback();
  }
  enterWith(store: any) {}
}
