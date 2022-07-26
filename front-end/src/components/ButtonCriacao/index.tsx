import * as React from 'react';
import { Component } from 'react';
import Button from '@mui/material/Button';
import "./style.css"


function ButtonCriacao() {
    return (
        <>
            <div className="ButtonNote" align="center">
                <Button color='primary' variant="outlined" size="medium">
                    Criar uma nova nota
                </Button>
            </div>
        </>
    )
}

export default ButtonCriacao;