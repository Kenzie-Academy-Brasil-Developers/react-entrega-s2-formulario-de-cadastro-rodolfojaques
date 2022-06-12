import { FormRegister } from "./styles";

import { TextField,Button } from "@mui/material";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


export function Register(){

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório*"),
        email: yup.string().email("formato de e-mail inválido").required("Campo obrigatório"),
        password: yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/).required("Campo obrigatório*"),
        confirmPassword: yup.string().oneOf([yup.ref('password')]).required('Campo obrigatório*')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors);

    const formSchema = data => console.log(data);

    return(
        <FormRegister onSubmit={handleSubmit(formSchema)}>
           <TextField id="standard-basic" label="Nome" variant="standard" {...register("name")}/>
           <TextField id="standard-basic" label="E-mail" variant="standard" {...register("email")}/>
           <TextField type={'password'} id="standard-basic" label="Senha" variant="standard" {...register("password")}/>
           <TextField type={'password'} id="standard-basic" label="Confirmar senha" variant="standard" {...register("confirmPassword")}/>
           <Button type="submit" variant="outlined">CADASTRAR</Button>
        </FormRegister>
    )
}