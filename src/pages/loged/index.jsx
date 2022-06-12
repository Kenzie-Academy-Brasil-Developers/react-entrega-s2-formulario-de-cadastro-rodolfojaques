import { MainHome } from "./styles";
import { Button } from "@mui/material";

import { useParams,Link } from "react-router-dom";

import Img from '../../assets/party.png'

export function Home(){

  const params = useParams()

    return(
        <MainHome>
            <h1>Bem vindo, {params.name}!</h1>
            <img src={Img} alt="welcome party" />
            <div>
            <Button color="secondary" type="submit" variant="outlined">
                <Link style={{textDecoration: 'none', color: 'darkviolet'}} to={'/'}>VOLTAR</Link>                
            </Button>
            </div>            
        </MainHome>
    )
}