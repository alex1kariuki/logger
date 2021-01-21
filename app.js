const express = require('express');
const app = express();
const Cabin = require('cabin');     
const cabin = new Cabin();

app.use(express.urlencoded({extended: false}))

// app.use((req, res, next) => {
//     req.logger.info('VISITED HOME PAGE');
//     res.json({
//         message: 'Welcome to the NEW logger service.'
//     })
//     next();
// });

// an example home page route
app.get('/', (req, res) => {
    req.logger.info('visited home page');
   
    res.send('hello world');
    res.json({
        message: 'Welcome to the Cabin logger service'
    })
  });
  
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

module.exports = app;