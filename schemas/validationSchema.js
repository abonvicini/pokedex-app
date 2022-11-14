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

export const createAccountSchema = yup.object().shape({
    name: yup
        .string()
        .trim('No debe tener espacios en blanco')
        .min(2, ({ min }) => `Debe tener un mínimo de ${min} caracteres`)
        .required('El nombre es obligatorio'),
    email: yup
        .string()
        .email('El email es incorrecto o no es valido')
        .required('El email es obligatorio'),
    password: yup
        .string()
        .trim('No debe tener espacios en blanco')
        .min(8, ({ min }) => `Debe tener un mínimo de ${min} caracteres`)
        .required('La contraseña es obligatoria'),
    confirmPassword: yup
        .string()
        .trim('No debe tener espacios en blanco')
        .min(8, ({ min }) => `Debe tener un mínimo de ${min} caracteres`)
        .oneOf(
            [yup.ref('password'), null],
            'Las contraseñas deben ser identicas',
        )
        .required('La contraseña es obligatoria'),
});
