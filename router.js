const Router = require('koa-router');
const contoller = require('./controllers/controller');

const router = new Router();


router.get('/getBarsData', contoller.getBarsData);
router.post('/postBeerData', contoller.postBeers);

router.get('/getMapsData', contoller.getMapsData);
router.post('/postGoogleMapsData', contoller.postMapsData);


module.exports = router;