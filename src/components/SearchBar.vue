<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      @input="handleInput"
      placeholder="Search records..."
      class="search-input"
    />
    <button @click="clearSearch" class="clear-btn" v-if="searchQuery">
      Clear
    </button>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
const searchQuery = ref("");
const emit = defineEmits(["search"]);

const handleInput = () => {
  emit("search", searchQuery.value);
};

const clearSearch = () => {
  searchQuery.value = "";
  emit("search", "");
};
</script>
  
  <style scoped>
.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.clear-btn {
  margin-left: 10px;
  padding: 0 15px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #777;
}

.clear-btn:hover {
  background-color: #e0e0e0;
}
</style>