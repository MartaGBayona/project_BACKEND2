

autenticacion:

POST /api/auth/register
POST /api/auth/login

Usuarios:

GET /api/users
GET /api/users/profile
PUT /api/users/profile
GET /api/users?email=ejemplo@ejemplo.com
DELETE /api/users/:id
PUT /api/users/:id/role

Citas:
POST /api/posts
DELETE /api/posts/:id
PUT /api/posts
GET /api/posts/own
GET /api/posts
GET /api/posts/:id
GET /api/users/posts/users-id

Likes:

PUT /api/posts/like/:id