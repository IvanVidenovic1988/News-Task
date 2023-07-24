# React Technical Assessment

_Let's build a news app!_

## Important

### Server

In your project directory, you have _server.js_ that will be used as API for this assessment, this is a dummy app with in memory DB, you should not change this code, this is here just to make your life easier. The detailed spec of API endpoints will be at the and of this readme file.

### React App

As you can see, this is **_create-react-app_** starter project, so you do not have to worry about webpack config. In this file you have UI mockups, feel free to use some of the popular UI libraries, the goal of this assessment is to get a glimpse of your React skills, so that should be your objective, we do not expect pixel perfect UI but functionality must be there.

### Mockups

\*If mockup fail to load, you can always find it in **public/images/mockup.png\***

![enter image description here](https://res.cloudinary.com/dgq2ohvtq/image/upload/v1572952977/React_Assessment_2_t8a0zd.png)

## Key Features

- User Login
- List and Search News
- Open Single News
- Like / unlike News
- Comment News

---

### Login

The login button is disabled if form data is invalid.

For a user to be able to send a login request the credentials must be properly filled. So the email must be a valid email address and the password must be at least 3 characters long. If some of these conditions fail a validation error should be displayed below the invalid field.

After the validation is passed the login button is enabled, and the client can now send a request to the server.

If the request is not valid, the server will return a _Bad Request Error_, with a message. The message should be shown in a dismissable popup.

If the request is valid, the server will return a jwt token that contains user data. Tokens secret is in .env file.

Once the user is logged in, the Header component changes the initial **login** button is now replaced with **user email** and a **logout** button.

Once the user is logged in, he can't access the login page until Logout

#### Nice To Have:

- Loading Spinner while the request is being processed
- Validation is done on blur
- If the field is already invalid, validation is done on change.
- Once the user is logged in, he can't access the login page until logout.

---

### List and Search News

#### List

On the main page, we have a list of news cards that display some basic news data as a news source, title, image and trending status.

Is some news trending is indicated with `trending: boolean` property inside news object

#### Search

As you can see there is no search button, so the search should be done on the change of the search input field.

We don't want to bombard our server with unnecessary requests and therefore you should implement some debouncing mechanism

For the purpose of this assessment, we can assume that news does not change that often and it would be great if we have some caching mechanism in terms of searched queries.

#### Nice To have:

- Loading Spinner while the request is being processed

---

### Open Single News

Here we would like to see how would you implement routing. Once a user clicks on the "**Open**" button on the News card, selected news should be shown on a separate page ( **_/:newsId_** ).

If user is not logged in "Like" and "Add Comment" buttons should not be visible.

If the news is not found on the server, the user should get a dismissable error popup as on the Login page.

#### Nice To Have:

- Loading Spinner while the request is being processed

---

### Like / Unlike News

Every news has `likes` property that contains a list of users that have liked selected news. Here we have a simple feature if the user has already liked the news button label is "**_Unlike_**", and vice versa the user has not liked the news button label is **_"Like"_** .

#### Nice To Have:

- Button label is changed only after the API request has resolved successfully

---

### Comment News

Every news has `comments` property that contains a list of comment objects, ordered by creation date.

On the right side of the comments subtitle, we have the "**_Add Comment_**" button. After User clicks this button, the text area is shown so that the user can enter comments, and the "Add Comment" button is now replaced with "**_Save_**" and "**_Cancel_**" buttons.

The validation rule for comment is that value can not be empty.

After a user clicks "Save" comment is added to news comments on the API and UI should display the new comments.
After a user clicks "Cancel" text area is closed and the "Add Comment" button is visible again.

#### Nice To Have:

- The new comment is displayed only after the successful API request

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run server`

Runs the mock server on _http://localhost:3001_

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## API Spec

Server URL: http://localhost:3001

With each and every request you need to send the following headers:

    {
      'content-type': 'application/json'
    }

**Error Response**

    {
      message: string
    }

### Login [POST]

**URL**

    /login

**Request**:

    {
      email: string;
      password: string
    }

**Response**

    {
      token: string;
    }

**Mock user credentials**

    email: test@test.com
    password: test

### List and Search News [GET]

**URL**

    /news

**query params**

    ?search=

**Response**

    [
      {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        imageUrl: string;
      }
    ]

### Show News [GET]

**URL**

    /news/:newsId

**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }

### Comment News [POST]

**URL**

    /news/:newsId/action/comment

**Additional Headers**

    {
      authorization: 'Bearer ' + token
    }

**Request**:

    {
      comment: string;
    }

**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }

### Comment News [POST]

**URL**

    /news/:newsId/action/like

**Additional Headers**

    {
      authorization: 'Bearer ' + token
    }

**Request**:

    {
      userId: string;
    }

**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }

# react-assingment
