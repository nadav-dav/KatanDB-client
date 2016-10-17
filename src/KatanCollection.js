const Http = require('./Http');

/** @class KatanCollection **/
module.exports.KatanCollection = class KatanCollection {
  constructor(url, collectionName) {
    /** @private {string} **/
    this.collectionName = collectionName;
    /** @private {string} **/
    this.url = url;
  }

  /**
   * @param {Object} entity
   * @returns {Promise<Object>}
   */
  save(entity) {
    return Http(`${this.url}/${this.collectionName}`, 'post', entity)
  }

  /**
   * @param {Object} query
   * @returns {Promise<Object>}
   */
  find(query) {
    return Http(`${this.url}/${this.collectionName}/query/${encodeURIComponent(JSON.stringify(query))}`, 'get', true)
  }

  /**
   * @param {Object} query
   * @returns {Promise<Object>}
   */
  findOne(query) {
    return this.find(query)
      .then((results)=> {
        return results[0]
      })
  }

  /**
   * @param {Object} query
   * @returns {Promise<Object>}
   */
  remove(query) {
    return Http(`${this.url}/${this.collectionName}/query/${encodeURIComponent(JSON.stringify(query))}`, 'delete', true)
  }


  /**
   * @param {string} id
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  update(id, data) {
    return Http(`${this.url}/${this.collectionName}/${id}`, 'put', data)
  }
};