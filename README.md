# Quasar App (taskify)

project tecnical text lintik - Taskify

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### start JSON Server by executing the following command
```
json-server --watch db.json
```

## Tener en cuenta:

Quise realizar la implementacion de crear los formularios para registrar y loguar usuarios, como no daba tanto el tiempo para extenderme demaciado con las funcionalidades hay un usuario hardcodeado para poder probar esta funcionalidad.
El usuario que se debe usar para ingresar a la plataforma es:

- **name**: John Doe
- **email**: user@example.com
- **pasword**: password

El tiempo es finito hay posibilidades de mejora, cualquier oportunidad de mejora o critica es bien recivida.

# Documentación de Endpoints con Postman

### POST `/tasks`

Este endpoint se utiliza para agregar una nueva tarea a la lista de tareas pendientes.

**URL:** `http://localhost:3000/tasks`

#### Parámetros

- **Nombre**: `taskName`
  - **Tipo**: String
  - **Descripción**: Nombre de la tarea que se va a agregar.

#### Respuestas

- **200 OK**: La tarea se agregó correctamente.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    {
      "id": "1",
      "taskName": "Tarea de ejemplo",
      "completed": false
    }
    ```
- **400 Bad Request**: Error en la solicitud.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    {
      "error": "El nombre de la tarea es obligatorio."
    }
    ```

### GET `/tasks`

Este endpoint se utiliza para obtener la lista de tareas pendientes.

**URL:** `http://localhost:3000/tasks`

#### Respuestas

- **200 OK**: Lista de tareas obtenida correctamente.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    [
      {
        "id": "1",
        "taskName": "Tarea de ejemplo",
        "completed": false
      },
      {
        "id": "2",
        "taskName": "Otra tarea",
        "completed": true
      }
    ]
    ```

### PUT `/tasks/:id`

Este endpoint se utiliza para actualizar una tarea existente en la lista de tareas pendientes.

#### Parámetros

- **Nombre**: `id`

  - **Tipo**: String
  - **Descripción**: ID de la tarea que se va a actualizar.

- **Nombre**: `taskName`

  - **Tipo**: String
  - **Descripción**: Nuevo nombre de la tarea.

- **Nombre**: `completed`
  - **Tipo**: Boolean
  - **Descripción**: Estado de completado de la tarea.

#### Respuestas

- **200 OK**: La tarea se actualizó correctamente.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    {
      "id": "1",
      "taskName": "Tarea actualizada",
      "completed": true
    }
    ```
- **404 Not Found**: La tarea no se encontró.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    {
      "error": "La tarea no existe."
    }
    ```

### DELETE `/tasks/:id`

Este endpoint se utiliza para eliminar una tarea de la lista de tareas pendientes.

#### Parámetros

- **Nombre**: `id`
  - **Tipo**: String
  - **Descripción**: ID de la tarea que se va a eliminar.

#### Respuestas

- **204 No Content**: La tarea se eliminó correctamente.
- **404 Not Found**: La tarea no se encontró.
  - **Ejemplo de Cuerpo de Respuesta**:
    ```json
    {
      "error": "La tarea no existe."
    }
    ```
