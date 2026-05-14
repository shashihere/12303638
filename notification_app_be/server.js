const express= require('express'); //importing express
const cors= require('cors'); //importing the cors
const logger= require('./middleware/logger'); //importing logger file
const notificationRoutes= require('./routes/notificationRoutes'); 
const app= express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/notifications', notificationRoutes);
app.get('/', (req, res) => {
    res.json({
        message: "Backend is running"
    });
});
app.listen(5000, () => { //the backend server is running on port 5000
    console.log('Server is running on port 5000');
});