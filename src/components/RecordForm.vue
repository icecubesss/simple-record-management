<template>
  <div class="record-form">
    <h2>{{ activeRecord ? "Edit Record" : "Add New Record" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          v-model="formData.title"
          required
          placeholder="Enter record title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="formData.description"
          required
          placeholder="Enter record description"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn save-btn">
          {{ activeRecord ? "Update" : "Save" }}
        </button>
        <button
          v-if="activeRecord"
          type="button"
          class="btn cancel-btn"
          @click="handleCancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["save-record", "cancel-edit"]);

const formData = ref({
  title: "",
  description: "",
});

let resetForm = () => {
  formData.value = {
    title: "",
    description: "",
  };
};

watch(
  () => props.record,
  (newRecord) => {
    if (newRecord) {
      formData.value = { ...newRecord };
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  emit("save-record", { ...formData.value });
  resetForm();
};

const handleCancel = () => {
  emit("cancel-edit");
  resetForm();
};
</script>
  
  <style scoped>
.record-form {
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.save-btn {
  background-color: #42b983;
  color: white;
}

.save-btn:hover {
  background-color: #3aa876;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #333;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}
</style>