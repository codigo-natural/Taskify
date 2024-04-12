import axios from "axios";

const apiUrl = "http://localhost:3000/tasks";

export const getTasks = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    return [];
  }
};

export const addTask = async (text) => {
  try {
    const response = await axios.post(apiUrl, { text, completed: false });
    return response.data;
  } catch (error) {
    console.error("Error al agregar una tarea:", error);
    return null;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.put(`${apiUrl}/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar una tarea:", error);
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar una tarea:", error);
    return false;
  }
};
