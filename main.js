/* Hero Js */

let imagenes = ['img/Hero1.jpg','img/Hero2.jpg','img/Hero3.jpg','img/Hero4.jpg'];
let contador = 0;

function carrousel(direccion){
let direccion1 = direccion;

if(direccion1=='atras'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[0];
    contador=0;
  }
}

if(direccion1=='adelante'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[0];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador=0;
  }
}

}

/* Email*/

const validatedEmail = (email) => {
  return /^[a-zA-Z0-9!#$%&'*+/=?¿^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
    email
  );
};

const validateName = (name) => {
  return /^[a-zA-Z\s]+(?![0-9!#$%&'*+/=?¿^_`{|}~-])$/.test(name);
};

const validateName2 = (name) => {
  validate = true;
  name.split("").forEach((e) => {
    if (!isNaN(e) || e == "'" || e == "(" || e == "@") {
      validate = false;
    }
  });
  console.log(validate);
  return validate;
};

const resetForm = (email, nombre) => {
  email.style.borderColor = "gray";
  nombre.style.borderColor = "gray";
};

const submitForm = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const nombre = document.getElementById("name");
  const mensaje = document.getElementById("mensaje");

  const valueEmail = email.value;
  const valueNombre = nombre.value;
  const valueMensaje = mensaje.value;

  resetForm(email, nombre);

  if (validatedEmail(valueEmail) && validateName(valueNombre)) {
    console.log({
      Nombre: valueNombre,
      email: valueEmail,
      mensaje: valueMensaje,
    });
    alert("Formulario envido con exito");
  } else if (!validateName(valueNombre) && !validatedEmail(valueEmail)) {
    email.style.borderColor = "red";
    nombre.style.borderColor = "red";
    alert("correo y nombre no validos");
  } else if (!validatedEmail(valueEmail)) {
    alert("Correo no valido");
    email.style.borderColor = "red";
    console.log("formulario no enviado");
  } else if (!validateName(valueNombre)) {
    console.log("formulario no enviado");
    nombre.style.borderColor = "red";
    alert("Nombre no valido");
  }
};



