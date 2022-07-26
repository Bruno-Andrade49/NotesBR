import * as React from 'react';
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Caixas from "../Caixas/index"
import "./style.css"

function GridPagina() {
    return (
        <>
            <div className="container">
                <Grid container rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 50 }}>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Caixas />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default GridPagina;