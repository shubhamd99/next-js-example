### Next JS - A React Framework

![next image](https://i.imgur.com/6enkctk.png)

* Next.js is an open-source React front-end development web framework created by Vercel (formerly Zeit) that enables functionality such as server-side rendering and generating static websites for React based web applications.

* Unlike a traditional React app where the entire application is loaded and rendered on the client, Next.js allows the first page to be rendered by the server, which is a great for SEO & perfromance.

###### Benefits
1. Easy page routing (No need of react router dom)
2. API Routes
3. Out of the box Typescript& Sass
4. Static site generation (next export)
5. Easy deployment

###### Getting Started - https://nextjs.org/docs/getting-started

###### Setup:
1. `npx create-next-app next-example --use-npm` or `yarn create-next-app next-example`
2. cd next-example
3. npm run dev


###### Tips:
1. Anything we put under page's directory will open in a separate route, ex. http://localhost:3000/about
2. lowercase used for pages and Upper case used for components
3. We cannot import globals css in any components, we have to import it in _app.js only
4. Each page should have separate css file with your_css_name.module.css naming convention
