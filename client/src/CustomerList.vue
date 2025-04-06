<template>
  <div>
    <h1>Mijozlar Ro'yxati</h1>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.name }} - {{ customer.phone }} (Qarz: {{ customer.debt }})
        <button @click="editCustomer(customer.id)">Tahrirlash</button>
        <button @click="deleteCustomer(customer.id)">O'chirish</button>
      </li>
    </ul>
    <button @click="showAddForm = true">Yangi Mijoz Qo'shish</button>
    <CustomerForm v-if="showAddForm" @close="showAddForm = false" @add="addCustomer" />
  </div>
</template>

<script>
import CustomerForm from './CustomerForm.vue';

export default {
  components: { CustomerForm },
  data() {
    return {
      customers: [],
      showAddForm: false,
    };
  },
  async created() {
    await this.fetchCustomers();
  },
  methods: {
    async fetchCustomers() {
      const response = await fetch('http://localhost:8000/api/customer_list');
      this.customers = await response.json();
    },
    async deleteCustomer(id) {
      await fetch(`http://localhost:8000/api/customers/${id}`, { method: 'DELETE' });
      await this.fetchCustomers();
    },
    editCustomer(id) {
      this.$router.push(`/customers/edit/${id}`);
    },
    addCustomer(customer) {
      this.customers.push(customer); // Yangi mijozni ro'yxatga qo'shish
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin-left: 10px;
}
</style>