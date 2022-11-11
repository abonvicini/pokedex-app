import * as yup from 'yup';
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('El email es incorrecto o no es valido')
        .required('El email es obligatorio'),
    password: yup
        .string()
        .trim('No debe tener espacios en blanco')
        .min(8, ({ min }) => `Debe tener un mínimo de ${min} caracteres`)
        .required('La contraseña es obligatoria'),
});
