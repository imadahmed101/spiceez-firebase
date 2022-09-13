import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemModal from './ItemModal'
import { AddShoppingCart } from '@mui/icons-material'
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          image="/two.jpg"
          alt="spice mix"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nihari Mix
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Freshly Ground Peppers mixed with an array of spices makes this mix a savoury taste. 
          Add to your meat before cooking and let the heat increase the flavour profile.
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemModal open={open} onClose={handleClose} />
      <CardActions sx={{justifyContent: "space-between"}}>
        <Typography>$4.00</Typography>
        <Button size="small" color="primary">
          <AddShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
}
export default Item