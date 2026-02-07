// app.js - CÓDIGO SUPER SIMPLES
console.log("🎉 OLÁ MUNDO! Seu site está começando...");

const express = require('express');
const app = express();

// Página principal
app.get('/', (req, res) => {
  res.send('<h1 style="color: blue;">MEU PRIMEIRO SITE NO AR! 🚀</h1>');
});

// Porta do site
const porta = 3000;

// Liga o site
app.listen(porta, () => {
  console.log(`✅ Site rodando em: http://localhost:${porta}`);
});