import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SideBar, Videos } from './'

import { useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] =useState([])

  useEffect (() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory]);

  return (
    <div>
      <Stack sx={{ flexDirection: { sx: "colum", md: "row"} }}>
        <Box 
            sx={{ 
                height: {sx: 'auto', md: '92vh'},
                borderRight: '1px solid #3d3d3d',
                px:{ sx: 0, md: 2},
                overflowY: 'auto'
            }}
        >
            <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            {/* <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
                CopyRight Trương Hoàng Long
            </Typography> */}
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2  }}>
            <Typography
              variant="h4"
              fontWeight="bold" md={2} sx={{ color: 'white' }}
            >
              {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
            </Typography>

            <Videos videos={videos} />

        </Box>
            
      </Stack>
    </div>
  )
}

export default Feed