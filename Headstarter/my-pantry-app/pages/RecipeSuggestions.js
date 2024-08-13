import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

const RecipeSuggestions = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        const fetchPantryItems = async () => {
            const querySnapshot = await getDocs(collection(db, "pantryItems"));
            const items = querySnapshot.docs.map(doc => doc.data().name);
            suggestRecipes(items);
        };

        const suggestRecipes = async (items) => {
            const response = await axios.post('YOUR_OPENAI_API_ENDPOINT', {
                prompt: `Suggest a recipe using the following ingredients: ${items.join(', ')}`,
                max_tokens: 100
            });
            setRecipes(response.data.choices[0].text.split('\n').filter(line => line));
        };

        fetchPantryItems();
    }, []);

    return (
        <div>
            <h2>Recipe Suggestions</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSuggestions;
