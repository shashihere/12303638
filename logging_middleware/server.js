const express= require('express'); //importing express
const logger= require('./middleware/logger'); //importing the logger.js file
const app= express(); 
app.use(logger);
app.get('/',(req, res)=> {
    res.send('Middleware is working');
});
app.get('/test', (req, res)=> {
    res.json({
        message: "Middleware test successful"
    });
});
app.listen(3000, ()=> { //starting the server on the port 3000
    console.log('Server is running on port 3000');
});