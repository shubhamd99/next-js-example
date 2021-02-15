import {server} from "../config";
import Head from 'next/head'
import ArticleList from "../components/Article/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
        <Head>
            <title>Home Page</title>
            <meta name={'keywords'} content={'web development, programming'} />
        </Head>
        <ArticleList articles={articles} />
    </div>
  )
}

// If you export an async function called getStaticProps from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// The data required to render the page is available at build time ahead of a user’s request.
/*export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const articles = await res.json();

    return {
        // will be passed to the page component as props
        props: {
            articles
        }
    }
}*/

// Backend api call
export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json();

    return {
        // will be passed to the page component as props
        props: {
            articles
        }
    }
}
