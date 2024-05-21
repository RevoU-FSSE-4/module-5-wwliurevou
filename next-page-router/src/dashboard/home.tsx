import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import Axios from 'axios';
import Header from './Header';


const data =
  [
    {

      src: 'https://cdn.vox-cdn.com/thumbor/u7jCCxWCVBktYRsDMeeKrI91rl8=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72009235/captain_pikachu.6.jpg',
      title: 'Pikachu',
      channel: 'Pokemon',
      views: '396k views',
      createdAt: 'a week ago',
    },
    {
      src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Pokemon-Go-Charmander-Spotlight-Hour.webp-.jpg',
      title: 'Charmander',
      channel: 'Pokemon',
      views: '40M views',
      createdAt: '3 years ago',
    },
    {
      src: 'https://i.pinimg.com/736x/3d/f2/db/3df2dbe82ab0a446ef57bada79b5b277.jpg',
      title: 'Bulbasaur',
      channel: 'Pokemon',
      views: '130M views',
      createdAt: '10 months ago',
    },
  ];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function Home() {


  return (
    <>
      <h1>Welcome to Pokemon World</h1>

      <Box sx={{ overflow: 'hidden' }}>
        <Header />
        <Media />
      </Box>
    </>
  );
}