![](/src/img/logo.png)

### Check it out!

---

[click the link to demo for yourself!](https://recordnise.netlify.app/)

(either log in as test@test.com, test1234 or sign up!)

### Demo

---

![](/src/img/DEMO.gif)

### Overview

---

RECORDNISE is a way to digitalise your record collection. The app relies on both the GOOGLE cloud vision API and the DISCOGS database API for easy referencing on records based just on an image upload from the sleeve.

The goal of this project is to create something I am interested in - (I live for music), that showcases all of the skills I have learned so far as a trainee full stack developer.

- I wanted to experiment with new technologies and API's that I didn't use before.
- I wanted to implement a many-to-many database relationship between Users & Records
- For styling I used some Material UI components but also experimented with some responsive CSS myself.

\* This app is still a work in progress, suggestions for improvements are always welcome!

#### Some reflections and things I plan to add or improve on.

- I plan to separate genres/styles/artists into their own database tables. Currently they are stored in the records table
- I would like to add a feature for users to follow eachother and view eachothers collections
- I would like to add some pagination for when the collection gets large
- I would like to tweak the search results from GOOGLE & DISCOGS to try to make it even more accurate.
- I would like to add a details page where you can listen via youtube and view a tracklist - I already pull this information from the discogs database

### The problem

---

As a DJ or music lover with an extensive vinyl collection, I am unable to browse my collection quickly and I often forget what I have! I wish there was an easy way to digitalise my collection.

### User stories

---

As a DJ or music lover...

- I would like to easy browse through my record collection digitally
- I need to be able to add my records quickly using image upload otherwise it becomes too time consuming to use
- I want the app to already suggest the record rather than having to manually type it in
- I would like to see an interesting summary of my record collection e.g. value, most common genre etc.
- \* coming soon \* I would like to get inspiration from others collections

### Tech Used

---

- REACT
- REDUX
- REACT DROPZONE UPLOADER
- CLOUDINARY
- MATERIAL UI
- EXPRESS
- REST API
- SEQUELIZE
- POSTGRESQL
- CSS ANIMATIONS & FLEXBOX / GRID
- NODE JS
- GOOGLE CLOUD VISION
- DISCOGS DATABASE

### Git

---

In this project I used:

- New branches when implementing new features
- Clear commit messages
- Regular commits

### Backend

---

[link to the recordnise server repo](https://github.com/StaceyAlexMiller90/recordnise_server)
