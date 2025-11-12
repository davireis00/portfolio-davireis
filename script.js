// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navegacao = document.getElementById('navegacao');

menuToggle.addEventListener('click', () => {
  navegacao.classList.toggle('ativo');
  
  // Animação do hambúrguer
  menuToggle.classList.toggle('ativo');
});

// Fechar menu ao clicar em um link
const linksMenu = document.querySelectorAll('.navegacao a');
linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    navegacao.classList.remove('ativo');
    menuToggle.classList.remove('ativo');
  });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!navegacao.contains(e.target) && !menuToggle.contains(e.target)) {
    navegacao.classList.remove('ativo');
    menuToggle.classList.remove('ativo');
  }
});