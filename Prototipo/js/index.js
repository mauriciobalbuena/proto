document.addEventListener('DOMContentLoaded', () => {
  // Manejar formulario de login con validación local
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'prueba@gmail.com' && password === '1234') {
      window.location.href = 'Prototipo/html/indexGura.html';
    } else if (email === 'admin@gmail.com' && password === '1234') {
      window.location.href = 'Prototipo/html/admin.html';
    } else {
      alert('Correo o contraseña incorrectos.\nPrueba con:\nprueba@gmail.com / 1234\nadmin@gmail.com / 1234');
    }
  });
});

// Función para manejar el login con Google
function handleGoogleLogin(response) {
  // Aquí recibes el token de credencial de Google
  const credential = response.credential;
  
  // Decodifica el token JWT para obtener los datos del usuario
  const payload = JSON.parse(atob(credential.split('.')[1]));
  
  console.log('ID: ' + payload.sub);
  console.log('Nombre: ' + payload.name);
  console.log('Email: ' + payload.email);
  
  // Aquí puedes redirigir al usuario o guardar la sesión
  // Por ejemplo:
  localStorage.setItem('googleUser', JSON.stringify({
    id: payload.sub,
    name: payload.name,
    email: payload.email,
    picture: payload.picture
  }));
  
  // Redirige al usuario
  window.location.href = 'Prototipo/html/indexGura.html';
}