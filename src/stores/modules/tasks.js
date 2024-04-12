import { defineStore } from "pinia";
import {
  getTasks,
  addTask,
  updateTask as updateTaskService,
  deleteTask,
} from "src/services/tasks";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    editingTask: null, // Nuevo estado para la tarea que se está editando
  }),
  actions: {
    async fetchTasks() {
      this.tasks = await getTasks();
    },
    async addTask(text) {
      const newTask = await addTask(text);
      if (newTask) {
        this.tasks.push(newTask);
      }
    },
    async updateTask(task) {
      const updatedTask = await updateTaskService(task);
      if (updatedTask) {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks.splice(index, 1, updatedTask);
      }
    },
    async deleteTask(id) {
      const success = await deleteTask(id);
      if (success) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
      }
    },
    startEditing(task) {
      this.editingTask = { ...task }; // Crear una copia de la tarea para editar
    },
    cancelEditing() {
      this.editingTask = null;
    },
    saveEditedTask() {
      const taskToUpdate = this.tasks.find((t) => t.id === this.editingTask.id);
      if (taskToUpdate) {
        taskToUpdate.text = this.editingTask.text;
        this.updateTask(taskToUpdate);
      }
      this.editingTask = null;
    },
  },
});
