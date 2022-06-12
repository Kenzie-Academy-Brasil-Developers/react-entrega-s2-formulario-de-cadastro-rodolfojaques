import { FormRegister } from "./styles";

import { TextField,Button } from "@mui/material";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


export function Register({useHistory}){

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório*"),
        email: yup.string().email("formato de e-mail inválido").required("Campo obrigatório"),
        password: yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,"Obrigatórios: letra maiuscula e minuscula, numero e caractere especial ex: @#$%&*")
        .required("Campo obrigatório*"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "As senhas não são compativeis!").required('Campo obrigatório*')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        history.push(`/home/${data.name}`)
    }

    return(
        <FormRegister onSubmit={handleSubmit(formSchema)}>
            {errors?.name?.message?
            <TextField error id="name" label="Nome" variant="standard" color="warning" helperText={errors.name?.message} {...register("name")}/>
            :
            <TextField id="name" label="Nome" variant="standard" {...register("name")}/>}
            {errors?.email?.message?
            <TextField error id="email" label="E-mail" variant="standard" color="warning" helperText={errors.email?.message}{...register("email")}/> 
            :
            <TextField id="email" label="E-mail" variant="standard" {...register("email")}/>}
            {errors?.password?.message?
            <TextField error type={'password'} id="password" label="Senha" variant="standard" color="warning" helperText={errors.password?.message} {...register("password")}/>
            :
            <TextField type={'password'} id="password" label="Senha" variant="standard" {...register("password")}/>}
            {errors?.confirmPassword?.message?
            <TextField error type={'password'} id="confirm-password" label="Confirmar senha" variant="standard" color="warning" helperText={errors.confirmPassword?.message} {...register("confirmPassword")}/>
            :
            <TextField type={'password'} id="confirm-password" label="Confirmar senha" variant="standard" {...register("confirmPassword")}/>}
           <Button type="submit" variant="outlined">CADASTRAR</Button>
        </FormRegister>
    )
}