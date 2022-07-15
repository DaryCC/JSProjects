onRequest((request, response) => {
    const readFilePromise = new Promise((resolve, reject) => { 
        readFile(request.fileToRead, (data, err) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve(data);
        });
    });
    
    readFilePromise
    .then(
        data => writeFile(request.fileToWrite, data),
        error => {
          console.log('Error when reading file:', error);
          return 'Failed';
        })
    .then(
        status => response.send(status),
        error => {
            console.log('Error when writing to file:', error);
            response.send(error);
        }
    );
});
