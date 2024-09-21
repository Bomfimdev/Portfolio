document.getElementById("formulario-contato").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  // Configurar EmailJS
  emailjs.init("pRItMyiM7nsAWkixQ"); // Sua chave pública

  const templateParams = {
    nome: nome,
    email: email,
    telefone: telefone,
    mensagem: mensagem
  };

  emailjs.send("service_oyst0lo", "template_17zu9ax", templateParams)
    .then(function(response) {
      alert("E-mail enviado com sucesso!");
    }, function(error) {
      alert("Ocorreu um erro ao enviar o e-mail: " + JSON.stringify(error)); // Exibe o erro corretamente
    });
});
