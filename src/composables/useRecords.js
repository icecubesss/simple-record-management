import { ref } from "vue";

export default function useRecords() {
  const records = ref([]);

  const addRecord = (record) => {
    const newRecord = {
      ...record,
      id: Date.now(), // Simple ID generation
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };
    records.value.push(newRecord);
  };

  const updateRecord = (updatedRecord) => {
    const index = records.value.findIndex((r) => r.id === updatedRecord.id);
    if (index !== -1) {
      records.value[index] = updatedRecord;
    }
  };

  const deleteRecord = (id) => {
    records.value = records.value.filter((record) => record.id !== id);
  };

  return {
    records,
    addRecord,
    updateRecord,
    deleteRecord,
  };
}
