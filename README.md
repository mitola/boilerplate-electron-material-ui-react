## Boilerplate for React with Material UI and Electron

Up to date boilerplate with React, Electron and Material UI (Beta). 
I started to look a bit more in the folowing stack and noticed quite bad documentation in some areas or at least quite outdated ones, or ones containing huge amount of dependencies.
And for newcomers that can be quite challenging to be thrown in a world with xyz amount of new things added to the mix. 

That's why I have decided to create the boilerplate for my reference and to anyone else who would found it useful with the least amount of relevant dependencies.

## Run steps: 

1.) `npm install`  
2.) `npm run` (Used npm run on Windows) || `npm start` (Used npm start on OS X)
3.) It will open browser with localhost:3000 page with rendering of basic Material menu  
4.) open second terminal window  
5.) `npm run electron`  
6.) It will open electron native client  


In regards to dependencies I have included only the most essential ones and as future prof as possible, 
since a lot of the projects are still in heavy development. 
I'll try to comment dependencies with appropriate references so development based on the boiler plate can be a bit easier to newcomers. 

As well at least at the time of the writting Material UI is the most uptodate version available with huge features included in it
Electron version included is also the newest with 1.7.5 and React 15.6.1 

## Dependencies: 
    "material-ui": "^1.0.0-beta.5", //Version 1 mostly beacuse of new Grid System but also due to a huge overhaul in Material UI itself 
    "material-ui-icons": "^1.0.0-alpha.19", // Goes quite nicely with Material UI 
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-scripts": "1.0.11",
    "react-tap-event-plugin": "^2.0.1" // Material UI requires it, but it's also a good temporary solution to a big problem 
    "electron": "^1.7.5" // Cross platform framework for web tech to run natively 

Material UI: (Current beta docs docs) [https://material-ui-1dab0.firebaseapp.com/](https://material-ui-1dab0.firebaseapp.com/)  
Material UI Icons: [https://www.npmjs.com/package/material-ui-icons](https://www.npmjs.com/package/material-ui-icons)  
React tap event plugin: [https://github.com/zilverline/react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)  
Electron: [https://electron.atom.io/](https://electron.atom.io/)  

**create-react-app was used to create the base of the project**

