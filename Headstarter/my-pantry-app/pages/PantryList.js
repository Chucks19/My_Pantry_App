import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import PantryForm from './PantryForm';
import SearchBar from './SearchBar';
import { List, ListItem, ListItemText } from '@mui/material';

const PantryList = () => {
    const [pantryItems, setPantryItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemToUpdate, setItemToUpdate] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            let q = collection(db, "pantryItems");
            if (searchTerm) {
                q = query(q, where("name", "==", searchTerm));
            }
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPantryItems(items);
        };
        fetchItems();
    }, [searchTerm]);

    return (
        <div>
            <SearchBar onSearch={setSearchTerm} />
            <PantryForm itemToUpdate={itemToUpdate} onUpdateComplete={() => setItemToUpdate(null)} />
            <List>
                {pantryItems.map(item => (
                    <ListItem button key={item.id} onClick={() => setItemToUpdate(item)}>
                        <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default PantryList;
