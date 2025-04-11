<template>
  <div class="app-container">
    <h1>Record Data</h1>
    <div class="rms-container">
      <SearchBar @search="handleSearch" />
      <RecordForm
        :record="activeRecord"
        @save-record="saveRecord"
        @cancel-edit="cancelEdit"
      />
      <RecordList
        :records="filteredRecords"
        @edit-record="editRecord"
        @delete-record="deleteRecord"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchBar from "./components/SearchBar.vue";
import RecordForm from "./components/RecordForm.vue";
import RecordList from "./components/RecordList.vue";
import useRecords from "./composables/useRecords";

const { records, addRecord, updateRecord, deleteRecord } = useRecords();
const searchQuery = ref("");
const activeRecord = ref(null);

const filteredRecords = computed(() => {
  if (!searchQuery.value) return records.value;
  const query = searchQuery.value.toLowerCase();
  return records.value.filter(
    (record) =>
      record.title.toLowerCase().includes(query) ||
      record.description.toLowerCase().includes(query)
  );
});

const handleSearch = (query) => {
  searchQuery.value = query;
};

const saveRecord = (record) => {
  if (record.id) {
    updateRecord(record);
  } else {
    addRecord(record);
  }
  activeRecord.value = null;
};

const editRecord = (record) => {
  activeRecord.value = { ...record };
};

const cancelEdit = () => {
  activeRecord.value = null;
};
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.rms-container {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>