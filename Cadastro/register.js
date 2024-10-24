const loginButton = document.getElementById('register_button');


loginButton.addEventListener('click', () => {
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Login realizado com sucesso!\nUsuário: ${username}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
