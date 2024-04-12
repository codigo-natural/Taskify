<template>
  <q-item
    @click="toggleCompleted"
    :class="{ 'bg-green-2': localTask.completed }"
    clickable
    v-ripple
  >
    <q-item-section avatar>
      <q-checkbox
        v-model="localTask.completed"
        @update:model-value="updateTask"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': localTask.completed }">{{
        localTask.text
      }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="primary"
        @click="startEditing"
        icon="edit"
      />
      <q-btn
        flat
        round
        dense
        color="negative"
        @click.stop="deleteTask"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { useTaskStore } from "src/stores/modules/tasks";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localTask: { ...this.task }, // Crear una copia local de la propiedad task
    };
  },
  methods: {
    toggleCompleted() {
      this.localTask.completed = !this.localTask.completed; // Actualiza la tarea local
      this.updateTask(); // Llama a la función para actualizar la tarea en el store
    },
    deleteTask() {
      const taskStore = useTaskStore();
      taskStore.deleteTask(this.localTask.id);
    },
    updateTask() {
      const taskStore = useTaskStore();
      taskStore.updateTask(this.localTask).then(() => {
        // Actualiza la tarea local con la tarea actualizada desde el store
        this.localTask = {
          ...taskStore.tasks.find((t) => t.id === this.localTask.id),
        };
      });
    },
    startEditing() {
      const taskStore = useTaskStore();
      taskStore.startEditing(this.localTask);
    },
  },
  // Agrega un watcher para detectar cambios en la tarea y actualizar localTask
  watch: {
    task: {
      immediate: true,
      handler(newVal) {
        this.localTask = { ...newVal };
      },
    },
  },
};
</script>
