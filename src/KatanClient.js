const {KatanCollection} = require('./KatanCollection');

/** @class KatanClient **/
module.exports.KatanClient = class KatanClient {
  constructor(url){
    /** @private {url} **/
    this.url = url;
  }

  /**
   * @param collectionName
   * @returns {KatanCollection}
   */
  createCollection(collectionName){
    return new KatanCollection(this.url, collectionName)
  }
};