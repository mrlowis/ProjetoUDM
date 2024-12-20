function toggleMode() {
  const html = document.documentElement

  // Alterna a classe "light" no elemento <html>
  const isLightMode = html.classList.toggle("light")

  // Verifica se a classe foi ativada e exibe o alerta
  if (isLightMode) {
    window.alert("PORTAL RPG É O CARALHO, MERMÃO!!!")
  }
}
