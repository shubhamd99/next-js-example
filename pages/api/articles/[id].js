import { articles } from '../../../data';

// API routes provide a straightforward solution to build your API with Next.js.

// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
// They are server-side only bundles and won't increase your client-side bundle size.

// For an API route to work, you need to export a function as default (a.k.a request handler)

export default function handler(req, res) {
    const id = req.query.id
    const filtered = articles.filter(article => article.id === id);

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Article with the id - ${id} not found` })
    }
}
