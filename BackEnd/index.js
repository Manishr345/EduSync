const express = require(express);
const app = express();

app.use(express.json());

app.use('/auth', require('./Routes/auth'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000')
})