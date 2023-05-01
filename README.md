# Next-js
## Why nextjs(Problem that next.js solve)?
  In next.js we not only building front-end of the application but also be able to build the server side code that is Backend part.

## What is Next.js?
  1. Full stack Framework.
  2. React-Framework for the production.
  3. Framework built on top of the react that gives us the flexibility of building scalable apps by allowing us to render content on the server .
  
## Benefits of Next.js
  ### 1. ** Different Rendering Technique. **
        * In React it always render content on client side using client-side rendering And nothing happen on server side.
        * In Next.js I can choose how i want to render content on the page.How i can render content on the server can be decide based on the different technique.
  #### 1. Static site Rendering
          In this All content is prebuild on the server and then server is going to pass content to the client.
          ex:-Products,Our static coffie stores,Blogposts etc.
          
  #### 2. Server side rendering
          Generating page on the server.
          If i want fresh data on each page refresh that is server side .
          ex-Dynamic news feed,Netflix etc.
  #### 3. Incremental site regeneration
          Best of both (Static site + server side)
          Allow us to create or update content without redeployment of our site.
         
  ### 2. ** preformance ** 
  #### 1. Code splitting-
          Dividing the web-app in small chunks so i can only load the chunk that is used by the current page.
          It does not download content for the whole websites if i never going to visit that.
  #### 2. Minifying files-
          Next js Is get rid of all special character,whitespace and many more to make the file size really samll.It boost the performance of our pages.
  #### 3. Image Optimisation
          Next js provide the image component.
          Image component
                -Next/Image is extension of the HTML <img> element.
                Improved Performance
                -Always serve correctly sized image for each device, using modern image formats
          Instead of using the image tag from the browser,Next js uses the image component ,which serves image based on browser screen size.
  #### 4. Pre-fetching assets
          Next js only go ahead and pre-fetch specific assets as i scroll down the page .
  
  
  
  ### 3. ** File based Routing **
         -Next js has a file-system based routing built on the concept of pages.
         -when file is added to a "pages" directory it automatically avliable as a route.
         -Index-route:--pages/index.js----> /
                       -pages/blog/index.js---->/blog.
         -Nested Route:--pages/blog/first-pages.js---->blog/first-pages (blog is directory )
         
  ### 4. ** SEO(Search Engine Optimisation **
         The goal of SEO is to create strategy that will increase website ranking position in search engine results.
         Higher the ranking more traffic to the site ,which ultimately leads to more business for us.
         
  ### 5. ** Serverless Function **
         -The serverless function is self-contained block of code that runs on demand in response to an API request without the need for a dedicated server or        infrastructure.
         -It is defined in pages/api
         -when request is made to serverless function this function executed on a serverless platform like --AWS,vercel.
  
