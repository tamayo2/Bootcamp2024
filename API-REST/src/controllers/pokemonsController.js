import express from "express";
import connection from "../../DBConnection.js";

export const  getAllPokemons = async (req, res) => {
    try {
        const query = "SELECT * FROM `POKEMONS`";
        connection.query(query, (err, results) => {
          if (err) {
            console.error("Error al encontrar el POKEMON: " + err);
            res.status(500).send("Error al encontrar los POKEMONS");
          } else {
            res.send(results);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    export const createPokemons = async (req, res) => {
        try {
          const { NAME, HEIGHT, WEIGHT, TYPE, ABILITIES} = req.body;
          const query =
            "INSERT INTO `POKEMONS`(`NAME`, `HEIGHT`, `WEIGHT`,`TYPE`,`ABILITIES`) ALUES (?,?,?,?,?)";

          connection.query(
            query,
            [NAME, HEIGHT, WEIGHT, TYPE, ABILITIES],
            (err, results) => {
              if (err) {
                console.error("Error al Ingresar el POKEMON: ", err);
                res.status(500).send("Error en la tabla POKEMON");
              } else {
                res.send(" creado");
                console.log("La ABILITIE se ha registrado exitosamente.");
              }
            }
          );
        } catch (error) {
          console.error(error);
        }
      };
