// Next.js Edge API Routes: https://nextjs.org/docs/pages/building-your-application/routing/api-routes#edge-api-routes

import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  let responseText = 'Hello World'

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = process.env.MY_KV
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  return new Response(responseText)
}
