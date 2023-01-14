import logo from './logo.svg';
import './App.css';
import data from './Data';
import { Grid , Container  } from '@mui/material';
import { useState } from 'react';

function App() {
  let [searchedProduct, setSearchedProduct] = useState([])
  let searchEmoji = (val) => {
    searchedProduct = data.filter((e) => {
      return e.description.toLowerCase().includes(val.toLowerCase())
    })
    setSearchedProduct([...searchedProduct])
  }
  return (
    <div className="parent">
      <div className='heading'>Emoji Finder</div>
      <div style={{display:"flex" , textAlign:"center" , justifyContent:"center" }}>
      <input className='input'  onChange={(e) => searchEmoji(e.target.value)}  placeholder="Search any emoji here..."
    /  >
      </div>
      <Container  maxWidth="md" sx={{ textAlign: "center" , marginY:"20px"}}>
                <Grid container spacing={3} sx={{ marginTop: "30px", padding: "30px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} >
                {searchedProduct && searchedProduct.length > 0 ?
                searchedProduct.map((e, i) => {
                return <Grid item xs={4} md={2} sm={4} lg={2} key={i} >
                  <div   className="box">
                   <div className="emoji">{e.emoji}</div>
                  <div>{e.description}</div>
                  </div>
                  </Grid>
              }) :
                data.map((e, i) => {
                return <Grid item xs={4} md={2} sm={4} lg={2} key={i} >
                  <div   className="box">
                   <div className="emoji">{e.emoji}</div>
                  <div>{e.description}</div>
                  </div>
                  </Grid>
              }) }
                 </Grid>
            </Container> 
    </div>
  );
}

export default App;
