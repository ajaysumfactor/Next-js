# Section:--9
## API(Application Programming Interface):---
#### A way to one website to talk with Anoher website but in the form of Data.
#### Aspecial kind of Url that do not return HTML but return data in the form of json;
## REST API(Representational State Transfer)
    It is architectural style for an application programm interface that uses (HTTP) Requests to access and use data.
    It is not a programming Language.
## Serverless function
    Api routes are essentially deployed as a serverless function ,they also known as Lambda function,
    In serverless function you need not worry about the setting up or managing the server infrastructure.
## API Route
### Rules for the API Routes
1. File need to be a function.
2. Function needs to be exported by default.
3. Evey function should have its own file.
## Catch all route
    1. It is special type of routes that allows us to handle dynamic routes with varrying parameter.
    2. Denotes by---[...slug].js/tsx
    3. It is used when I have Pages or API Routes with dynamic Paths that can have any number of segment.
        for example:--/api/posts/2023/05/15/my-blog-post/
        ['2023','05','15','my-blog-post']---->using this array i can perform necessary operations.

## Make a serverless function for "getcoffeeStore".