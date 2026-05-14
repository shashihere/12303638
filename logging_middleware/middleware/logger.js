//this middleware is for adding the user's logging details

module.exports = (req, res, next)=>{
    console.log(
        `[${new Date()}] ${req.method} ${req.url}`
    );
    next();
};