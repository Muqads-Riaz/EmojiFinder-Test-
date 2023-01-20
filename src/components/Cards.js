import React from 'react'
import { Grid } from '@mui/material'

export default function Cards(props) {
  return (
    <Grid item xs={4} md={2} sm={4} lg={2} >
    <div className="box">
     <div className="emoji">{props.emoji}</div>
    <div>{props.description}</div>
    </div>
    </Grid>
  )
}
