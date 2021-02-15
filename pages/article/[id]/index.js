import Link from 'next/link'
// import { useRouter } from 'next/router';

const article = ({ article }) => {
   /* const router = useRouter();
    const { id } = router.query;*/
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href={'/'}>Go Back</Link>
        </>
    );
};

// You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
// Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request,
// and the result cannot be cached by a CDN without extra configuration.
/* export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
} */

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes.
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const article = await res.json()

    const ids = article.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths: paths,
        fallback: false // Return 404
    }
}

export default article;
