// learn from https://www.youtube.com/watch?v=sOq92prx00w
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setDefaultHandler } from 'workbox-routing';
import { NetworkFirst, NetworkOnly } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { clientsClaim } from 'workbox-core'

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

setDefaultHandler( new NetworkOnly() );

// 缓存接口的数据
registerRoute(
  ({ url }) => {
    console.log(url);
    return url.origin === 'https://cloud-worker-demo.solojacker-worker.workers.dev'
  },
  new NetworkFirst({
    cacheName: 'web-response',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [ 0, 200 ],
      }),
      new ExpirationPlugin({
        maxEntries: 100, // 最高缓存 20 个 返回值
        maxAgeSeconds: 60 * 5, // 最多缓存五分钟
      }),
    ],
  }),
  'GET'
);

// 缓存静态资源
precacheAndRoute(self.__WB_MANIFEST);

/* #__PURE__ */ console.log(12313133)