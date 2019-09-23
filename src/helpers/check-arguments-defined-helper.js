'use strict';

/**
 * Throws error if one of arguments is not defined
 * @param {Array} params
 */
export function checkArgumentsDefinedHelper(params) {
  if (params.some((element) => element === undefined)) {
    throw new Error('Wrong argument');
  }
}


