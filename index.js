/*
Express API Template

Author: Matthew Sunner, 2022
*/

// Imports 

import express from 'express'


// App Config

const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
