
import './App.css';
import { useState} from "react";
import { Home } from './Home';
import { Books } from './Books';
 import {BookAdditionForm} from "./BookAdditionForm"
 import { EditBook } from './editbook';
 
import { Routes, Route, Link, navigate, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Paper from '@mui/material/Paper';



function App() {
  
  
  
  const navigate = useNavigate();
  
  return (
    
      <Paper elevation={4} style={{borderRadius:10,margin:10,minHeight:"100vh",backgroundColor:"#F9CE86"}} >
        <div className="App">
          
          <AppBar position="static" sx={{backgroundColor:"#482201"}}>
            <Toolbar className="toolBar">
              <div>
              
                <Button sx={{
   fontFamily:"monospace",
   fontSize:"20px"
   
  
} }color="inherit" onClick = {()=> navigate("/")}>Library</Button>
                
                
              
                
                <Button  sx={{
   fontFamily:"monospace",
   fontSize:"20px"
   
  
} } color="inherit" onClick = {()=> navigate("/Books")}>BooksList</Button>
                <Button  sx={{
   fontFamily:"monospace",
   fontSize:"20px"
   
  
} } color="inherit" onClick = {()=> navigate("/addBooks")}>AddBooks</Button>
                
              </div>
              
                
                
              
            </Toolbar>
          </AppBar>
              
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/Books" element={<Books/>} />
            <Route path="/addBooks"element={<BookAdditionForm />}/>
            <Route path="/Books/edit/:id" element={<EditBook />} />
            
            
            
            
            
            <Route path="*" element={<NotFound />} />
            
            
          </Routes>
        </div>
        </Paper>
    
  ) 
}

function NotFound(){
  return <h1>404 not found</h1>
}




export default App;


