const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// Set up page cache
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);


/*
  TODO:

  In the package.json for this assignment you'll see a dependency named 
  'workbox-webpack-plugin'. We use a subset of this component to intercept 
  routes to our app and return a cached version if no Internet connection 
  is available.

  You can see the require statement in line 3 above.
  
  You can read more about workbox here if you like:
  https://developer.chrome.com/docs/workbox

  In the code below, you'll be configuring the routing using a method 
  named registerRoute. For these routes, we need to supply a caching 
  strategy. In other words we need to tell Webpack *how* to cache any 
  assets in these routes.

  Workbox gives us many strategies. For the code below we'll be using one 
  called StaleWhileRevalidate. You read about it here:

  https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate

  In the code below, we only want to register a route if the requested 
  destination contains "style", "script", or "worker". So, first, create an 
  array with these three strings.

  Something like:
     const paths = []   // complete the array

  We also need to be able to reference whatever destination is being sought. This 
  is part of the {request} object being injected below. So we would get that value 
  from  request.destination

  We then want to verify that the requested destination contains one item in that 
  array. There is an array method called includes() which does this.

  Once we have identified a viable route, we will instantiate the strategy we wish 
  to use. Remember that it's called StaleWhileRevalidate.

  If you supply the correct values below, this file is complete.
*/

registerRoute( ({ request }) => variableForArrayHere.ARRAY_METHOD_HERE(variableForDestinationHere),
  new CLASSNAME_TO_INSTANTIATE_HERE({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
