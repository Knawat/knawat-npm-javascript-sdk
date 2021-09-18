<p align="center"><a href="https://knawat.com/" target="_blank"><img src="https://knawat.com/wp-content/uploads/2017/10/253_77.png" alt="Knawat" width="300"></a></p>

<p align="center">
  <a href="https://gitter.im/Knawat/Lobby" rel="nofollow">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Join the chat at Knawat">
  </a>
  <a href="http://isitmaintained.com/project/Knawat/Knawat-NPM-JavaScript-SDK">
    <img src="http://isitmaintained.com/badge/resolution/Knawat/Knawat-NPM-JavaScript-SDK.svg" alt="Average time to resolve an issue"/>
  </a>
  <a href="http://isitmaintained.com/project/Knawat/Knawat-NPM-JavaScript-SDK">
    <img src="http://isitmaintained.com/badge/open/Knawat/Knawat-NPM-JavaScript-SDK.svg" alt="Percentage of issues still open"/>
  </a>
  <a href="https://npm-stat.com/charts.html?package=@knawat/mp">
    <img src="https://img.shields.io/npm/dm/@knawat/mp.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@knawat/mp">
    <img src="https://img.shields.io/npm/v/@knawat/mp.svg" alt="npm"/>
  </a>
</p>

# Knawat Node.js NPM Package (MP)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/57a87a5472f643a0b8b4a920075baa5b)](https://app.codacy.com/app/Knawat/Knawat-NPM-JavaScript-SDK?utm_source=github.com&utm_medium=referral&utm_content=Knawat/Knawat-NPM-JavaScript-SDK&utm_campaign=Badge_Grade_Settings)

A Node.js package for Knawat Dropshipping Merchants REST API. Easily interact with the Knawat MP REST API using this library.

## Installation

```
npm install @knawat/mp --save

yarn add @knawat/mp
```

## Getting started

Check out the Knawat Dropshipping MP REST API endpoints and data that can be manipulated in [our documentations](https://mp.knawat.io).

## Setup

Setup for the new Knawat Dropshipping REST API integration:

```javascript
const MP = require('@knawat/mp');

// Provide instance with your store credentials
const mp = new MP({
  key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
  secret: 'XXXXXXXXXXXXXXXXXXXXXXXX',
});

// Or use your store id/URL
// Supported using basic auth only
const mp = new MP({
  store: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
});
```

### Options

| Option         | Type     | Required    | Description                                                                   |
| -------------- | -------- | ----------- | ----------------------------------------------------------------------------- |
| `key`          | `string` | conditional | Your Store's API consumer key if token not provided this field is required    |
| `secret`       | `string` | conditional | Your Store's API consumer secret if token not provided this field is required |
| `store`        | `string` | conditional | Your store current store URL                                                  |
| `apiRateLimit` | `object` | optional    | Overwrite the API rate limit (not recommended)                                |

[Getting Access tokens](https://docs.knawat.io/#tag/Authentication/paths/~1token/post)

## Library Methods

### Products Functions

All the functions mentioned here return a promise and it's an async function.

What's mentioned between `[brackets]` are the authentication method used for the functions.

Example

```JavaScript
mp.getProducts() // return a promise.
```

- My Products
  - [**getProducts([params])**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/get)
  - [**addProducts(products)**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/post)
  - [**updateBulkProduct(data)**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/patch)
  - [**getMyProductsCount(params)**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1count/get)
  - [**getMyProductBySku(id, [params])**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/get)
  - [**updateProductBySku(id, product)**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/put)
  - [**deleteProductBySku(id)**](https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/delete)
- Orders
  - [**getOrders([params])**](https://docs.knawat.io/#tag/Orders/paths/~1orders/get)
  - [**getOrderById(id)**](https://docs.knawat.io/#tag/Orders/paths/~1orders~1{order_id}/get)
  - [**getOrderWarnings(id)**](https://docs.knawat.io/#tag/Orders/paths/~1orders~1{order_id}~1warnings/get)
  - [**cancelOrder(id)**](https://docs.knawat.io/#tag/Orders/paths/~1orders~1{order_id}/delete)
  - [**payOrder(id)**](https://docs.knawat.io/#tag/Orders/paths/~1orders~1pay~1{order_id}/put)
  - [**createOrder(order)**](https://docs.knawat.io/#tag/Orders/paths/~1orders/post)
  - [**updateOrder(id, order)**](https://docs.knawat.io/#tag/Orders/paths/~1orders~1{order_id}/put)
- Invoices
  - [**getInvoices([params])**](https://docs.knawat.io/#tag/Invoices/paths/~1invoices/get)
  - [**applyCreditsToInvoice(id, data)**](https://docs.knawat.io/#tag/Invoices/paths/~1invoices~1{id}~1credits/post)
- Categories
  - **getAllCategories()**
  - **getCategories([params])**
- Payments
  - **addPayment(storeId, payment)**`[Basic]`
  - [**listPayments([params])**](https://docs.knawat.io/#tag/Payments/paths/~1payments/get)
- Logs `[Basic]`
  - **getStoreLogs([params])**
  - [**createStoreLogs(log)**](https://docs.knawat.io/#tag/Logs/paths/~1logs/post) `[Basic|Bearer]`
- Products `[Basic]`
  - **getProductsByVariationSku(sku)**
  - **getProductBySku(sku[, params])**
- Stores `[Basic]`
  - **listStores([params])**
  - **createStore(store)**
  - **updateStore(id, store)**
  - **getStoreByURL(storeId[, params])**
  - **getStoresByUser(userEmail[, limit])**
- Shipping `[Basic]`
  - **getShippingRules(country, weight, price)**
  - **getShippingCouriers()**
  - **getAllShipmentPolicies()**
  - **createShipmentPolicy(shipment)**
  - **getShipmentPolicyById(id)**
  - **updateShipmentPolicy(id, shipment)**
- Subscriptions `[Basic]`
  - **listSubscriptions([params])**
  - **addSubscription(subscription)**
  - **cancelSubscription(id)**
  - **updateSubscription(id, subscription)**
- Memberships `[Basic]`
  - **listMemberships()**
  - **getMembershipById(id[, params])**
  - **createMembership(membership)**
  - **updateMembership(id, membership)**
- Coupons `[Basic]`
  - **listCoupons([params])**
  - **getCoupon(id[, params])**
  - **createCoupon(coupon)**
  - **updateCoupon(id coupon)**
- Taxes `[Basic]`
  - **getTaxRecords([params])**
  - **createTaxRecord(tax)**
  - **updateTaxRecord(id, tax)**
  - **getTaxById(id)**
  - **deleteTaxRecord(id)**
- (Dev)Zones `[Basic]`
  - **listZones()**
  - **getZoneByID(id)**
  - **getZoneByDomain(domain)**
  - **updateZoneByID(id,[params])**
  - **createZone(zone)**

Note: the methods with the Dev tag is still underdevelopment.

### REST Function

This function is used internally as a wrapper for the library.
An Async function that requests Data from server.

| Params    | Type     | Description                                                                  |
| --------- | -------- | ---------------------------------------------------------------------------- |
| `Method`  | `string` | HTTP Methods for RESTful Services (Get, Put, Post, Patch, Delete)            |
| `Path`    | `string` | WooCommerce API endpoint, example: `catalog/products` or `orders/{order_id}` |
| `options` | `Object` | options { queryParams, auth, body, headers }                                 |

```javascript
mp.$fetch(method, path, (options = {}));
```

Example:

```javascript
mp.$fetch('GET', '/catalog/categories', { auth: 'token' }); // returns object : count and categories array
```

## postman and bearer token.

If you want to test the API on the postman you can get the bearer token by using this following methods:

```javascript
mp.getTokenAuth(); // Async function
mp.getTokenAuth().then(console.log);
```

After that you can use the available methods to test and see the results you got!.

## Reporting Security Issues

To disclose a security issue to our team, [please submit a report here](https://knawat.com/contact/).

## Support & Chat

Developers are welcome here, please create issue or [chat with us https://gitter.im/Knawat/Lobby](https://gitter.im/Knawat/Lobby). This repository is not suitable for Knawat customers support. Please don't use our issue tracker for support requests, but for Knawat Dropshipping NPM Package issues only. Support can take place through [Knawat support portal](https://help.knawat.com/hc/en-us/requests/new/) which is available for free.

Support requests in issues on this repository will be closed on sight.

## Contributing to Knawat

If you have a patch or have stumbled upon an issue with Knawat NPM Package, you can contribute this back to the code. Please create a pull request.

## Check also

- [Knawat RESTful API](https://mp.knawat.io)
- [Knawat PHP SDK](https://github.com/Knawat/Knawat-PHP-SDK)
- [WooCommerce Dropshipping Plugin](https://github.com/Knawat/dropshipping-woocommerce)
- [Magento 2 Module](https://github.com/Knawat/knawat-dropshipping-magento2)
- [OpenCart Module](https://github.com/Knawat/knawat-dropshipping-opencart)
