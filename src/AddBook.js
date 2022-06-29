import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
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
export function AddBook() {
  
   const navigate=useNavigate();
  
  
  
  function BookEditCore({Book}){
    
  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      img: Book.img,
                      BookName: Book.BookName,
                      PublishedYear: Book.PublishedYear,
                      AuthorOrPublisherName: Book.AuthorOrPublisherName,
                      NoOfCopies: Book.NoOfCopies
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddBook(Book,values)
  })

  const AddBook =() => {
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Books", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data)=>console.log(data))
  .then(() => navigate("/Books"));
  };
  return (
    < Card sx={{backgroundColor:"#FFE6D0",width:600,alignItems:"center",
    textAlign:"center",justifyContent:"center",marginTop:2,marginLeft:50,height:600,
    objectFit:"cover"}}>
    <form onSubmit={handleSubmit}  style={{alignItems:"center",textAlign:"center"}}>
      
      <TextField 
      error={touched.img && errors.img}
      variant="outlined"
      label="Image" 
      name="Image" 
      
      value={values.img} 
       onChange={handleChange} 
       onBlur = {handleBlur}  
       helperText={touched.img && errors.img}/>
     
      <TextField  
      error={touched.BookName && errors.BookName}
      label="BookName" 
      name="BookName"
      variant="outlined" 
      value={values.BookName} 
      onChange={handleChange} 
      onBlur = {handleBlur}  
      helperText={touched.BookName && errors.BookName}/>
      <TextField 
      error={touched.PublishedYear && errors.PublishedYear}
      label="PublishedYear" 
      name="PublishedYear"
      
      variant="outlined" 
      value={values.PublishedYear} 
      onChange={handleChange} 
      onBlur = {handleBlur}  
      helperText={touched.PublishedYear && errors.PublishedYear} />
      
      <TextField 
      error={touched.AuthorOrPublisherName && errors.AuthorOrPublisherName}
      label="AuthorOrPublisherName"
      name="AuthorOrPublisherName" 
      variant="outlined"
      value={values.AuthorOrPublisherName} 
      onChange={handleChange}
      onBlur = {handleBlur}     
      helperText={touched.AuthorOrPublisherName && errors.AuthorOrPublisherName}/>
     
      
      
      <TextField  
      error={touched.NoOfCopies && errors.NoOfCopies}
      label="NoOfCopies" 
      variant="outlined"
      name="NoOfCopies"
      PublishedYearBookName="NoOfCopies"
      BookName="NoOfCopies" 
      value={values.NoOfCopies}
      onChange={handleChange} 
      onBlur = {handleBlur}  
      helperText={touched.NoOfCopies && errors.NoOfCopies}/>
      
      <Button PublishedYearBookName="addBook" type="submit">Add Book</Button>
    </form>
    </Card>
  );
}
}