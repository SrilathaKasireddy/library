import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";



const formValidationSchema = yup.object({
  img : yup.string().required("Please add book img"),
  BookName: yup.string().required("Please add Book Name "),
  AuthorOrPublisherName : yup.string().required("Please add AuthorOrPublisherName "),
  PublishedYear: yup.number().required("Please add PublishedYear"),
  NoOfCopies : yup.number().required("Please add NoOfCopies")
}
);



export function EditBook() {

  const[Book,setBook]=useState(null);
  const { id } = useParams();
  
  function getBookAPI(){
    fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Books/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setBook(mvs));
  }

  useEffect(()=>{
    getBookAPI();
  },[]);






  return(
    Book ? <BookEditCore Book={Book}/> : "Loading..."
  )

}



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
      onSubmit : (values)=>editBookAPI(Book,values)
    })

    



    const navigate = useNavigate();

    function editBookAPI(Book,values){
      fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Books/${Book.id}`,
        {
          method:"PUT",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/Books"))
    }
    return (
      <Card   sx={{backgroundColor:"#FFE6D0",width:600,alignItems:"center",
      textAlign:"center",justifyContent:"center",marginTop:5,marginLeft:50 }}>
      
      <form onSubmit={handleSubmit}  
       style={{alignItems:"center",textAlign:"center"}} 
      >
        
        <TextField 
        error={touched.img && errors.img}
        variant="outlined"
        name="Image" 
        label="Image" 
        style={{padding:10,width:500}}
        value={values.img} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        id="filled-error-helper-text"
        helperText={touched.img && errors.img}/>
       
        <TextField  
        style={{padding:10,width:500}}
        error={touched.BookName && errors.BookName}
        name="BookName" 
         label="BookName" 
         variant="outlined" 
         value={values.BookName} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        id="filled-error-helper-text"
      helperText={touched.BookName && errors.BookName}/>
        
        <TextField 
        style={{padding:10,width:500}}
        error={touched.PublishedYear && errors.PublishedYear}
        label="PublishedYear"
        name="PublishedYear"
         variant="outlined"
        id="filled-error-helper-text"
        AuthorOrPublisherNameimg="PublishedYear" 
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
          id="filled-error-helper-text"
          helperText={touched.AuthorOrPublisherName && errors.AuthorOrPublisherName} />
        
        <TextField  
        style={{padding:10,width:500}}
        error={touched.NoOfCopies && errors.NoOfCopies}
        label="NoOfCopies" 
        name="NoOfCopies"
        variant="outlined"
         AuthorOrPublisherNameimg="NoOfCopies"
          img="NoOfCopies" 
          value={values.NoOfCopies}
           onChange={handleChange} 
           onBlur = {handleBlur}  
           id="filled-error-helper-text"
          
 helperText={touched.NoOfCopies && errors.NoOfCopies}/>
        
        <Button  type="submit">SAVE</Button>
      </form>
      </Card>
    );
  }
