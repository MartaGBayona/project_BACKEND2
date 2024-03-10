

### Autenticacion:

POST /api/auth/register (ok)

POST /api/auth/login (ok)

### Usuarios:

GET /api/users (ok)

GET /api/users/profile (ok)

PUT /api/users/profile (ok)

GET /api/users?email=ejemplo@ejemplo.com

DELETE /api/users/:id

PUT /api/users/:id/role

### Citas:

POST /api/posts (ok)

DELETE /api/posts/:id (ok)

PUT /api/posts/:id

GET /api/posts/own

GET /api/posts

GET /api/posts/:id

GET /api/users/posts/users-id

### Likes:

PUT /api/posts/like/:id