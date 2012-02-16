/*!
 * This is a sample project for codex-hub
 */

/**
 * # Constructor Introduction
 *
 * Can be markdown. Lorem ipsum.
 *
 * ```js
 * // with code blocks
 * function noop () {
 *   return true;
 * }
 * ```
 *
 * ### Set amit.
 */

/*!
 * # Private comment
 *
 * This won't show up in the build.
 *
 * @param {Object} Options
 */

function noop() {
  return true;
}

/**
 * # Constructor
 *
 * This is everything you need to know about the constructor.
 *
 * @name Constructor
 * @param {Object} options
 * @api public
 */

function Constructor () {
  this.isVisible = true;
}

/**
 * ## .someMethod (opts, [callback])
 *
 * Description goes here.
 *
 * @param {Object} options
 * @param {Function} callback
 * @api public
 */

Constructor.prototype.someMethod = function (opts, cb) {
  cb(null, opts);
}
