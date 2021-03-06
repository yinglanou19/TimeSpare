# TimeSpare Proposal
[Live Link](http://time-spare.herokuapp.com/#/)

### TimeSpare 
TimeSpare is an employment-oriented network service that provides users access to quick and temporary job openings in their local area.   

It is aimed to provide hourly work opportunities to individuals with specific skillsets who are looking to fulfill their free time with meaningful work in their community. 

## Background and Overview
Sometimes, you find yourself with some free-time. You’re tired of laying around in bed all Saturday, or waiting for your next customer as an Uber driver. TimeSpare fills those idle times with purposeful work by connecting you with locals around you who need your skills.

We believe that good things happen when people help each other, whether across town or towards their dreams. Opportunities appear, open up, and become reality.

## Functionality & MVP

   - [X] User Authetication: sign up and log in modals
   - [X] Posting new listings, and a log of all listings
   - [X] Viewing and editing bookings 
   - [X] Search functionality based on categories or tags
   - [X] Calendar API
   - [X] Saving of user browsing data to database
   - [ ] User profile page + Ratings
   - [X] Production README


#### Bonus Features
   - [ ] AWS 
   - [ ] Chat functionality
   - [ ] In-site payment functionality
   - [ ] Hosting on marketplace

## Technologies & Technical Challenges

`MongoDB` / `Express.js` / `React.js` / `Redux` / `Node.js` / `JavaScript` / `Calendar API` / `Animate CSS` / `HTML5` / `SCSS`  

Anticipated Challenges:

- Learning Node, Express, and MongoDB to handle the back-end and database
- Choosing the right Calendar API for bookings
- Delegating roles between our front-end and our back-end frameworks
- Having the correct shapes of state for our data
- 4 day project time frame


## Accomplished over the Weekend

  - All members of the team read the Git and MERN tutorials
  - Set up MVPs and divide up work
  - Wrote proposal README and planned work for the week
  - Implement user authorization on database backend - **Jin** and **Yinglan** (completed on Sunday)


## Group Members & Work Breakdown

**Yinglan Ou**,
**Matthew Jang**,
**Mengna Lin**,
**Jin Chen**


### May 10 - May 12 (Weekend)
  - Build skeleton React site (MERN setup) -  **Jin**
  - Backend User Authentication - **Jin**
  - Build the sample states - **Yinglan**
  - Frontend User Authentication - **Yinglan & Mengna**
  - Components: Button, Modal, Navbar - **Mengna**
  - Components: Forms - **Matthew** 
  - Production proposal/README - **Matthew** 
  - Investigate Calendar API methods and test - **Everyone** 

### May 13 (Monday)
  **Frontend (morning)**
  - User Auth Wrap-Up: Submit Button, input fields, CSS - **Mena**
  - Frontend routes: where the buttons will lead to (Index Home Page) 
  - User Profile (aka. Listing Dashboard or User Show): (all the listings for that specific user + delete/edit buttons) (create new listing button) (user background) (dummy profile photo, aws?)
  - Listings Index page: design decision (how the listing boxes will look like, display text for listings) - **Matt/Mena**
  - Listing Show as a modal? 
  - Listing Create page (form) → date (calendar API) - **Mena**
  - Reducers / Actions / Util - **Yinglan**

  **Backend (afternoon)**
  - Listings - get (10~15), id (current user), post, patch, delete - **Yinglan/Jin**
  - Display 30 listings on the home page (db) - **Jin**
  - Background (user profile) - not required - **Jin**

### May 14
  - Bookings button - **Matthew**
  - Splash page - **Matthew**
  - Search Functionality - **Mena**
  - Fix bugs - **Yinglan**
  - Polish seed data - **Jin**
  - Push to Heroku - **Mena**

### May 15
  - Complete Production README.md - **Matthew** 
  - Refine design/CSS 
  - Finish testing, deploy, and debugging - **All team members** 


