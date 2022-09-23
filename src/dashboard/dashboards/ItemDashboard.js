import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography, TableHead, TableRow, TableContainer, TableCell, TableBody, Table } from "@mui/material"
import { Edit, Star, Delete } from '@mui/icons-material'


const ItemDashboard = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [featured, setFeatured] = useState('');
    const itemRef = collection(db, "item");


    const updateName = async (id) => {
        const userDoc = doc(db, "item", id);
        const newFields = { name };
        await updateDoc(userDoc, newFields);
        alert('Updated Name')
        window.location.reload(false);

    }

    const updateDescription = async (id) => {
        const userDoc = doc(db, "item", id);
        const newFields = { description };
        await updateDoc(userDoc, newFields);
        alert('Updated Description')
        window.location.reload(false);
    }

    const updatePrice = async (id) => {
        const userDoc = doc(db, "item", id);
        const newFields = { price };
        await updateDoc(userDoc, newFields);
        alert('Updated Price')
        window.location.reload(false);

    }

    const updateUnfeatured = async (id) => {
        const featured = "no"
        const userDoc = doc(db, "item", id);
        const newFields = { featured };
        await updateDoc(userDoc, newFields);
        alert('Updated Unfeatured')
        window.location.reload(false);

    }

    const updateFeatured = async (id) => {
        const featured = "yes"
        const userDoc = doc(db, "item", id);
        const newFields = { featured };
        await updateDoc(userDoc, newFields);
        alert('Updated Featured')
        window.location.reload(false);

    }

    const deleteItem = async (id) => {
        const userDoc = doc(db, "item", id);
        await deleteDoc(userDoc);
        alert('Deleted Item ')
        window.location.reload(false);

    }

    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemRef);
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getItems();
    }, []);

    return (
        <Container>
            <Box>
                <Typography variant="h4">Item List</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Pic</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Desc.</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Featured?</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>



                            {items.map((item) => {
                                return (
                                    <TableRow justifyContent="center">
                                        <TableCell>
                                            <img src={item.image} height="40px" width="40px" />
                                        </TableCell>
                                        <TableCell>

                                            <Typography variant="p">{item.name}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="p">{item.description}</Typography>

                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="p">${item.price}</Typography>

                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="p">Featured: {item.featured}</Typography>
                                            <br />

                                            <Button variant="outlined" onClick={() => { updateUnfeatured(item.id); }}>
                                                <Star />
                                            </Button>
                                            <Button variant="contained" onClick={() => { updateFeatured(item.id); }}>
                                                <Star />
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined">
                                                <Edit />
                                            </Button>
                                            <Button variant="contained" onClick={() => { deleteItem(item.id) }}>
                                                <Delete />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    )
}

export default ItemDashboard
                    /*
<br />
<input placeholder="Update Name..." onChange={(event) => { setName(event.target.value) }} />
<Button variant="outlined" size="small" onClick={() => { updateName(item.id); }}>Update Name</Button>
<br />
<textarea placeholder="Update Description..." onChange={(event) => { setDescription(event.target.value) }} />
<Button variant="outlined" size="small" onClick={() => { updateDescription(item.id); }}>Update Description</Button>
<br />
<input placeholder="Update Price..." onChange={(event) => { setPrice(event.target.value) }} />
<Button variant="outlined" size="small" onClick={() => { updatePrice(item.id); }}>Update Price</Button>
<br />

<Button variant="outlined" size="small" >Update Featured</Button>

*/