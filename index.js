'use strict';

const fetch = require('node-fetch');
const BASE = 'https://api.coinlore.com/';

class Coinlore {
    /*
    * Get global market data
    * */
    getGlobal(ID) {
        return this.makeRequest(BASE + '/api/global')
    }

    /*
    * Get information for specific coin by ID
    * $ID = Coin ID
    * */
    getTicker(ID) {
        return this.makeRequest(BASE + '/api/ticker/?id=' + ID)
    }

    /*
    * Get markets by coin ID
    * $ID = Coin ID
    * */
    getMarkets(ID) {
        return this.makeRequest(BASE + '/api/coin/markets/?id=' + ID)
    }

    /*
    * Get all exchanges
    * */
    getExchanges() {
        return this.makeRequest(BASE + '/api/exchanges/')
    }

    /*
    * Get exchange by exchange ID
    * $id = exchange ID
    * */
    getExchange(ID) {
        return this.makeRequest(BASE + '/api/exchange/?id=' + ID)
    }

    /*
    * Get social stats for coin
    * $ID  = Coin ID
    * */
    getSocial(ID) {
        return this.makeRequest(BASE + '/api/coin/social_stats/?id=' + ID)
    }

    /*
    * List all coins max limit 100 coins
    *
    * Set start number example (0, 100 for first 100 coins and 100,100 etc..)
    * */
    getTickers(start, limit) {
        if (typeof start !== "number") start = 0;
        if (typeof limit !== "number") limit = 100;
        return this.makeRequest(BASE + '/api/tickers/?start=' + start + '&limit=' + limit)
    }

    makeRequest(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'Accept-Encoding': 'deflate, gzip'
            }
        }).then(response => response.json())
    }
}

module.exports = Coinlore;