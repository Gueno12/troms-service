// script.js - minimal front-end behavior
function submitForm(e){
  e.preventDefault();
  const f = e.target;
  const data = {
    name: f.name.value,
    email: f.email.value,
    message: f.message.value
  };
  // quick client-side validation
  if(!data.name || !data.email || !data.message){
    alert('Merci de remplir tous les champs.');
    return;
  }
  // fallback: open mail client with prefilled message
  const subject = encodeURIComponent("Contact depuis le site - Trom's Service Informatique");
  const body = encodeURIComponent("Nom: " + data.name + "\nEmail: " + data.email + "\n\nMessage:\n" + data.message);
  window.location.href = 'mailto:moovgueno@gmail.com?subject=' + subject + '&body=' + body;
}
