// learn from https://www.youtube.com/watch?v=sOq92prx00w
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies'

declare const self: ServiceWorkerGlobalScope;

// 缓存静态资源
precacheAndRoute(self.__WB_MANIFEST);

// 缓存接口的数据
registerRoute(
  ({ url }) => url.origin === 'https://cloud-worker-demo.solojacker-worker.workers.dev/',
  new NetworkFirst({ cacheName: 'api-responses' })
);