/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ClearProperty class.
 * @constructor
 * Clear an existing property.
 *
 */
function ClearProperty() {
  ClearProperty['super_'].call(this);
}

util.inherits(ClearProperty, models['CustomProperty']);

/**
 * Defines the metadata of ClearProperty
 *
 * @returns {object} metadata of ClearProperty
 *
 */
ClearProperty.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'clear',
    type: {
      name: 'Composite',
      className: 'ClearProperty',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          constraints: {
            MaxLength: 128,
            Pattern: '^[a-zA-Z][a-zA-Z0-9\-_]*$'
          },
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ClearProperty;
