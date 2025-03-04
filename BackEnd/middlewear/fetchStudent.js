const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'Nothing';

const fetchStudent = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
        const data = jwt.verify(token, jwtSecret);
        req.student = data.student;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}


module.exports = fetchStudent;