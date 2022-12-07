import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { ChannelCard, Videos } from './';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail,setChanelDetail] = useState(null)
  const [videos,setVideos] = useState([])

  

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChanelDetail(data?.items[0]) )

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])

  console.log(videos);

  return (
    <div>
      <Box minHeight='95vh'>
        <div style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,116,52,1) 51%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: '300px',  
        }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }}>
          <Videos vides={videos}/>
        </Box>
      </Box>
    </div>
  )
}

export default ChannelDetail