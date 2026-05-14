const express= require('express'); //import the express
const router= express.Router(); 
//here the route is for recieving the notifications
const {
    getNotifications
}= require('../controllers/notificationController');
router.get('/', getNotifications);
module.exports = router;