import { blue } from '@material-ui/core/colors';
import {  Pagination } from '@mui/material'
import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';



const darkTheme=createTheme({
    palette:{
        type:"dark",

    }
})

const CustomPagination = ({setPage,numofPages=500}) => {
    const handlePageChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
    };
  return (
    <>
    <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop:10,
    }}>
        <ThemeProvider theme={darkTheme}>
            
     <Pagination  count ={numofPages}
     onChange={(e)=>handlePageChange(e.target.textContent)}
     
     color="primary"
     
     />
     </ThemeProvider>
     </div>
    </>
  )
}

export default CustomPagination