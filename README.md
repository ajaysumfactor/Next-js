# styling in next js 

## image component 
    it optimise image rendering in our application
## font in next js 
    1. go to fonts.google.com
    2. choose IBMPlex sans
    3. download family
    4. place in (public->fonts->downloaded file)
    5. Add  (_document.js) file 
    6.   <link 
        rel="preload" 
        href="/fonts/IBMPlexsans-Bold.ttf"
        as="font" 
        crossOrigin="anonymous">

        </link>
    7. use in global.css file(  font-family: IBMPlexSans );
    8. Applied font in document