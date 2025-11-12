// Atualiza o ano automaticamente no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navegacao = document.getElementById('navegacao');

// Abre e fecha o menu ao clicar no botão
if (menuToggle && navegacao) {
  menuToggle.addEventListener('click', () => {
    navegacao.classList.toggle('ativo');
    menuToggle.classList.toggle('ativo');
  });

  // Fecha o menu ao clicar em um link
  const linksMenu = document.querySelectorAll('.navegacao a');
  linksMenu.forEach(link => {
    link.addEventListener('click', () => {
      navegacao.classList.remove('ativo');
      menuToggle.classList.remove('ativo');
    });
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!navegacao.contains(e.target) && !menuToggle.contains(e.target)) {
      navegacao.classList.remove('ativo');
      menuToggle.classList.remove('ativo');
    }
  });
}
