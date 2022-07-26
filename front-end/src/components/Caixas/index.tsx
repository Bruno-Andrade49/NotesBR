import * as React from 'react';
import { Component } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Caixa() {

    return (
        <>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Anotação do Bruno
          </Typography>
          <Typography variant="h5" component="div">
            Compras
          </Typography>
          <Typography variant="body2">
            Ovos, Mamadeira e Leite
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"> Notificar </Button>
        </CardActions>
      </Card>
      </>
    )
  }

export default Caixa;