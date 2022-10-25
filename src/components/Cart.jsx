import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const Cart = ({ cart, setCart }) => {


    //const [cart, setCart] = useState([]);
    //const [name, setName] = useState('');
    //const [price, setPrice] = useState('');
    //const cartRef = collection(db, "cart");

/*
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

    const updateFeatured = async (id) => {
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
        const getCart = async () => {
            const data = await getDocs(cartRef);
            setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getCart();
    }, []);
*/

    return (
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Cart</Typography>
            </Box>
        </Container>
    )
}

export default Cart

/*
<Button onClick={() => { deleteItem(item.id) }}>Delete Item</Button>

                {items.map((item) => {
                    return (
                        <div>
                            <hr />
                            <Typography variant="p">Name: {item.name}</Typography>
                            <br />
                            <Typography variant="p">Price: {item.price}</Typography>
                            <br />
                            <br />
                        </div>
                    )
                })}
*/
    /*
    {cart.map((item) => (
        <div>
            {item.name}
        </div>
    ))}
    */