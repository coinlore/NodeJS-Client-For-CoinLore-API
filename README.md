# NodeJS Simple API Client for CoinLore

Simple library for NodeJS to use coinlore crypto api [Coinlore.com API](https://www.coinlore.com/cryptocurrency-data-api)

[Coinlore](https://www.coinlore.com) provides original cryptocurrency data, coin prices calculated by own algorithm, market caps, trade volumes and more, information updated every minute or less.

## Installation

```sh
npm install @coinlore/coinlore-crypto-prices
```

## Example

```js
const Coinlore = require('@coinlore/coinlore-crypto-prices');

const coinlore_client = new Coinlore();

//Get first 100 coins
coinlore_client.getTickers(0,100).then(console.log).catch(console.error);

//get Bitcoin info
coinlore_client.getTicker(90).then(console.log).catch(console.error);

//get Bitcoin markets
coinlore_client.getMarkets(90).then(console.log).catch(console.error);

//get Bitcoin social stats
coinlore_client.getSocial(90).then(console.log).catch(console.error);

//get Exchanges
coinlore_client.getExchanges().then(console.log).catch(console.error);

//get Exchange (Binance)
coinlore_client.getExchange(5).then(console.log).catch(console.error);

```

## License

MIT license