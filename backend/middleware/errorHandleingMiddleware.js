function errorMiddleware(err, req, res, next) {
    console.error(err);

    const statusCode = err.statusCode || 500;

res.status(statusCode).json({
        message: statusCode === 500 ? 'Something went wrong on the server' : err.message
    });
}

module.exports = errorMiddleware;
