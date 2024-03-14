<h1 align="center"> PROJECT BACKEND: SOCIAL MEDIA </h1>

<image src="./img/Social Media.png" alt="Social media">

## Table of Contents :file_folder:

1. [Description :classical_building:](#description-classical_building)
2. [Stack :gear:](#stack-gear)
3. [Project :open_book:](#Project-open_book)
4. [Future functionalities :star2:](#Future-functionalities-star2)
5. [Link :dart:](#link-dart)
6. [Author :wave:](#author-wave)
7. [Acknowledgments :sparkling_heart:](#acknowledgments-sparkling_heart)

---

## Description :classical_building:

In this project, we developed the backend of a social network. It allows user registration, as well as the management of their accounts, and the creation of posts with various search and interaction options.

---

## Stack :gear:

![Static Badge](https://img.shields.io/badge/VSC-blue?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/JAVASCRIPT-yellow?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/DOCKER-lightblue?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/EXPRESS-green?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/node.js-darkgreen?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/jwt-black?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/MONGO%20COMPASS-lightgreen?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/MONGO%20ATLAS-lightgreen?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/MONGOOSE-lightgreen?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/GIT-red?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/GITHUB-black?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/FL0-purple?style=for-the-badge)

---

## Project :open_book:

<image src="./img/diagrama.png" alt="diagrama">

### 1 - Local Installation:

- Clone repository.
- `npm install`.
- Fill .env with data on .env.sample.
- `npm run start`.
- Copy the data from the SQL folder into MySQL and execute the import.
- Import file Collection_socialMedia.json for Thunder Client.

### 2 - Info to log

- Super_admin:
```
_id: "65eb741d9e2ac607835397d0",
name: "superAdmin",
email: "superAdmin@superAdmin.com",
password: 123456,
role: "super_admin"
```

- Admin:
```
_id: "65eb74259e2ac607835397d3",
name: "admin",
email: "admin@admin.com",
password: 123456,
role: "admin"
```

- User:
```
_id: "65eb742b9e2ac607835397d6",
name: "user",
email: "user@user.com",
password: 123456,
role: "user"
```

### 2 - Enpoints:

1. Register and Log:

- Register:

`POST https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/auth/register`



<image src="./img/exampleRegistred.png" alt="register">

- Log.

`POST https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/auth/login`



<image src="./img/exampleLog.png" alt="log">


2. User:

- Get users:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/users`



<image src="./img/viewAllUsers.png" alt="viewAllUsers">

- Get users profile:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/users/profile`


<image src="./img/view user profile.png" alt="viewProfile">

- Put user profile:

`PUT https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/users/profile`



<image src="./img/modified user profile.png" alt="modified profile">



3. Post:

- New post:

`POST https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts`


<image src="./img/create appointment.png" alt="create appointment">

- Update post:

`PUT https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts/:id`




<image src="./img/update appointment.png" alt="update appointment">

- Get own post:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts/own`


<image src="./img/recover appointment.png" alt="recover appointment">

- Get posts:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts`

- Delete post:

`DELETE https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts/:id`

<image src="./img/recover a appointment.png" alt="recover a appointment">

- Get post by id:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts/:id`

<image src="./img/recover a appointment.png" alt="recover a appointment">

- Get user posts:

`GET https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/users/posts/:user-id`

<image src="./img/recover a appointment.png" alt="recover a appointment">

- Put like or pull like:

`PUT https://socialmedia-dev-xtcq.2.ie-1.fl0.io/api/posts/like/:id`

<image src="./img/recover a appointment.png" alt="recover a appointment">



## Future functionalities :star2:

- Generate enpoint, filter by email.

- Generate endpoint, role change.

- Limit appointment choices:

  1. Prevent selection of expired days.

  2. Limit hours selection to busines hours.

- Prevent users from viewing and modifying appointments and hours of other users.

- Require that users `firstName` and `secondName` do not contain numbers or special caracters.

- Generate a new table for employees:

  1. Link the table with services and appointments.

  2. Allow users to choose specializad employees for each services.

- Deploying code.

---

## Link :dart:

https://github.com/MartaGBayona/project_BACKEND2.git

---

## Author :wave:

- **Marta Gimeno Bayona**
- [GitHub](https://github.com/MartaGBayona) - [LinkedIn](https://www.linkedin.com/in/martagbayona/)

## Acknowledgments  :sparkling_heart:

My most sincere thanks to all my colleagues. Especially to Pedro, Marina, and Ana for their invaluable help and support.
