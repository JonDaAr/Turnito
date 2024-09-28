const sliderButton = document.getElementById('slider-button');
const buttonDouble = document.getElementById('button-double');
const buttonDouble2 = document.getElementById('button-double2');
const sliderText1 = document.getElementById('login-text');
const sliderText2 = document.getElementById('register-text');
const containerButton = document.getElementById('containerButton');
const container = document.querySelector('.container');
const formTitle = document.getElementById('form-title');
const phrase = document.getElementById('phrase');
const loginForm = document.getElementById('login-form');

// Evento de click en el botón deslizante
containerButton.addEventListener('click', () => {
    // Alternar la clase "active" en el contenedor
    container.classList.toggle('active');
    
    if(container.classList.contains('active')){
        buttonDouble2.classList.add('active2');
        buttonDouble.classList.remove('active2');
        sliderText1.classList.add('active3');
        sliderText2.classList.remove('active4');
        containerButton.classList.add('active5');
    }else{
        buttonDouble2.classList.remove('active2');
        buttonDouble.classList.add('active2');
        sliderText1.classList.remove('active3');
        sliderText2.classList.add('active4');
        containerButton.classList.remove('active5');
    }

    
    // Cambiar el título del formulario, la frase y el contenido del formulario según el estado activo
    if (container.classList.contains('active')) {
        phrase.textContent = '¡Bienvenido! Regístrate para comenzar.';
        loginForm.innerHTML = `
            <form class="form">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Ingrese nombre de usuario" required>
                <input type="email" placeholder="Ingrese tu correo" required>
                <input type="password" placeholder="Ingrese tu contraseña" required>
                <input type="password" placeholder="Confirma tu contraseña" required>
                <div class="buttons">
                    <button type="button" class="client"><a href="pages/registro_de_cliente.html"">Cliente</a></button>
                    <button type="button" class="entrepreneurship"><a href="pages/registro_de_emprendimiento.html ">Emprendimiento</a></button>
                </div>
                <div class="inicio">
                    <p>o inicia sesión con</p>
                </div>
                <div class="social-icons">
                    <img src="/assets/images/logo_google.svg" alt="Google">
                </div>
            </form>
            `;
    } else {
        phrase.textContent = '¡Bienvenido de nuevo! Inicia sesión para continuar.';
        loginForm.innerHTML = `
        <form class="login-form">
                    <h2>Iniciar sesión</h2>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Ingresa tu correo" >
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Ingresa tu contraseña">
                    <div class="extras">
                        <label><input type="checkbox">Recuérdame</label>
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div class="conteinBTN">
                    <button class="login-btn"><a href="/pages/usuario_Emprendimiento.html"> Iniciar Sesión</a></button>
                    </div>
                    <p class="alt-login">o inicia sesión con</p>
                    <div class="social-login">
                        <img src="/assets/images/logo_google.svg" alt="">
                    </div>
                </form>`;
    }
});

