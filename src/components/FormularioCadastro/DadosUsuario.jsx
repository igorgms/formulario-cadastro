import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario() {
    return (
        <form>
            <TextField id="email" label="Email" type="email" margin="normal" fullWidth />
            <TextField id="senha" label="Senha" type="password" margin="normal" fullWidth />
            <Button type="submit" variant="contained" >Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;