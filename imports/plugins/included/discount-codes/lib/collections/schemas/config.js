import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { DiscountsPackageConfig } from "/imports/plugins/core/discounts/lib/collections/schemas";
import { registerSchema } from "@reactioncommerce/reaction-collections";

/**
 * @file Discount Code - Package configuration schema
 *
 * @module discount-codes
 */

/**
 * Discount Codes Package configuration schema
 * @type {Object}
 * @summary Schema that extends discount schema with properties for discount rates.
*/
export const DiscountCodesPackageConfig = new SimpleSchema([
  DiscountsPackageConfig, {
    "settings.codes": {
      type: Object,
      optional: true
    },
    "settings.codes.enabled": {
      type: Boolean,
      optional: true,
      defaultValue: false
    }
  }
]);

registerSchema("DiscountCodesPackageConfig", DiscountCodesPackageConfig);
