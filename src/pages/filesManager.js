import './filesManager.css';
import { S3Service } from '../services/s3Service';
import { useEffect } from 'react';

const FilesManager = () => {
    var bucketName = process.env.REACT_APP_S3_BUCKET_NAME;
    useEffect(() => {
        S3Service.getAWSS3BucketObjects(bucketName);
    }, []);
    return(
        <div>Files Manager</div>
    )
};

export default FilesManager;