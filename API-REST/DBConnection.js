import mysql from "mysql";

const connection = mysql.createConnection({
    host: "btgwscae1gfaouvhxykt-mysql.services.clever-cloud.com",
    user: "umvdbag5uqsb4npg",
    password: "1EZ0l48ZJCWTbLzvZbru",
    database: "btgwscae1gfaouvhxykt",
})

connection.connect((err)=>{
    if(err){
        console.error("No se pudo conectar con la base de datos," + err);
        return;
    }
    console.log("conexión exitosa.")
})

export default connection;