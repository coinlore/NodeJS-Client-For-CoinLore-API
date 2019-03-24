'use strict';

const fetch = require('node-fetch')
const BASE = 'https://api.coinlore.com/'

class Coinlore {
    /*
    * Get information for specific coin by ID
    * */
    getTicker(ID) {
        return this.makeRequest(BASE + '/api/ticker/?id=' + ID)
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

module.exports = Coinlore