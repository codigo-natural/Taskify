<template>
  <div>
    <q-input
      v-model="newTaskText"
      placeholder="Nueva tarea"
      filled
      @keyup.enter="addTask"
    >
      <template v-slot:append>
        <q-btn color="primary" @click="addTask" label="Agregar" />
      </template>
    </q-input>

    <q-list bordered separator>
      <task-item v-for="task in tasks" :key="task.id" :task="task" />
    </q-list>

    <q-dialog v-model="isEditingTask">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar Tarea</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="editingTask.text" label="Texto de la tarea" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" @click="cancelEditing" />
          <q-btn color="primary" label="Guardar" @click="saveEditedTask" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import TaskItem from "src/components/TaskItem.vue";
import { useTaskStore } from "src/stores/modules/tasks";

export default {
  components: {
    TaskItem,
  },
  setup() {
    const taskStore = useTaskStore();
    const newTaskText = ref("");

    const addTask = () => {
      if (newTaskText.value.trim() !== "") {
        taskStore.addTask(newTaskText.value);
        newTaskText.value = "";
      }
    };

    const tasks = computed(() => taskStore.tasks);
    const isEditingTask = computed(() => taskStore.editingTask !== null);
    const editingTask = computed(() => taskStore.editingTask);

    const cancelEditing = () => {
      taskStore.cancelEditing();
    };

    const saveEditedTask = () => {
      taskStore.updateTask(editingTask.value); // Actualiza la tarea editada en el store
      taskStore.cancelEditing(); // Cancela la edición
    };

    return {
      newTaskText,
      tasks,
      addTask,
      isEditingTask,
      editingTask,
      cancelEditing,
      saveEditedTask,
    };
  },
};
</script>
