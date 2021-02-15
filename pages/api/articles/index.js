import { articles } from '../../../data';

// API routes provide a straightforward solution to build your API with Next.js.

// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
// They are server-side only bundles and won't increase your client-side bundle size.

// For an API route to work, you need to export a function as default (a.k.a request handler)

export default function handler(req, res) {
    res.status(200).json(articles)
}
