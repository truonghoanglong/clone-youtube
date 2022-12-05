import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail,setChanelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  console.log("🚀 ~ file: ChannelDetail.jsx ~ line 8 ~ ChannelDetail ~ channelDetail", channelDetail);
  console.log("🚀 ~ file: ChannelDetail.jsx ~ line 9 ~ ChannelDetail ~ videos", videos)
  

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChanelDetail(data?.items[0]) )

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])

  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail