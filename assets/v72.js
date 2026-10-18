/* INEMA Learning v7.2 — camada por cima do v71.js (não altera o comportamento dele) */
(function () {
  /* sol/lua: atalho de um clique que usa os mesmos botões de tema do Aa (mesma gravação) */
  var tb = document.querySelector(".tema-btn");
  if (tb) tb.addEventListener("click", function () {
    var claro = document.documentElement.getAttribute("data-tema") === "papel";
    var alvo = document.querySelector('.aa-pop button[data-tema="' + (claro ? "escuro" : "papel") + '"]');
    if (alvo) alvo.click();
  });

  /* pontos de progresso: espelham as aulas concluídas da lista lateral */
  function pontos() {
    document.querySelectorAll(".pontos .pt").forEach(function (p) {
      var l = document.querySelector('.lista-aulas a[data-slug="' + p.getAttribute("data-slug") + '"]');
      p.classList.toggle("feita", !!(l && l.classList.contains("feita")));
    });
  }
  pontos();
  var lista = document.querySelector(".lista-aulas");
  if (lista && window.MutationObserver) new MutationObserver(pontos).observe(lista, { subtree: true, attributes: true, attributeFilter: ["class"] });
})();
