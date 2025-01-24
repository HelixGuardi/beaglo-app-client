# Beaglo

[![App Logo](./logo.png)](https://beaglo.netlify.app/)  
**[¡Mira la App!](https://beaglo.netlify.app/)**

### Description
Beaglo es una red social para viajeros, creada para compartir experiencias, conectar con otros aventureros y explorar el mundo de una manera única. Los usuarios pueden publicar sus aventuras, comentar en publicaciones, y buscar perfiles de otros viajeros.

---

### Technologies & Libraries Used
- HTML
- CSS
- JavaScript
- React
- React Context
- Axios
- Cloudinary

---

### Backlog Functionalities
- Implementación de un sistema de "likes" para las publicaciones.
- Funcionalidad de búsqueda avanzada para filtrar publicaciones por ubicación o palabras clave.
- Notificaciones en tiempo real para nuevos comentarios y publicaciones de los usuarios que sigues.
- Sistema de mensajería directa entre usuarios.
- Posibilidad de seguir a otros usuarios y crear un feed personalizado.
- Modo oscuro para mejorar la experiencia de usuario.

---

## Client Structure

### User Stories

1. **404 Page**: Como usuario, quiero ver una página agradable cuando intento acceder a una ruta inexistente para saber que fue un error mío.
2. **500 Error Page**: Como usuario, quiero ver una página de error cuando algo salga mal en el servidor para saber que no es mi culpa.
3. **Homepage**: Como usuario, quiero acceder a la página de inicio para entender de qué trata la app y poder registrarme o iniciar sesión.
4. **Sign Up**: Como usuario, quiero registrarme en la página para poder crear mi perfil y empezar a compartir mis experiencias.
5. **Login**: Como usuario, quiero iniciar sesión para acceder a mi cuenta y publicaciones.
6. **Logout**: Como usuario, quiero cerrar sesión para proteger mi cuenta.
7. **Feed Page**: Como usuario, quiero ver todas las publicaciones en un feed para explorar contenido de otros viajeros.
8. **Create Post**: Como usuario, quiero crear publicaciones con fotos y descripciones para compartir mis experiencias.
9. **Edit Post**: Como usuario, quiero editar mis publicaciones para corregir errores o añadir información.
10. **Comments**: Como usuario, quiero agregar comentarios a las publicaciones para interactuar con otros viajeros.
11. **Profile Page**: Como usuario, quiero ver mi perfil para gestionar mis publicaciones e información personal.
12. **Edit Profile**: Como usuario, quiero editar mi información personal para mantener mi perfil actualizado.
13. **User Profiles**: Como usuario, quiero poder ver los perfiles de otros viajeros para conocer sus experiencias.
14. **Search**: Como usuario, quiero buscar publicaciones o usuarios para encontrar contenido específico.

---

### Client Routes

| **Path**                   | **Page**             | **Components**       | **Permissions**            | **Behavior**                                      |
|----------------------------|----------------------|----------------------|----------------------------|--------------------------------------------------|
| `/`                        | HomePage            |                      | Public                     | Página principal para login y signup.           |
| `/signup`                  | Signup              |                      | Anon Only `<IsAnon>`       | Formulario de registro, redirige al feed.       |
| `/login`                   | Login               |                      | Anon Only `<IsAnon>`       | Formulario de login, redirige al feed.          |
| `/feed`                    | FeedPage            | PostList, Card       | Private Only `<IsPrivate>` | Muestra todas las publicaciones del feed.       |
| `/create-post`             | CreatePost          |                      | Private Only `<IsPrivate>` | Permite crear nuevas publicaciones.             |
| `/edit-post/:postId`       | EditPost            |                      | Private Only `<IsPrivate>` | Permite editar una publicación específica.      |
| `/profile`                 | ProfilePage         |                      | Private Only `<IsPrivate>` | Página del perfil del usuario actual.           |
| `/edit-profile`            | EditProfilePage     |                      | Private Only `<IsPrivate>` | Permite editar el perfil del usuario actual.    |
| `/users/:userId`           | UsersProfilePage    |                      | Private Only `<IsPrivate>` | Permite ver el perfil de otro usuario.          |
| `/search`                  | SearchPage          |                      | Private Only `<IsPrivate>` | Página para buscar publicaciones o usuarios.    |
| `/comments/:postId`        | CommentsPage        |                      | Private Only `<IsPrivate>` | Permite ver y agregar comentarios.              |
| `*`                        | NotFoundPage        |                      | Public                     | Página 404 para rutas inexistentes.             |

---

### Other Components
- **Navbar**: Barra de navegación fija en la parte inferior de la pantalla, con accesos rápidos.
- **Footer**: Pie de página con información adicional.
- **PostList**: Lista de todas las publicaciones en el feed.
- **Card**: Componente individual para cada publicación.
- **Cloudinary**: Componente para subir fotos a través del servicio de Cloudinary.

---

### Services

#### Auth Service
- `auth.signup(user)`
- `auth.login(user)`
- `auth.verify()`

#### Post Service
- `post.create(data)`
- `post.getAll()`
- `post.get(postId)`
- `post.edit(postId, data)`
- `post.delete(postId)`

#### User Service
- `user.getOwn()`
- `user.edit(data)`
- `user.get(userId)`

#### Comment Service
- `comment.create(postId, data)`
- `comment.get(postId)`
- `comment.delete(commentId)`

---

### Context
- **auth.context.jsx**: Gestiona el estado de autenticación del usuario en la app.

---

### Links
- **Client Repository**: [Beaglo Client Repo](https://github.com/HelixGuardi/beaglo-app-client)
- **Server Repository**: [Beaglo Server Repo](https://github.com/HelixGuardi/beaglo-app-server)
- **Deployment Link**: [Beaglo App](#)
- **Slides**: [Slides Link](#)
