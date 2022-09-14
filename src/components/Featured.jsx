import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { Box, Typography, Grid } from '@mui/material'
import Item from './Item'

const Featured = () => {

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
          console.log(item.name)
          return (
            <Grid item xs={8} sm={5} md={4}>
            <Item 
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            />
            </Grid>
          )
        })
        }
      </Grid >
    )
  }

  return (
    <Box sx={{ background: `radial-gradient(at top left, #ff0000 0%, #700000 100%)`, height: "auto", minHeight: "450px" }}>
      <Typography variant="h3" sx={{ color: "white" }}>Featured</Typography>
        {renderItems(items)}
    </Box>
  )
}

export default Featured
