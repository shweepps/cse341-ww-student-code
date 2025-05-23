const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello");
});
router.get('/pass', (req, res) => {
    res.send("Passing");
});
router.get('/home', (req, res) => {
    res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) => {
  res.send('Hello World, This is profile router');
});
 
router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});
 
router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});

app.use('/', router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Sever is Listening at port ' + 
        (process.env.PORT || 3000)
    );
});


