import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    name :Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your name'),
    email : Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
    PhoneNumber : Yup.string()
    .min(10)
    .max(10)
    .required('Please enter your PhoneNumber'),
    Address : Yup.string()
    .required('Please enter your Address')
    
})

export {SignUpSchema}