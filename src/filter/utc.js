angular.module('coreos.filters').filter('utc', function(_) {
  'use strict';

  function convertToUtc(date) {
    return new Date(date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds());
  }

  return function(input) {
    if (_.isNumber(input)) {
      return convertToUtc(new Date(input));
    }
    if (_.isDate(input)) {
      return convertToUtc(input);
    }
    return '';
  };

});
