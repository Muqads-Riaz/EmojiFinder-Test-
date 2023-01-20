import React, { useEffect } from 'react'
import { Grid , Container  } from '@mui/material';
import { useState } from 'react';
import Input from '../components/Input';
import Cards from '../components/Cards';
import data from '../Data';


export default function MainScreen() {
let [showData, setShowData] = useState([])
  let searchEmoji = (val) => {
    showData = data.filter((e) => {
      return e.description.toLowerCase().includes(val.toLowerCase())
    })
    setShowData([...showData])
  }
useEffect(()=>{
    setShowData(data)
},[]) 
  return (
    <div className="parent">
        <div className='heading'>Emoji Finder</div>
        <div style={{display:"flex" , textAlign:"center" , justifyContent:"center" }}>
        <Input className='input'  onChange={(e) => searchEmoji(e.target.value)}  placeholder="Search any emoji here..."/>
        </div>
        {showData && showData.length > 0 ?
        <Container  maxWidth="lg" sx={{ textAlign: "center" , marginY:"20px"}}>
              <Grid container spacing={3} sx={{ marginTop: "30px", padding: "30px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} >
              {showData.map((e, i) => {
              return <Cards key={i} description={e.description} emoji={e.emoji}/>
            }) }
               </Grid>
        </Container> :<h1 style={{textAlign:"center" , margin:"30px" , color:"red"}}>Sorry! Data not Found</h1>} 
  </div>
  )
}
