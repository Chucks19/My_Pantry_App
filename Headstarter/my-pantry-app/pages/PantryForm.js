import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { db } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const PantryForm = ({ itemToUpdate, onUpdateComplete }) => {
    const [name, setName] = useState(itemToUpdate ? itemToUpdate.name : '');
    const [quantity, setQuantity] = useState(itemToUpdate ? itemToUpdate.quantity : '');

    const handleSubmit = async () => {
        if (itemToUpdate) {
            const itemDoc = doc(db, "pantryItems", itemToUpdate.id);
            await updateDoc(itemDoc, { name, quantity });
            onUpdateComplete();
        } else {
            await addDoc(collection(db, "pantryItems"), { name, quantity });
        }
        setName('');
        setQuantity('');
    };

    const handleDelete = async () => {
        if (itemToUpdate) {
            const itemDoc = doc(db, "pantryItems", itemToUpdate.id);
            await deleteDoc(itemDoc);
            onUpdateComplete();
        }
    };

    return (
        <div>
            <TextField
                label="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                {itemToUpdate ? 'Update Item' : 'Add Item'}
            </Button>
            {itemToUpdate && (
                <Button variant="contained" color="secondary" onClick={handleDelete}>
                    Delete Item
                </Button>
            )}
        </div>
    );
};

export default PantryForm;
