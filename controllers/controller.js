const BarsAndBeersData = require('../models/BarsAndBeersData');
const GoogleMapsData = require('../models/GoogleMapsData');

// getting and posting my data
exports.getBarsData = async (ctx) => {
  try {
    const allData = await BarsAndBeersData.find({});
    ctx.status = 200;
    ctx.body = allData;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your getBarsData func in controllers!');
  }
};

exports.postBeers = async (ctx) => {
  try {
    let data = ctx.request.body;
    data.forEach(el => el.beers.sort() && el.types.sort());
    await data.forEach(({name, house_beer_price, beers, types}) => {
      BarsAndBeersData.create({name, house_beer_price, beers, types});
    });
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your postBeers function!');
  }
};

// getting and posting googleMaps data

exports.getMapsData = async (ctx) => {
  try {
    const allMapsData = await GoogleMapsData.find({});
    ctx.status = 200;
    ctx.body = allMapsData;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your getMapsData func in controllers!');
  }
}


exports.postMapsData = async (ctx) => {
  console.log(ctx.request.body);
  try {
    const { formatted_address, geometry, icon, name, photos, place_id }  = ctx.request.body;
    console.log(geometry);
    await GoogleMapsData.create({formatted_address, geometry: geometry.location, icon, name, photos, place_id });
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your postMapsData function!')
  }
}