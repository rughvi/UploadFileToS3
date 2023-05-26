import AWS from 'aws-sdk';

const getAWSS3BucketObjects = (bucketName) => {

    var s3 = new AWS.S3();

    var params = {
        Bucket: bucketName
    };

    s3.listObjects(params, function(err, data) {
        if (err) {
            console.log('Error occured while fetching S3 objects');
            console.log(err);
        }
        else{
            console.log('');
            console.log('====== S3 Bucket Objects ======');
            data.Contents.forEach(element => {
                console.log(element.Key);
            });
            console.log('');
        }

        //$("#loader").hide();
    });
}

export const S3Service = {
    getAWSS3BucketObjects
  } 