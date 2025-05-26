import * as yup from 'yup';

export const formSchema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório!'),
    whatsapp: yup
        .string()
        .min(11, 'Mínimo de 11 dígitos!')
        .max(11, 'Máximo de 11 dígitos!')
        .required('O WhatsApp é obrigatório!'),
    message: yup.string().required('A mensagem é obrigatória'),
});
