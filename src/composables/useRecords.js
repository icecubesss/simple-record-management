import { ref } from "vue";

export default function useRecords() {
  const records = ref([
    {
      id: 1,
      title: "First Record",
      description: "This is the first sample record",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "Second Record",
      description: "Another example record for demonstration",
      date: "2023-05-16",
    },
    {
      id: 3,
      title: "Third Record",
      description: "Yet another record in the system",
      date: "2023-05-17",
    },
  ]);

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
