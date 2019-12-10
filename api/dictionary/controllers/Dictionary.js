'use strict';

/**
 * Dictionary.js controller
 *
 * @description: A set of functions called "actions" for managing `Dictionary`.
 */

module.exports = {

  /**
   * Retrieve dictionary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.dictionary.search(ctx.query);
    } else {
      return strapi.services.dictionary.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a dictionary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dictionary.fetch(ctx.params);
  },

  /**
   * Count dictionary records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.dictionary.count(ctx.query, populate);
  },

  /**
   * Create a/an dictionary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dictionary.add(ctx.request.body);
  },

  /**
   * Update a/an dictionary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dictionary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dictionary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dictionary.remove(ctx.params);
  }
};
