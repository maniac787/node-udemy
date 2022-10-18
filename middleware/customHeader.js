const customHeader = (res, req, next) => {
    console.log(req.body);
    next();
};

module.exports = customHeader;