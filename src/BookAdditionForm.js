import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";


const formValidationSchema = yup.object({
  img : yup.string().required("Please add book image"),
  BookName: yup.string().required("Please add Book Name "),
  AuthorOrPublisherName : yup.string().required("Please add AuthorOrPublisherName "),
  PublishedYear: yup.number().required("Please add PublishedYear"),
  NoOfCopies : yup.number().required("Please add NoOfCopies")
}
);


export function BookAdditionForm() {

  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      img: "",
                      BookName: "",
                      PublishedYear: "",
                      AuthorOrPublisherName: "",
                      NoOfCopies: ""
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddBookAPI(values)
  })

  
  const navigate = useNavigate();
  

  function AddBookAPI(newBook){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Books",
      {method:"POST",
      body : JSON.stringify(newBook),
      headers : {"Content-Type":"application/json"}
      }
    ).then(()=>navigate("/Books"))
      
  }

  


  return (
    <Card sx={{backgroundColor:"#FFE6D0",width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
      objectFit:"cover"}}>
    <form  onSubmit={handleSubmit}  style={{alignItems:"center",textAlign:"center"}}>
      
      <TextField 
        error={touched.img && errors.img}
        variant="outlined"
        label="Image" 
        name="img"
        style={{padding:10,width:500}}
         value={values.img} 
         onChange={handleChange} 
         onBlur = {handleBlur}  
         
         helperText={touched.img && errors.img}/>
       
        <TextField  
        style={{padding:10,width:500}}
        error={touched.BookName && errors.BookName}
        label="BookName" 
        name="BookName"
        variant="outlined" 
        value={values.BookName} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        helperText={touched.BookName && errors.BookName}/>
        
        <TextField 
        style={{padding:10,width:500}}
        error={touched.PublishedYear && errors.PublishedYear}
        label="PublishedYear" 
        name="PublishedYear"
        variant="outlined"
        value={values.PublishedYear} 
        onChange={handleChange}
        onBlur = {handleBlur}  
        helperText={touched.PublishedYear && errors.PublishedYear}/>
       
        <TextField 
        style={{padding:10,width:500}}
        error={touched.AuthorOrPublisherName && errors.AuthorOrPublisherName}
        label="AuthorOrPublisherName" 
        name="AuthorOrPublisherName"
        variant="outlined" 
        value={values.AuthorOrPublisherName} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        helperText={touched.AuthorOrPublisherName && errors.AuthorOrPublisherName} />
        
      <TextField  
      error={touched.NoOfCopies && errors.NoOfCopies}
      style={{padding:10,width:500}}
      label="NoOfCopies" 
      name="NoOfCopies"
      variant="outlined"
      value={values.NoOfCopies}
      onChange={handleChange} 
      onBlur = {handleBlur}  
      helperText={touched.NoOfCopies && errors.NoOfCopies}/>
      
      <Button    type="submit">Add Book</Button>
    </form>
    </Card>
  );
}
