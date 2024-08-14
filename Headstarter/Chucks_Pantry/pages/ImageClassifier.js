import React, { useState } from 'react';
import axios from 'axios';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const ImageClassifier = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [classification, setClassification] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const classifyImage = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        // Replace with the actual API endpoint
        const response = await axios.post('YOUR_GPT_VISION_API_ENDPOINT', formData);
        setClassification(response.data.classification);
        
        await addDoc(collection(db, "classifiedItems"), { name: selectedFile.name, classification: response.data.classification });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={classifyImage}>Classify Image</button>
            {classification && <p>Classification: {classification}</p>}
        </div>
    );
};

export default ImageClassifier;
