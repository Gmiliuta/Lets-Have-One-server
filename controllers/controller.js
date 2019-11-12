const BarsAndBeersData = require('../models/BarsAndBeersData');
const GoogleMapsData = require('../models/GoogleMapsData');
const DetailedBeersData = require('../models/BeersDetailedData');
const BarsDataByCust = require('../models/BarsDataAddedByCust');

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
  try {
    const { formatted_address, geometry, icon, name, photos, place_id }  = ctx.request.body;
    await GoogleMapsData.create({formatted_address, geometry: geometry.location, icon, name, photos, place_id });
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your postMapsData function!')
  }
}

// getting and posting detailedBeer information

exports.getOneBeer = async (ctx) => {
  try {
    const beerName = ctx.params.beerName.includes('   ') ? ctx.params.beerName.replace('   ', '/') : ctx.params.beerName;
    const beer = await DetailedBeersData.findOne({name: beerName })
    ctx.status = 200;
    ctx.body = beer;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your getOneBeer func in controllers!')
  }
};

exports.getBeersData = async (ctx) => {
  try {
    const allData = await DetailedBeersData.find({});
    ctx.status = 200;
    ctx.body = allData;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your getBeersDetailed func in controllers!');
  }
};

exports.postBeersData = async (ctx) => {
  try {
    let data = ctx.request.body;
    data.sort((a, b) => a.name > b.name ? 1 : -1);
    await data.forEach(({description, image, name, str, style, brewedBy, rating}) => {
      DetailedBeersData.create({description, image, name, str, style, brewedBy, rating});
    });
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your postBeersDetailed function!');
  }
};

exports.postBarsDataByCust = async (ctx) => {
  try {
    const custBarsData  = ctx.request.body;
    custBarsData.beerSelection = custBarsData.beerSelection.split(',');
    custBarsData.beerTypes = custBarsData.beerTypes.split(',');
    custBarsData.houseBeerPrice = Number(custBarsData.houseBeerPrice);
    await BarsDataByCust.create({name: custBarsData.barName, house_beer_price: custBarsData.houseBeerPrice, beers: custBarsData.beerSelection, types: custBarsData.beerTypes})
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log('Please check your postBarsDataByCust function!')
  }

}