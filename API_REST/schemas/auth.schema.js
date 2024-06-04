import z from 'zod';

export const registerSchema = z.object({
    email: z.string({
        required_error: 'email requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: 'contraseña requerida'
    }).min(5, {
        message: 'La contraseña debe tener minimo 5 caracteres'
    }).regex(/[A-Z]/, {
        message: 'La contraseña debe contener al menos un carácter en mayúscula'
    }).regex(/[0-9]/, {
        message: 'La contraseña debe contener al menos un número'
    }),
    nombre: z.string({
        required_error: 'nombre requerido'
    }),
    apellido: z.string({
        required_error: 'apellido requerido'
    }),
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Se requiere email"
    }).email({
        required_error: "email invalido"
    }),
    password: z.string({
        required_error: "Constraseña Requerida"
    }).min(5, {
        message: "La contraseña debe tener minimo 5 caracteres"
    })
})