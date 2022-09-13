import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button, Box } from '@mui/material';

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
      <Box>
        {items.map((item) => {
          return (
            <Box sx={{ background: "radial-gradient(at top left, rgb(81, 89, 102) 0%, rgb(49, 50, 59) 100%)", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", textAlign: "center", color: "white" }}>
              <Container>
                <Typography variant="h3">{item.name}</Typography>
                <Container>
                  <img src={item.image} height="350px" width="350px" />
                </Container>
                <Typography variant="h6">{item.description}</Typography>
                <Typography variant="h6">${item.price}</Typography>
              </Container>
            </Box >
          )
        })
        }
      </Box >
    )
  }

  return (
    <Box>
      {renderItems(items)}
    </Box>
  )
}

export default ItemView