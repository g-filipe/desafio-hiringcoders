const formSignUp = document.getElementById('form-signup');
const divLoader = document.getElementById('loader');
const divSuccess = document.getElementById('success');
formSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const data = {
        name: name,
        email: email
    }

    localStorage.setItem('data',JSON.stringify(data));

    formSignUp.style.display = "none";
    divLoader.style.display = "block";

    setTimeout(() => {
        let data = localStorage.getItem('data');
        const { name, email } = JSON.parse(data);
        divLoader.style.display = "none";
        divSuccess.innerHTML = `Parabéns ${name}! Enviamos o cupom de desconto para seu e-mail ${email}.`;
        divSuccess.style.display = "block";
    }, 1000);
});