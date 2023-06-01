import './uploadFile.css';
import React, {useState} from 'react';
import  AWS  from 'aws-sdk';

const UploadFile = () => {

    const s3 = new AWS.S3();
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleFileSelect = (e) => {
        setFile(e.target.files[0]);       
    }

    const uploadToS3 = (e) => {
        
        if (!file) {
            return;
        }
        const params = { 
            Bucket: process.env.REACT_APP_S3_BUCKET_NAME, 
            Key: `${Date.now()}.${file.name}`, 
            Body: file 
        };

        s3.putObject(params)
        .on("httpUploadProgress", (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100));
            console.log(progress);
        })
        .send((err) => {
            if (err) console.log(err);
        });        
    }
    
    return(
        <div >
            <h2>Test Image Upload</h2>
            <input type="file" onChange={handleFileSelect} />
            {file && (
                <div style={{ marginTop: '10px' }}>
                <button onClick={uploadToS3}>Upload</button>
                </div>
            )}
            {imageUrl && (
                <div style={{ marginTop: '10px' }}>
                <img src={imageUrl} alt="uploaded" />
                </div>
            )}
        </div>
    )
};

export default UploadFile;