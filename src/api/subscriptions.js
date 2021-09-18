export default {
  /**
   * List all subscriptions
   *
   * @param {*} queryParams
   * @returns
   */
  listSubscriptions(queryParams) {
    return this.$fetch('GET', '/subscription', {
      queryParams,
      auth: 'basic',
    });
  },

  /**
   *
   * @param {*} body
   */
  addSubscription(body) {
    return this.$fetch('POST', '/subscription', {
      body: JSON.stringify(body),
      auth: 'basic',
    });
  },

  /**
   * Cancel subscription
   *
   * @param {*} id
   * @returns
   */
  cancelSubscription(id) {
    return this.$fetch('DELETE', `/subscription/${id}`, { auth: 'basic' });
  },

  /**
   * Update a subscription
   * @param {String} id
   * @param {body} body subscription
   */
  updateSubscription(id, body) {
    return this.$fetch('PUT', `/subscription/${id}`, {
      body: JSON.stringify(body),
      auth: 'basic',
    });
  },

  /**
   * Enable subscription Recurring
   * @param {String} id
   */
  enableSubscriptionRecurring(id) {
    return this.$fetch('PUT', `/subscription/enableRecurring/${id}`, {
      auth: 'basic',
    });
  },
};
