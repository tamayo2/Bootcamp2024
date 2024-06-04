<h1 align="center">𝐀𝐏𝐈 𝐑𝐄𝐒𝐓 </h1>

<h2>Desarrollado con: </h2>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)


---

## Salvedades:
Los errores pueden ser manejados de la manera más perfecta, pero si se manejan.
La unica tabla con solo un registro es Users, las demás si tienen sus respectivos registros.
No se usaron variables de entorno por temas de conecciones.
Se usó espanglish porque es mi idioma natal.
Los procesos de verificacion no está a nivel de esquema.

Estas son las formas de entregar los datos a esta api

////register, se necesita tirar un POST a /register con este modelo: (los esquemas no permiten contraseñas de menos de 5 caracteres)
```
{
    "email":"usuarioRegister@gmail.com",
    "password":"cocomelon",
    "confirmPassword":"cocomelon",
    "nombre":"coco",
    "apellido":"melon"
}
```
////login, se necesita tirar un POST a /register con este modelo:
```
{
    "email":"usuarioRegister8@gmail.com",
    "password":"cocomelon8"
}
```
////logout, se necesita tirar un POST a /logout

////ver perfil, se necesita tirar un GET a /profile 


///Solo el admin puede eliminar y ver los usuarios
//para ser admin ingresa esto en el post de login :
```
{
    "email": "admin@gmail.com",
    "password": "adminpassword"
}
```

//un admin puede borrar ver y editar los registros en: /users   PD: no vimos necesario que pudiera crearlos ya que cualquiera puede hacerlo
//Ejemplo de put a /users :(pero no se permite cambiar la contraseña)
```
{
    "email": "admin@gmail.com",
    "name": ""
    "apellido": ""
}
```
//ejemplo de post y put(necesita Admin) en /comentarios : 
```
{
  "id_usuario": 1,
  "id_libro": 10,
  "comentario": "Este libro es excelente. Lo recomiendo ampliamente.",
  "puntuacion": 5
}

//ejemplo de post y put en /libros :

{
    "titulo":"habitos atómicos",
    "autor":"James Clear",
    "genero":"auto ayuda",
    "ano_publicacion":"2018",
    "isbn": "978-3959721714"
}
```
---
