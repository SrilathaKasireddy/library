import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Books } from "./Books";






export function BookCard({ img, BookName, 
  AuthorOrPublisherName,PublishedYear,
  NoOfCopies, id, getBookAPI }) {
  
  
  const navigate = useNavigate();
  return (
    <div>
    <Card  
    sx={{borderRadius:5,backgroundColor:"#421F00",color:"white",display:"flex",textAlign:"center"
    ,margin:1,padding:1,fontFamily:"monospace",objectFit: "cover",alignItems:"center",width:460}} >
      
        <img  style={{objectFit: "cover"}} 
        className="img" src={img} alt={BookName} />
        <CardContent>
          <div className="bookCredentials">
            <h3 className="Books">{`${BookName}`}
            
            
            
            
            </h3>
            <p > PublishedYear :-{PublishedYear} </p>
          </div>
          <span>AuthorOrPublisherName :-</span><p style={{fontFamily:"cursive"}} >
            <mark style={{backgroundColor:"#FFBC02"}}>{AuthorOrPublisherName}</mark></p>
          <p > NoOfCopies:-{NoOfCopies}</p>
        </CardContent>
        
         
          <div>
          <IconButton 
            
            
            className = "editIcon"
            sx={{color:"#FFBC02"}}
             onClick = {()=> {
              navigate(`/Books/edit/${id}`)
          }}>
            <EditIcon  />
          </IconButton>
          <IconButton 
            
            sx={{color:"#FFBC02"}}
            className = "deleteIcon"
            onClick = {()=> {
              fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Books/${id}`,{method:"DELETE"})
              .then(()=>getBookAPI());
          }}>
            <DeleteIcon  />
          </IconButton>
      
      </div>
    </Card>
    </div>
    
   
  
  );

}
