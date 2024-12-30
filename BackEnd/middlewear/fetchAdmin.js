const jwt = require('jsonwebtoken');
const jwtSecret = 'Nothing';

const fetchAdmin = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
        const data = jwt.verify(token, jwtSecret);
        req.admin = data.admin;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}


module.exports = fetchAdmin;