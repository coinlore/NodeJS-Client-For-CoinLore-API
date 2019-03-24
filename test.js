const Coinlore = require('../coinlore-crypto-prices');

const coinlore_client = new Coinlore();

//Get first 100 coins
coinlore_client.getTickers(0,100).then(console.log).catch(console.error);

//get Bitcoin info
coinlore_client.getTicker(90).then(console.log).catch(console.error);
