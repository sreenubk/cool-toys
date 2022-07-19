const reqError = (req,res,next) =>{
    const error = new Error(`NOT-FOUND : ${req.orinalUrl}`);
    res.status(404);
    next(error);
}

const serverError = (err,req,res,next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status  (statusCode);
    res.json({
        message : err.message,
        stack: process.env.NODE_ENV === 'PROD' ? null : err.stack
    })
}
export {reqError, serverError}