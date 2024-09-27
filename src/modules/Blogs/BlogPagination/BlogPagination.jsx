import React from 'react';
import { Pagination } from '@mui/material';

export default function BlogPagination ({ page, count, onChange })  {


  return (
  <Pagination
    count={count}
    page={page}
    onChange={onChange}
    
    sx={{marginBottom:"30px", color:"#dcc6a5"}}
    showFirstButton
    showLastButton
  />

);
};

