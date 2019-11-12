const Router = require('koa-router');
const controller = require('./controllers/controller');

const router = new Router();


router.get('/getBarsData', controller.getBarsData);
router.post('/postBeerData', controller.postBeers);

router.get('/getMapsData', controller.getMapsData);
router.post('/postGoogleMapsData', controller.postMapsData);

router.get('/getOneBeer/:beerName', controller.getOneBeer);
router.get('/getBeersData', controller.getBeersData);
router.post('/postBeersData', controller.postBeersData);

router.post('/postBarsDataByCust', controller.postBarsDataByCust);



module.exports = router;