<template>
  <div>
    <h2>Yangi Mijoz Qo'shish</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Ism:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div>
        <label for="phone">Telefon:</label>
        <input v-model="phone" type="text" id="phone" required />
      </div>
      <div>
        <label for="address">Manzil:</label>
        <input v-model="address" type="text" id="address" />
      </div>
      <button type="submit">Qo'shish</button>
      <button type="button" @click="closeForm">Bekor qilish</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      address: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8000/api/customers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            phone: this.phone,
            address: this.address,
          }),
        });
        const newCustomer = await response.json();
        this.$emit('add', newCustomer); // Yangi mijozni ro'yxatga qo'shish
        this.closeForm();
      } catch (error) {
        console.error('Xatolik yuz berdi:', error);
      }
    },
    closeForm() {
      this.$emit('close'); // Formani yopish
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}
label {
  font-weight: bold;
}
input {
  padding: 5px;
  font-size: 16px;
}
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>