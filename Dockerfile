# Node.js rasmiy image dan foydalanish
FROM node:22.11.0

# Ishchi katalogni yaratish
WORKDIR /app

# package.json va package-lock.json fayllarini nusxalash
COPY package*.json ./

# Barcha kerakli paketlarni o'rnatish
RUN npm install

# Barcha loyiha fayllarini nusxalash
COPY . .

# Loyihangiz uchun kerakli port
EXPOSE 8000

# Ilovani ishga tushirish
CMD ["npm", "start"]