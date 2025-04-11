<template>
  <div class="record-list">
    <h2>Records</h2>
    <div v-if="records.length === 0" class="empty-state">
      No records found. Add a new record to get started.
    </div>
    <ul v-else>
      <li v-for="record in records" :key="record.id" class="record-item">
        <div class="record-content">
          <h3>{{ record.title }}</h3>
          <p>{{ record.description }}</p>
          <div class="record-meta">
            <span class="record-date">{{ record.date }}</span>
            <span class="record-id">ID: {{ record.id }}</span>
          </div>
        </div>
        <div class="record-actions">
          <button @click="emit('edit-record', record)" class="edit-btn">
            Edit
          </button>
          <button @click="emit('delete-record', record.id)" class="delete-btn">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  records: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["edit-record", "delete-record"]);
</script>
  
  <style scoped>
.record-list {
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.empty-state {
  text-align: center;
  padding: 20px;
  color: #777;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.record-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
}

.record-item:last-child {
  border-bottom: none;
}

.record-item:hover {
  background-color: #f9f9f9;
}

.record-content {
  flex: 1;
}

h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

p {
  margin: 0 0 10px 0;
  color: #555;
}

.record-meta {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: #777;
}

.record-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.edit-btn,
.delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
}

.edit-btn {
  background-color: #f0ad4e;
  color: white;
}

.edit-btn:hover {
  background-color: #ec971f;
}

.delete-btn {
  background-color: #d9534f;
  color: white;
}

.delete-btn:hover {
  background-color: #c9302c;
}
</style>