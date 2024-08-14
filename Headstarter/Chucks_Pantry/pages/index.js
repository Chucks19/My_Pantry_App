import React, { useState } from 'react';
import PantryForm from './PantryForm';
import PantryList from './PantryList';
import { Container, Typography, Grid } from '@mui/material';
require('dotenv').config();

const App = () => {
  const [itemToEdit, setItemToEdit] = useState(null);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        My Pantry
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PantryForm
            itemToEdit={itemToEdit}
            setItemToEdit={setItemToEdit}
            refreshItems={() => setItemToEdit(null)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <PantryList setItemToEdit={setItemToEdit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

