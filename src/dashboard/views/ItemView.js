import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import Item from '../../components/Item'

const ItemView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'item'));
    setItems(querySnapshot.docs.map((doc) => doc.data()));
  }

  const renderItems = (items) => {
    return (
      <Grid container spacing={2} sx={{justifyContent: "space-evenly"}}>
        {items.map((item) => {
          return (
            <Grid item xs={8} sm={6} md={5} lg={4} xl={3}>

<Item 
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            />
            </Grid >
          )
        })
        }
      </Grid >
    )
  }

  return (

    <Box>
    <Box sx={{ background: `radial-gradient(at top left, #ff0000 0%, #700000 100%)`, height: "auto", minHeight: "55px", marginBottom: "30px", textAlign: "center", borderRadious: "25px"}}>
      <Typography variant="h3" sx={{ color: "white" }}>Shop</Typography>
      </Box>
      <Container>
        {renderItems(items)}
      </Container>
    </Box>
  )
}

export default ItemView