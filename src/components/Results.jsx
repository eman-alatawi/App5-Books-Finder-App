import { Box, Typography } from '@mui/material'
import React from 'react'

const Results = ({searchTerm}) => {
  return (
    <Box sx={{marginY: "2rem"}}>
      <Typography variant='h5' color="text.secondary">
        40 Books found related to <strong style={{color: "#428bdf"}}>{searchTerm}</strong>
      </Typography>

    </Box>
  )
}

export default Results