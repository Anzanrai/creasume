import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Typography, CardMedia } from '@mui/material';

const Paper = ({ cardTitle, cardImage }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card sx={{ minWidth: 250, textAlign: 'center' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {cardTitle}
          </Typography>
        </CardContent>
        <CardMedia>
          <img src={cardImage} alt="profiles" width="120" height="120" />
        </CardMedia>
      </Card>
    </Box>
  );
};

export default Paper;
