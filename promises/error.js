onRequest((request, response) => 
    readFile(request.fileToRead)
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
    )
);
