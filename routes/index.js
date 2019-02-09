let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { title: 'About' });
});

router.get('/patient', (req, res, next) => {
  res.render('index', { title: 'Patients' });
});

router.get('/doctor', (req, res, next) => {
  res.render('index', { title: 'Doctors' });
});

router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;
