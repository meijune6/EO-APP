// pages/eo/[id].js

import { useRouter } from 'next/router';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const dummyEOData = {
  1: { id: 1, name: 'EO Pernikahan Indah', location: 'Jakarta', rating: 4.5, description: 'Deskripsi EO ini...' },
  2: { id: 2, name: 'Pesta Pernikahan Berkah', location: 'Surabaya', rating: 4.2, description: 'Deskripsi EO ini...' },
  // Tambahkan EO dummy lainnya sesuai kebutuhan
};

const EODetail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || !dummyEOData[id]) {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          EO tidak ditemukan
        </Typography>
        <Button onClick={() => router.push('/')}>Kembali ke Dasbor</Button>
      </div>
    );
  }

  const eo = dummyEOData[id];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              sx={{ mr: 2 }}
              onClick={() => router.push('/')}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Detail EO: {eo.name}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Informasi EO
        </Typography>
        <Typography variant="subtitle1">{eo.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Lokasi: {eo.location} - Rating: {eo.rating}
        </Typography>
        <Typography variant="body1" paragraph>
          {eo.description}
        </Typography>
      </Box>
    </>
  );
};

export default EODetail;
