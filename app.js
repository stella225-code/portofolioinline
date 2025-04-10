<script src="https://cdn.emailjs.com/dist/email.min.js"></script>


  // Initialisation d'EmailJS avec ta clé publique
  (function () {
    emailjs.init("jHOD4Xc0hlf8EMVsS");
  })();

  function mail() {
    // Récupération des valeurs
    var param = {
      fullname: document.getElementById("nom").value,
      email: document.getElementById("email").value,
      message: document.getElementById("sujet").value,
    };

    // Envoi avec .send()
    emailjs
      .send("service_7lymnok", "template_o0ren5s", param)
      .then(function (res) {
        // Réinitialisation du formulaire
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("sujet").value = "";

        alert("✅ Message envoyé avec succès !");
        console.log("SUCCESS", res.status);
      })
      .catch(function (err) {
        alert("❌ Erreur lors de l’envoi du message.");
        console.log("FAILED", err);
      });
  }

