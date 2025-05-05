// script.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Toggle menú móvil
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // 2) FAQ colapsables
  document.querySelectorAll('.faq__item').forEach(item => {
    item.querySelector('.faq__question').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  // 3) Lógica calculadora
  const form = document.getElementById('calc-form');
  const resultado = document.getElementById('resultado');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const sueldo = Number(document.getElementById('sueldo').value);
    const gfijos = Number(document.getElementById('gastos-fijos').value);
    const dias = Number(document.getElementById('dias-mes').value);
    const gvar = Number(document.getElementById('gastos-variables').value);
    const costoDiario = ((sueldo + gfijos) / dias + gvar).toFixed(2);
    resultado.textContent = `Tu costo diario aproximado es $${costoDiario}`;
  });

  // 4) Exportar a PDF con jsPDF
  const { jsPDF } = window.jspdf;
  document.getElementById('export-pdf').addEventListener('click', () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Costo Diario - Excel-ente', 20, 20);
    doc.setFontSize(12);
    doc.text(resultado.textContent || 'Sin cálculo realizado', 20, 40);
    doc.save('costo-diario.pdf');
  });

  // 5) Newsletter (simulado)
  document.getElementById('news-form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('news-email').value;
    alert(`¡Gracias por suscribirte, ${email}! Pronto recibirás novedades.`);
    e.target.reset();
  });
});
