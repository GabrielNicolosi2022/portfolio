const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: 'application/json',
    },
  });
  if (response.ok) {
    this.reset();
    // Sweetalert
    Swal.fire({
      text: 'Gracias por contactarme, te escribiré a la brevedad.',
      icon: 'success',
      confirmButtonColor: 'green',
      toast: true,
      position: 'center',
      backdrop: true,
      allowOutsideClick: true,
      allowScapeKey: true,
      allowEnterKey: true,
      stopKeyPropagation: true,
    });
  }
}
