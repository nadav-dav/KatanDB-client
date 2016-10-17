const isBrowser = typeof exports === 'undefined';
const request   = isBrowser ? require('browser-request') : require('request');

module.exports = function Http(url, method, json) {
  return new Promise((resolve, reject)=> {
    request(url, {method, json: json}, (err, res, body)=> {
      if (err) reject(err);
      else resolve(body.data);
    })
  });
};
