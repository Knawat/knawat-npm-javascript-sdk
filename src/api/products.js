export default {
  /**
   * Get all imported products by variation SKU(s)
   *
   * @param {array} skus Array of SKUs
   * @returns
   * @memberof MP
   */
  getProductsByVariationSku(skus) {
    return this.$fetch('GET', '/products/variation', {
      auth: 'token',
      queryParams: { skus },
    });
  },

  /**
   * Get product by sku
   *
   * @param {string} sku
   * @returns
   * @memberof MP
   */
  getProductBySku(sku, queryParams) {
    return this.$fetch('GET', `/products/${sku}`, {
      auth: 'token',
      queryParams,
    });
  },
};
