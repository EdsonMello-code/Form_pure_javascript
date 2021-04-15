const form = document.getElementById('form')
const submit = document.getElementById('submit')
const file = document.getElementById('file')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData();

  formData.append('images', file.files[0]);
  
  console.log(formData.get('images'))
  fetch('http://localhost:3333/images', {
    method: 'POST',
    body: formData,
    
  }).then(i => console.log(i));
})

