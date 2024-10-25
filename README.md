# Gateway Baptist Church Guide For All Developers

This is a guide that all developers should take a look at before editing the church website.

## Structure Of The Website.

The first thing need to know by any developrt that would be editing this page is to know the structure of the website. The website is runing on node, which is for the backend server. So the first thing the developer need to do is to clone this project on their local host.

```
git clone https://github.com/Ayomide-Philip/gateway.git
```

After downloading it on your localhost, you can run:

```
npm install
```

or

```
npm i
```

This command looks at the [package.json file](./package.json) and install all the necessary dependencies, After you can run :

```
node index.js
```

to view the backend project on your local system.

The Files are arranged in this way:

```
    |
    |
    ------ componet/ ----- subcomponet/ ------ videoBanner.js
    |                |---------- children.js
    |                |---------- donate.js
    |                |---------- events.js
    |                |---------- getInvolved.js
    |                |---------- history.js
    |                |---------- home.js
    |                |---------- mission.js
    |                |---------- sermon.js
    |                |---------- service.js
    |                |---------- teenager.js
    |
    ------ public/ ------------------ images/
    |                   |---------- resources/
    |                   |---------- stylesheet/
    |                   |---------- Teenagers/
    |                   |---------- video/
    |
     ------ views/ ----- partials/ ------------------------ header.ejs
    |                |---------- children.ejs      |--------footer.ejs
    |                |---------- donate.ejs
    |                |---------- events.ejs
    |                |---------- getInvolved.ejs
    |                |---------- history.ejs
    |                |---------- index.ejs
    |                |---------- mission.ejs
    |                |---------- sermon.ejs
    |                |---------- service.ejs
    |                |---------- teenager.ejs
    |
    |------- index.js
    |
    |------- package.json
```
