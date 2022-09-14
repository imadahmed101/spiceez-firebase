import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemModal from './ItemModal'
import { AddShoppingCart } from '@mui/icons-material'
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({name, description, price, image}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="240px"
          image={image}
          alt="spice mix"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemModal open={open} onClose={handleClose} name={name} description={description} />
      <CardActions sx={{justifyContent: "space-between"}}>
        <Typography variant="p">${price}</Typography>
        <Button size="small" color="primary">
          <AddShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
}
export default Item