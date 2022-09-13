import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const ItemDashboard = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
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
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Item List</Typography>
                {items.map((item) => {
                    return (
                        <div>
                            {" "}
                            <Typography variant="p">Name: {item.name}</Typography>
                            <br/>
                            <Typography variant="p">Description: {item.description}</Typography>
                            <br/>
                            <Typography variant="p">Price: {item.price}</Typography>
                            <br/>
                            <input placeholder="Update Name..." onChange={(event) => { setName(event.target.value) }} />
                            <Button onClick={() => { updateName(item.id); }}>Update Name</Button>
                            <br/>
                            <textarea placeholder="Update Description..." onChange={(event) => { setDescription(event.target.value) }} />
                            <Button onClick={() => { updateDescription(item.id); }}>Update Description</Button>
                            <br/>
                            <input placeholder="Update Price..." onChange={(event) => { setPrice(event.target.value) }} />
                            <Button onClick={() => { updatePrice(item.id); }}>Update Price</Button>
                            <br/>
                            <Button onClick={() => { deleteItem(item.id) }}>Delete Item</Button>
                            <br/>
                        </div>
                    )
                })}
            </Box>
        </Container>
    )
}

export default ItemDashboard