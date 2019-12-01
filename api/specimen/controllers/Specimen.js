'use strict';

/**
 * Specimen.js controller
 *
 * @description: A set of functions called "actions" for managing `Specimen`.
 */

module.exports = {

  /**
   * Retrieve specimen records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.specimen.search(ctx.query);
    } else {
      return strapi.services.specimen.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a specimen record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.specimen.fetch(ctx.params);
  },

  /**
   * Count specimen records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.specimen.count(ctx.query, populate);
  },

  /**
   * Create a/an specimen record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.specimen.add(ctx.request.body);
  },

  /**
   * Update a/an specimen record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.specimen.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an specimen record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.specimen.remove(ctx.params);
  }
};
