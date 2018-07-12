'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["axios"] = factory();else root["axios"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(1);

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var bind = __webpack_require__(3);
			var Axios = __webpack_require__(5);
			var defaults = __webpack_require__(6);

			/**
    * Create an instance of Axios
    *
    * @param {Object} defaultConfig The default config for the instance
    * @return {Axios} A new instance of Axios
    */
			function createInstance(defaultConfig) {
				var context = new Axios(defaultConfig);
				var instance = bind(Axios.prototype.request, context);

				// Copy axios.prototype to instance
				utils.extend(instance, Axios.prototype, context);

				// Copy context to instance
				utils.extend(instance, context);

				return instance;
			}

			// Create the default instance to be exported
			var axios = createInstance(defaults);

			// Expose Axios class to allow class inheritance
			axios.Axios = Axios;

			// Factory for creating new instances
			axios.create = function create(instanceConfig) {
				return createInstance(utils.merge(defaults, instanceConfig));
			};

			// Expose Cancel & CancelToken
			axios.Cancel = __webpack_require__(23);
			axios.CancelToken = __webpack_require__(24);
			axios.isCancel = __webpack_require__(20);

			// Expose all/spread
			axios.all = function all(promises) {
				return Promise.all(promises);
			};
			axios.spread = __webpack_require__(25);

			module.exports = axios;

			// Allow use of default import syntax in TypeScript
			module.exports.default = axios;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var bind = __webpack_require__(3);
			var isBuffer = __webpack_require__(4);

			/*global toString:true*/

			// utils is a library of generic helper functions non-specific to axios

			var toString = Object.prototype.toString;

			/**
    * Determine if a value is an Array
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Array, otherwise false
    */
			function isArray(val) {
				return toString.call(val) === '[object Array]';
			}

			/**
    * Determine if a value is an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an ArrayBuffer, otherwise false
    */
			function isArrayBuffer(val) {
				return toString.call(val) === '[object ArrayBuffer]';
			}

			/**
    * Determine if a value is a FormData
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an FormData, otherwise false
    */
			function isFormData(val) {
				return typeof FormData !== 'undefined' && val instanceof FormData;
			}

			/**
    * Determine if a value is a view on an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
    */
			function isArrayBufferView(val) {
				var result;
				if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
					result = ArrayBuffer.isView(val);
				} else {
					result = val && val.buffer && val.buffer instanceof ArrayBuffer;
				}
				return result;
			}

			/**
    * Determine if a value is a String
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a String, otherwise false
    */
			function isString(val) {
				return typeof val === 'string';
			}

			/**
    * Determine if a value is a Number
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Number, otherwise false
    */
			function isNumber(val) {
				return typeof val === 'number';
			}

			/**
    * Determine if a value is undefined
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if the value is undefined, otherwise false
    */
			function isUndefined(val) {
				return typeof val === 'undefined';
			}

			/**
    * Determine if a value is an Object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Object, otherwise false
    */
			function isObject(val) {
				return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
			}

			/**
    * Determine if a value is a Date
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Date, otherwise false
    */
			function isDate(val) {
				return toString.call(val) === '[object Date]';
			}

			/**
    * Determine if a value is a File
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a File, otherwise false
    */
			function isFile(val) {
				return toString.call(val) === '[object File]';
			}

			/**
    * Determine if a value is a Blob
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Blob, otherwise false
    */
			function isBlob(val) {
				return toString.call(val) === '[object Blob]';
			}

			/**
    * Determine if a value is a Function
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Function, otherwise false
    */
			function isFunction(val) {
				return toString.call(val) === '[object Function]';
			}

			/**
    * Determine if a value is a Stream
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Stream, otherwise false
    */
			function isStream(val) {
				return isObject(val) && isFunction(val.pipe);
			}

			/**
    * Determine if a value is a URLSearchParams object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a URLSearchParams object, otherwise false
    */
			function isURLSearchParams(val) {
				return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
			}

			/**
    * Trim excess whitespace off the beginning and end of a string
    *
    * @param {String} str The String to trim
    * @returns {String} The String freed of excess whitespace
    */
			function trim(str) {
				return str.replace(/^\s*/, '').replace(/\s*$/, '');
			}

			/**
    * Determine if we're running in a standard browser environment
    *
    * This allows axios to run in a web worker, and react-native.
    * Both environments support XMLHttpRequest, but not fully standard globals.
    *
    * web workers:
    *  typeof window -> undefined
    *  typeof document -> undefined
    *
    * react-native:
    *  navigator.product -> 'ReactNative'
    */
			function isStandardBrowserEnv() {
				if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
					return false;
				}
				return typeof window !== 'undefined' && typeof document !== 'undefined';
			}

			/**
    * Iterate over an Array or an Object invoking a function for each item.
    *
    * If `obj` is an Array callback will be called passing
    * the value, index, and complete array for each item.
    *
    * If 'obj' is an Object callback will be called passing
    * the value, key, and complete object for each property.
    *
    * @param {Object|Array} obj The object to iterate
    * @param {Function} fn The callback to invoke for each item
    */
			function forEach(obj, fn) {
				// Don't bother if no value provided
				if (obj === null || typeof obj === 'undefined') {
					return;
				}

				// Force an array if not already something iterable
				if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
					/*eslint no-param-reassign:0*/
					obj = [obj];
				}

				if (isArray(obj)) {
					// Iterate over array values
					for (var i = 0, l = obj.length; i < l; i++) {
						fn.call(null, obj[i], i, obj);
					}
				} else {
					// Iterate over object keys
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) {
							fn.call(null, obj[key], key, obj);
						}
					}
				}
			}

			/**
    * Accepts varargs expecting each argument to be an object, then
    * immutably merges the properties of each object and returns result.
    *
    * When multiple objects contain the same key the later object in
    * the arguments list will take precedence.
    *
    * Example:
    *
    * ```js
    * var result = merge({foo: 123}, {foo: 456});
    * console.log(result.foo); // outputs 456
    * ```
    *
    * @param {Object} obj1 Object to merge
    * @returns {Object} Result of all merge properties
    */
			function merge() /* obj1, obj2, obj3, ... */{
				var result = {};
				function assignValue(val, key) {
					if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
						result[key] = merge(result[key], val);
					} else {
						result[key] = val;
					}
				}

				for (var i = 0, l = arguments.length; i < l; i++) {
					forEach(arguments[i], assignValue);
				}
				return result;
			}

			/**
    * Extends object a by mutably adding to it the properties of object b.
    *
    * @param {Object} a The object to be extended
    * @param {Object} b The object to copy properties from
    * @param {Object} thisArg The object to bind function to
    * @return {Object} The resulting value of object a
    */
			function extend(a, b, thisArg) {
				forEach(b, function assignValue(val, key) {
					if (thisArg && typeof val === 'function') {
						a[key] = bind(val, thisArg);
					} else {
						a[key] = val;
					}
				});
				return a;
			}

			module.exports = {
				isArray: isArray,
				isArrayBuffer: isArrayBuffer,
				isBuffer: isBuffer,
				isFormData: isFormData,
				isArrayBufferView: isArrayBufferView,
				isString: isString,
				isNumber: isNumber,
				isObject: isObject,
				isUndefined: isUndefined,
				isDate: isDate,
				isFile: isFile,
				isBlob: isBlob,
				isFunction: isFunction,
				isStream: isStream,
				isURLSearchParams: isURLSearchParams,
				isStandardBrowserEnv: isStandardBrowserEnv,
				forEach: forEach,
				merge: merge,
				extend: extend,
				trim: trim
			};

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			'use strict';

			module.exports = function bind(fn, thisArg) {
				return function wrap() {
					var args = new Array(arguments.length);
					for (var i = 0; i < args.length; i++) {
						args[i] = arguments[i];
					}
					return fn.apply(thisArg, args);
				};
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			/*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <https://feross.org>
    * @license  MIT
    */

			// The _isBuffer check is for Safari 5-7 support, because it's missing
			// Object.prototype.constructor. Remove this eventually
			module.exports = function (obj) {
				return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
			};

			function isBuffer(obj) {
				return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
			}

			// For Node v0.10 support. Remove this eventually.
			function isSlowBuffer(obj) {
				return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
			}

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var defaults = __webpack_require__(6);
			var utils = __webpack_require__(2);
			var InterceptorManager = __webpack_require__(17);
			var dispatchRequest = __webpack_require__(18);

			/**
    * Create a new instance of Axios
    *
    * @param {Object} instanceConfig The default config for the instance
    */
			function Axios(instanceConfig) {
				this.defaults = instanceConfig;
				this.interceptors = {
					request: new InterceptorManager(),
					response: new InterceptorManager()
				};
			}

			/**
    * Dispatch a request
    *
    * @param {Object} config The config specific for this request (merged with this.defaults)
    */
			Axios.prototype.request = function request(config) {
				/*eslint no-param-reassign:0*/
				// Allow for axios('example/url'[, config]) a la fetch API
				if (typeof config === 'string') {
					config = utils.merge({
						url: arguments[0]
					}, arguments[1]);
				}

				config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
				config.method = config.method.toLowerCase();

				// Hook up interceptors middleware
				var chain = [dispatchRequest, undefined];
				var promise = Promise.resolve(config);

				this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
					chain.unshift(interceptor.fulfilled, interceptor.rejected);
				});

				this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
					chain.push(interceptor.fulfilled, interceptor.rejected);
				});

				while (chain.length) {
					promise = promise.then(chain.shift(), chain.shift());
				}

				return promise;
			};

			// Provide aliases for supported request methods
			utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
				/*eslint func-names:0*/
				Axios.prototype[method] = function (url, config) {
					return this.request(utils.merge(config || {}, {
						method: method,
						url: url
					}));
				};
			});

			utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
				/*eslint func-names:0*/
				Axios.prototype[method] = function (url, data, config) {
					return this.request(utils.merge(config || {}, {
						method: method,
						url: url,
						data: data
					}));
				};
			});

			module.exports = Axios;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var normalizeHeaderName = __webpack_require__(7);

			var DEFAULT_CONTENT_TYPE = {
				'Content-Type': 'application/x-www-form-urlencoded'
			};

			function setContentTypeIfUnset(headers, value) {
				if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
					headers['Content-Type'] = value;
				}
			}

			function getDefaultAdapter() {
				var adapter;
				if (typeof XMLHttpRequest !== 'undefined') {
					// For browsers use XHR adapter
					adapter = __webpack_require__(8);
				} else if (typeof process !== 'undefined') {
					// For node use HTTP adapter
					adapter = __webpack_require__(8);
				}
				return adapter;
			}

			var defaults = {
				adapter: getDefaultAdapter(),

				transformRequest: [function transformRequest(data, headers) {
					normalizeHeaderName(headers, 'Content-Type');
					if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
						return data;
					}
					if (utils.isArrayBufferView(data)) {
						return data.buffer;
					}
					if (utils.isURLSearchParams(data)) {
						setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
						return data.toString();
					}
					if (utils.isObject(data)) {
						setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
						return JSON.stringify(data);
					}
					return data;
				}],

				transformResponse: [function transformResponse(data) {
					/*eslint no-param-reassign:0*/
					if (typeof data === 'string') {
						try {
							data = JSON.parse(data);
						} catch (e) {/* Ignore */}
					}
					return data;
				}],

				/**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
				timeout: 0,

				xsrfCookieName: 'XSRF-TOKEN',
				xsrfHeaderName: 'X-XSRF-TOKEN',

				maxContentLength: -1,

				validateStatus: function validateStatus(status) {
					return status >= 200 && status < 300;
				}
			};

			defaults.headers = {
				common: {
					'Accept': 'application/json, text/plain, */*'
				}
			};

			utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
				defaults.headers[method] = {};
			});

			utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
				defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
			});

			module.exports = defaults;

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = function normalizeHeaderName(headers, normalizedName) {
				utils.forEach(headers, function processHeader(value, name) {
					if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
						headers[normalizedName] = value;
						delete headers[name];
					}
				});
			};

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var settle = __webpack_require__(9);
			var buildURL = __webpack_require__(12);
			var parseHeaders = __webpack_require__(13);
			var isURLSameOrigin = __webpack_require__(14);
			var createError = __webpack_require__(10);
			var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(15);

			module.exports = function xhrAdapter(config) {
				return new Promise(function dispatchXhrRequest(resolve, reject) {
					var requestData = config.data;
					var requestHeaders = config.headers;

					if (utils.isFormData(requestData)) {
						delete requestHeaders['Content-Type']; // Let the browser set it
					}

					var request = new XMLHttpRequest();
					var loadEvent = 'onreadystatechange';
					var xDomain = false;

					// For IE 8/9 CORS support
					// Only supports POST and GET calls and doesn't returns the response headers.
					// DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
					if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
						request = new window.XDomainRequest();
						loadEvent = 'onload';
						xDomain = true;
						request.onprogress = function handleProgress() {};
						request.ontimeout = function handleTimeout() {};
					}

					// HTTP basic authentication
					if (config.auth) {
						var username = config.auth.username || '';
						var password = config.auth.password || '';
						requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
					}

					request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

					// Set the request timeout in MS
					request.timeout = config.timeout;

					// Listen for ready state
					request[loadEvent] = function handleLoad() {
						if (!request || request.readyState !== 4 && !xDomain) {
							return;
						}

						// The request errored out and we didn't get a response, this will be
						// handled by onerror instead
						// With one exception: request that using file: protocol, most browsers
						// will return status as 0 even though it's a successful request
						if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
							return;
						}

						// Prepare the response
						var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
						var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
						var response = {
							data: responseData,
							// IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
							status: request.status === 1223 ? 204 : request.status,
							statusText: request.status === 1223 ? 'No Content' : request.statusText,
							headers: responseHeaders,
							config: config,
							request: request
						};

						settle(resolve, reject, response);

						// Clean up request
						request = null;
					};

					// Handle low level network errors
					request.onerror = function handleError() {
						// Real errors are hidden from us by the browser
						// onerror should only fire if it's a network error
						reject(createError('Network Error', config, null, request));

						// Clean up request
						request = null;
					};

					// Handle timeout
					request.ontimeout = function handleTimeout() {
						reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

						// Clean up request
						request = null;
					};

					// Add xsrf header
					// This is only done if running in a standard browser environment.
					// Specifically not if we're in a web worker, or react-native.
					if (utils.isStandardBrowserEnv()) {
						var cookies = __webpack_require__(16);

						// Add xsrf header
						var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

						if (xsrfValue) {
							requestHeaders[config.xsrfHeaderName] = xsrfValue;
						}
					}

					// Add headers to the request
					if ('setRequestHeader' in request) {
						utils.forEach(requestHeaders, function setRequestHeader(val, key) {
							if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
								// Remove Content-Type if data is undefined
								delete requestHeaders[key];
							} else {
								// Otherwise add header to the request
								request.setRequestHeader(key, val);
							}
						});
					}

					// Add withCredentials to request if needed
					if (config.withCredentials) {
						request.withCredentials = true;
					}

					// Add responseType to request if needed
					if (config.responseType) {
						try {
							request.responseType = config.responseType;
						} catch (e) {
							// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
							// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
							if (config.responseType !== 'json') {
								throw e;
							}
						}
					}

					// Handle progress if needed
					if (typeof config.onDownloadProgress === 'function') {
						request.addEventListener('progress', config.onDownloadProgress);
					}

					// Not all browsers support upload events
					if (typeof config.onUploadProgress === 'function' && request.upload) {
						request.upload.addEventListener('progress', config.onUploadProgress);
					}

					if (config.cancelToken) {
						// Handle cancellation
						config.cancelToken.promise.then(function onCanceled(cancel) {
							if (!request) {
								return;
							}

							request.abort();
							reject(cancel);
							// Clean up request
							request = null;
						});
					}

					if (requestData === undefined) {
						requestData = null;
					}

					// Send the request
					request.send(requestData);
				});
			};

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var createError = __webpack_require__(10);

			/**
    * Resolve or reject a Promise based on response status.
    *
    * @param {Function} resolve A function that resolves the promise.
    * @param {Function} reject A function that rejects the promise.
    * @param {object} response The response.
    */
			module.exports = function settle(resolve, reject, response) {
				var validateStatus = response.config.validateStatus;
				// Note: status is not exposed by XDomainRequest
				if (!response.status || !validateStatus || validateStatus(response.status)) {
					resolve(response);
				} else {
					reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
				}
			};

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var enhanceError = __webpack_require__(11);

			/**
    * Create an Error with the specified message, config, error code, request and response.
    *
    * @param {string} message The error message.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The created error.
    */
			module.exports = function createError(message, config, code, request, response) {
				var error = new Error(message);
				return enhanceError(error, config, code, request, response);
			};

			/***/
		},
		/* 11 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Update an Error with the specified config, error code, and response.
    *
    * @param {Error} error The error to update.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The error.
    */

			module.exports = function enhanceError(error, config, code, request, response) {
				error.config = config;
				if (code) {
					error.code = code;
				}
				error.request = request;
				error.response = response;
				return error;
			};

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			function encode(val) {
				return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
			}

			/**
    * Build a URL by appending params to the end
    *
    * @param {string} url The base of the url (e.g., http://www.google.com)
    * @param {object} [params] The params to be appended
    * @returns {string} The formatted url
    */
			module.exports = function buildURL(url, params, paramsSerializer) {
				/*eslint no-param-reassign:0*/
				if (!params) {
					return url;
				}

				var serializedParams;
				if (paramsSerializer) {
					serializedParams = paramsSerializer(params);
				} else if (utils.isURLSearchParams(params)) {
					serializedParams = params.toString();
				} else {
					var parts = [];

					utils.forEach(params, function serialize(val, key) {
						if (val === null || typeof val === 'undefined') {
							return;
						}

						if (utils.isArray(val)) {
							key = key + '[]';
						} else {
							val = [val];
						}

						utils.forEach(val, function parseValue(v) {
							if (utils.isDate(v)) {
								v = v.toISOString();
							} else if (utils.isObject(v)) {
								v = JSON.stringify(v);
							}
							parts.push(encode(key) + '=' + encode(v));
						});
					});

					serializedParams = parts.join('&');
				}

				if (serializedParams) {
					url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
				}

				return url;
			};

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			// Headers whose duplicates are ignored by node
			// c.f. https://nodejs.org/api/http.html#http_message_headers
			var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

			/**
    * Parse headers into an object
    *
    * ```
    * Date: Wed, 27 Aug 2014 08:58:49 GMT
    * Content-Type: application/json
    * Connection: keep-alive
    * Transfer-Encoding: chunked
    * ```
    *
    * @param {String} headers Headers needing to be parsed
    * @returns {Object} Headers parsed into an object
    */
			module.exports = function parseHeaders(headers) {
				var parsed = {};
				var key;
				var val;
				var i;

				if (!headers) {
					return parsed;
				}

				utils.forEach(headers.split('\n'), function parser(line) {
					i = line.indexOf(':');
					key = utils.trim(line.substr(0, i)).toLowerCase();
					val = utils.trim(line.substr(i + 1));

					if (key) {
						if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
							return;
						}
						if (key === 'set-cookie') {
							parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
						} else {
							parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
						}
					}
				});

				return parsed;
			};

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = utils.isStandardBrowserEnv() ?

			// Standard browser envs have full support of the APIs needed to test
			// whether the request URL is of the same origin as current location.
			function standardBrowserEnv() {
				var msie = /(msie|trident)/i.test(navigator.userAgent);
				var urlParsingNode = document.createElement('a');
				var originURL;

				/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
				function resolveURL(url) {
					var href = url;

					if (msie) {
						// IE needs attribute set twice to normalize properties
						urlParsingNode.setAttribute('href', href);
						href = urlParsingNode.href;
					}

					urlParsingNode.setAttribute('href', href);

					// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
					return {
						href: urlParsingNode.href,
						protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
						host: urlParsingNode.host,
						search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
						hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
						hostname: urlParsingNode.hostname,
						port: urlParsingNode.port,
						pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
					};
				}

				originURL = resolveURL(window.location.href);

				/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
				return function isURLSameOrigin(requestURL) {
					var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
					return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
				};
			}() :

			// Non standard browser envs (web workers, react-native) lack needed support.
			function nonStandardBrowserEnv() {
				return function isURLSameOrigin() {
					return true;
				};
			}();

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

			var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

			function E() {
				this.message = 'String contains an invalid character';
			}
			E.prototype = new Error();
			E.prototype.code = 5;
			E.prototype.name = 'InvalidCharacterError';

			function btoa(input) {
				var str = String(input);
				var output = '';
				for (
				// initialize result and counter
				var block, charCode, idx = 0, map = chars;
				// if the next str index does not exist:
				//   change the mapping table to "="
				//   check if d has no fractional digits
				str.charAt(idx | 0) || (map = '=', idx % 1);
				// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
				output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
					charCode = str.charCodeAt(idx += 3 / 4);
					if (charCode > 0xFF) {
						throw new E();
					}
					block = block << 8 | charCode;
				}
				return output;
			}

			module.exports = btoa;

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = utils.isStandardBrowserEnv() ?

			// Standard browser envs support document.cookie
			function standardBrowserEnv() {
				return {
					write: function write(name, value, expires, path, domain, secure) {
						var cookie = [];
						cookie.push(name + '=' + encodeURIComponent(value));

						if (utils.isNumber(expires)) {
							cookie.push('expires=' + new Date(expires).toGMTString());
						}

						if (utils.isString(path)) {
							cookie.push('path=' + path);
						}

						if (utils.isString(domain)) {
							cookie.push('domain=' + domain);
						}

						if (secure === true) {
							cookie.push('secure');
						}

						document.cookie = cookie.join('; ');
					},

					read: function read(name) {
						var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
						return match ? decodeURIComponent(match[3]) : null;
					},

					remove: function remove(name) {
						this.write(name, '', Date.now() - 86400000);
					}
				};
			}() :

			// Non standard browser env (web workers, react-native) lack needed support.
			function nonStandardBrowserEnv() {
				return {
					write: function write() {},
					read: function read() {
						return null;
					},
					remove: function remove() {}
				};
			}();

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			function InterceptorManager() {
				this.handlers = [];
			}

			/**
    * Add a new interceptor to the stack
    *
    * @param {Function} fulfilled The function to handle `then` for a `Promise`
    * @param {Function} rejected The function to handle `reject` for a `Promise`
    *
    * @return {Number} An ID used to remove interceptor later
    */
			InterceptorManager.prototype.use = function use(fulfilled, rejected) {
				this.handlers.push({
					fulfilled: fulfilled,
					rejected: rejected
				});
				return this.handlers.length - 1;
			};

			/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
			InterceptorManager.prototype.eject = function eject(id) {
				if (this.handlers[id]) {
					this.handlers[id] = null;
				}
			};

			/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
			InterceptorManager.prototype.forEach = function forEach(fn) {
				utils.forEach(this.handlers, function forEachHandler(h) {
					if (h !== null) {
						fn(h);
					}
				});
			};

			module.exports = InterceptorManager;

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var transformData = __webpack_require__(19);
			var isCancel = __webpack_require__(20);
			var defaults = __webpack_require__(6);
			var isAbsoluteURL = __webpack_require__(21);
			var combineURLs = __webpack_require__(22);

			/**
    * Throws a `Cancel` if cancellation has been requested.
    */
			function throwIfCancellationRequested(config) {
				if (config.cancelToken) {
					config.cancelToken.throwIfRequested();
				}
			}

			/**
    * Dispatch a request to the server using the configured adapter.
    *
    * @param {object} config The config that is to be used for the request
    * @returns {Promise} The Promise to be fulfilled
    */
			module.exports = function dispatchRequest(config) {
				throwIfCancellationRequested(config);

				// Support baseURL config
				if (config.baseURL && !isAbsoluteURL(config.url)) {
					config.url = combineURLs(config.baseURL, config.url);
				}

				// Ensure headers exist
				config.headers = config.headers || {};

				// Transform request data
				config.data = transformData(config.data, config.headers, config.transformRequest);

				// Flatten headers
				config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

				utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
					delete config.headers[method];
				});

				var adapter = config.adapter || defaults.adapter;

				return adapter(config).then(function onAdapterResolution(response) {
					throwIfCancellationRequested(config);

					// Transform response data
					response.data = transformData(response.data, response.headers, config.transformResponse);

					return response;
				}, function onAdapterRejection(reason) {
					if (!isCancel(reason)) {
						throwIfCancellationRequested(config);

						// Transform response data
						if (reason && reason.response) {
							reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
						}
					}

					return Promise.reject(reason);
				});
			};

			/***/
		},
		/* 19 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			/**
    * Transform the data for a request or a response
    *
    * @param {Object|String} data The data to be transformed
    * @param {Array} headers The headers for the request or response
    * @param {Array|Function} fns A single function or Array of functions
    * @returns {*} The resulting transformed data
    */
			module.exports = function transformData(data, headers, fns) {
				/*eslint no-param-reassign:0*/
				utils.forEach(fns, function transform(fn) {
					data = fn(data, headers);
				});

				return data;
			};

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			'use strict';

			module.exports = function isCancel(value) {
				return !!(value && value.__CANCEL__);
			};

			/***/
		},
		/* 21 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Determines whether the specified URL is absolute
    *
    * @param {string} url The URL to test
    * @returns {boolean} True if the specified URL is absolute, otherwise false
    */

			module.exports = function isAbsoluteURL(url) {
				// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
				// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
				// by any combination of letters, digits, plus, period, or hyphen.
				return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
				);
			};

			/***/
		},
		/* 22 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Creates a new URL by combining the specified URLs
    *
    * @param {string} baseURL The base URL
    * @param {string} relativeURL The relative URL
    * @returns {string} The combined URL
    */

			module.exports = function combineURLs(baseURL, relativeURL) {
				return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
			};

			/***/
		},
		/* 23 */
		/***/function (module, exports) {

			'use strict';

			/**
    * A `Cancel` is an object that is thrown when an operation is canceled.
    *
    * @class
    * @param {string=} message The message.
    */

			function Cancel(message) {
				this.message = message;
			}

			Cancel.prototype.toString = function toString() {
				return 'Cancel' + (this.message ? ': ' + this.message : '');
			};

			Cancel.prototype.__CANCEL__ = true;

			module.exports = Cancel;

			/***/
		},
		/* 24 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var Cancel = __webpack_require__(23);

			/**
    * A `CancelToken` is an object that can be used to request cancellation of an operation.
    *
    * @class
    * @param {Function} executor The executor function.
    */
			function CancelToken(executor) {
				if (typeof executor !== 'function') {
					throw new TypeError('executor must be a function.');
				}

				var resolvePromise;
				this.promise = new Promise(function promiseExecutor(resolve) {
					resolvePromise = resolve;
				});

				var token = this;
				executor(function cancel(message) {
					if (token.reason) {
						// Cancellation has already been requested
						return;
					}

					token.reason = new Cancel(message);
					resolvePromise(token.reason);
				});
			}

			/**
    * Throws a `Cancel` if cancellation has been requested.
    */
			CancelToken.prototype.throwIfRequested = function throwIfRequested() {
				if (this.reason) {
					throw this.reason;
				}
			};

			/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
			CancelToken.source = function source() {
				var cancel;
				var token = new CancelToken(function executor(c) {
					cancel = c;
				});
				return {
					token: token,
					cancel: cancel
				};
			};

			module.exports = CancelToken;

			/***/
		},
		/* 25 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Syntactic sugar for invoking a function and expanding an array for arguments.
    *
    * Common use case would be to use `Function.prototype.apply`.
    *
    *  ```js
    *  function f(x, y, z) {}
    *  var args = [1, 2, 3];
    *  f.apply(null, args);
    *  ```
    *
    * With `spread` this example can be re-written.
    *
    *  ```js
    *  spread(function(x, y, z) {})([1, 2, 3]);
    *  ```
    *
    * @param {Function} callback
    * @returns {Function}
    */

			module.exports = function spread(callback) {
				return function wrap(arr) {
					return callback.apply(null, arr);
				};
			};

			/***/
		}]
		/******/)
	);
});
;
//# sourceMappingURL=axios.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9ib3dlcl9jb21wb25lbnRzL2F4aW9zL2Rpc3QvYXhpb3MuanMiXSwibmFtZXMiOlsid2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsInV0aWxzIiwiYmluZCIsIkF4aW9zIiwiZGVmYXVsdHMiLCJjcmVhdGVJbnN0YW5jZSIsImRlZmF1bHRDb25maWciLCJjb250ZXh0IiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJyZXF1ZXN0IiwiZXh0ZW5kIiwiYXhpb3MiLCJjcmVhdGUiLCJpbnN0YW5jZUNvbmZpZyIsIm1lcmdlIiwiQ2FuY2VsIiwiQ2FuY2VsVG9rZW4iLCJpc0NhbmNlbCIsImFsbCIsInByb21pc2VzIiwiUHJvbWlzZSIsInNwcmVhZCIsImRlZmF1bHQiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwiaXNBcnJheSIsInZhbCIsImlzQXJyYXlCdWZmZXIiLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc0FycmF5QnVmZmVyVmlldyIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiYnVmZmVyIiwiaXNTdHJpbmciLCJpc051bWJlciIsImlzVW5kZWZpbmVkIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0Z1bmN0aW9uIiwiaXNTdHJlYW0iLCJwaXBlIiwiaXNVUkxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0cmltIiwic3RyIiwicmVwbGFjZSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwibmF2aWdhdG9yIiwicHJvZHVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwiZm9yRWFjaCIsIm9iaiIsImZuIiwiaSIsImwiLCJsZW5ndGgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnblZhbHVlIiwiYXJndW1lbnRzIiwiYSIsImIiLCJ0aGlzQXJnIiwid3JhcCIsImFyZ3MiLCJBcnJheSIsImFwcGx5IiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwiY29uc3RydWN0b3IiLCJyZWFkRmxvYXRMRSIsInNsaWNlIiwiSW50ZXJjZXB0b3JNYW5hZ2VyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJjb25maWciLCJ1cmwiLCJtZXRob2QiLCJ0b0xvd2VyQ2FzZSIsImNoYWluIiwidW5kZWZpbmVkIiwicHJvbWlzZSIsInJlc29sdmUiLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwidW5zaGlmdCIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzIiwicHVzaCIsInRoZW4iLCJzaGlmdCIsImZvckVhY2hNZXRob2ROb0RhdGEiLCJmb3JFYWNoTWV0aG9kV2l0aERhdGEiLCJkYXRhIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwiaGVhZGVycyIsInZhbHVlIiwiZ2V0RGVmYXVsdEFkYXB0ZXIiLCJhZGFwdGVyIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm9jZXNzIiwidHJhbnNmb3JtUmVxdWVzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInBhcnNlIiwiZSIsInRpbWVvdXQiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwibWF4Q29udGVudExlbmd0aCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiY29tbW9uIiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwibmFtZSIsInRvVXBwZXJDYXNlIiwic2V0dGxlIiwiYnVpbGRVUkwiLCJwYXJzZUhlYWRlcnMiLCJpc1VSTFNhbWVPcmlnaW4iLCJjcmVhdGVFcnJvciIsImJ0b2EiLCJ4aHJBZGFwdGVyIiwiZGlzcGF0Y2hYaHJSZXF1ZXN0IiwicmVqZWN0IiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsImxvYWRFdmVudCIsInhEb21haW4iLCJYRG9tYWluUmVxdWVzdCIsIm9ucHJvZ3Jlc3MiLCJoYW5kbGVQcm9ncmVzcyIsIm9udGltZW91dCIsImhhbmRsZVRpbWVvdXQiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJvcGVuIiwicGFyYW1zIiwicGFyYW1zU2VyaWFsaXplciIsImhhbmRsZUxvYWQiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2VVUkwiLCJpbmRleE9mIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJoYW5kbGVFcnJvciIsImNvb2tpZXMiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZWFkIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsVG9rZW4iLCJvbkNhbmNlbGVkIiwiY2FuY2VsIiwiYWJvcnQiLCJzZW5kIiwiZW5oYW5jZUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJlcnJvciIsIkVycm9yIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSIsInYiLCJ0b0lTT1N0cmluZyIsImpvaW4iLCJpZ25vcmVEdXBsaWNhdGVPZiIsInBhcnNlZCIsInNwbGl0IiwicGFyc2VyIiwibGluZSIsInN1YnN0ciIsImNvbmNhdCIsInN0YW5kYXJkQnJvd3NlckVudiIsIm1zaWUiLCJ0ZXN0IiwidXNlckFnZW50IiwidXJsUGFyc2luZ05vZGUiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ2luVVJMIiwicmVzb2x2ZVVSTCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJwcm90b2NvbCIsImhvc3QiLCJzZWFyY2giLCJoYXNoIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJjaGFyQXQiLCJsb2NhdGlvbiIsInJlcXVlc3RVUkwiLCJub25TdGFuZGFyZEJyb3dzZXJFbnYiLCJjaGFycyIsIkUiLCJpbnB1dCIsIlN0cmluZyIsIm91dHB1dCIsImJsb2NrIiwiY2hhckNvZGUiLCJpZHgiLCJtYXAiLCJjaGFyQ29kZUF0Iiwid3JpdGUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsImNvb2tpZSIsIkRhdGUiLCJ0b0dNVFN0cmluZyIsIm1hdGNoIiwiUmVnRXhwIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwibm93IiwiaGFuZGxlcnMiLCJ1c2UiLCJlamVjdCIsImZvckVhY2hIYW5kbGVyIiwiaCIsInRyYW5zZm9ybURhdGEiLCJpc0Fic29sdXRlVVJMIiwiY29tYmluZVVSTHMiLCJ0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwidGhyb3dJZlJlcXVlc3RlZCIsImJhc2VVUkwiLCJjbGVhbkhlYWRlckNvbmZpZyIsIm9uQWRhcHRlclJlc29sdXRpb24iLCJvbkFkYXB0ZXJSZWplY3Rpb24iLCJyZWFzb24iLCJmbnMiLCJ0cmFuc2Zvcm0iLCJfX0NBTkNFTF9fIiwicmVsYXRpdmVVUkwiLCJleGVjdXRvciIsIlR5cGVFcnJvciIsInJlc29sdmVQcm9taXNlIiwicHJvbWlzZUV4ZWN1dG9yIiwidG9rZW4iLCJzb3VyY2UiLCJjYWxsYmFjayIsImFyciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsQ0FBQyxTQUFTQSxnQ0FBVCxDQUEwQ0MsSUFBMUMsRUFBZ0RDLE9BQWhELEVBQXlEO0FBQ3pELEtBQUcsUUFBT0MsT0FB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QTtBQUNEOztBQUVEUyxXQUFNVCxNQUFOLEdBQWUsSUFBSW5QLE1BQUosQ0FBV3FLLE9BQVgsQ0FBZjtBQUNBcUYsb0JBQWVFLE1BQU1ULE1BQXJCO0FBQ0QsS0FSRDtBQVNEOztBQUVEOzs7QUFHQWxQLGVBQVlSLFNBQVosQ0FBc0JxUCxnQkFBdEIsR0FBeUMsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDbkUsUUFBSSxLQUFLSyxNQUFULEVBQWlCO0FBQ2YsV0FBTSxLQUFLQSxNQUFYO0FBQ0Q7QUFDRixJQUpEOztBQU1BOzs7O0FBSUFsUCxlQUFZNFAsTUFBWixHQUFxQixTQUFTQSxNQUFULEdBQWtCO0FBQ3JDLFFBQUk1RixNQUFKO0FBQ0EsUUFBSTJGLFFBQVEsSUFBSTNQLFdBQUosQ0FBZ0IsU0FBU3VQLFFBQVQsQ0FBa0J6USxDQUFsQixFQUFxQjtBQUMvQ2tMLGNBQVNsTCxDQUFUO0FBQ0QsS0FGVyxDQUFaO0FBR0EsV0FBTztBQUNMNlEsWUFBT0EsS0FERjtBQUVMM0YsYUFBUUE7QUFGSCxLQUFQO0FBSUQsSUFURDs7QUFXQTdMLFVBQU9ELE9BQVAsR0FBaUI4QixXQUFqQjs7QUFHRDtBQUFPLEdBeCtDRztBQXkrQ1Y7QUFDQSxPQUFPLFVBQVM3QixNQUFULEVBQWlCRCxPQUFqQixFQUEwQjs7QUFFaEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQUMsVUFBT0QsT0FBUCxHQUFpQixTQUFTbUMsTUFBVCxDQUFnQndQLFFBQWhCLEVBQTBCO0FBQ3pDLFdBQU8sU0FBU3hNLElBQVQsQ0FBY3lNLEdBQWQsRUFBbUI7QUFDeEIsWUFBT0QsU0FBU3JNLEtBQVQsQ0FBZSxJQUFmLEVBQXFCc00sR0FBckIsQ0FBUDtBQUNELEtBRkQ7QUFHRCxJQUpEOztBQU9EO0FBQU8sR0F6Z0RHO0FBMGdEVixVQXBqRGdCO0FBQWhCO0FBcWpEQyxDQS9qREQ7QUFna0RBO0FBQ0EiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBheGlvcyB2MC4xOC4wIHwgKGMpIDIwMTggYnkgTWF0dCBaYWJyaXNraWUgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF4aW9zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF4aW9zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBBeGlvcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG5cdCAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuXHQgIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuXHQgIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXHRcblx0ICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuXHQgIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblx0XG5cdCAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG5cdCAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblx0XG5cdCAgcmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cdFxuXHQvLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcblx0dmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXHRcblx0Ly8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5cdGF4aW9zLkF4aW9zID0gQXhpb3M7XG5cdFxuXHQvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5cdGF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuXHQgIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcblx0fTtcblx0XG5cdC8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuXHRheGlvcy5DYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblx0YXhpb3MuQ2FuY2VsVG9rZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0YXhpb3MuaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblx0XG5cdC8vIEV4cG9zZSBhbGwvc3ByZWFkXG5cdGF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuXHQgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cdH07XG5cdGF4aW9zLnNwcmVhZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblx0XG5cdC8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxuXHRtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIgaXNCdWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0LypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cdFxuXHQvLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXHRcblx0dmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG5cdCAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG5cdCAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuXHQgIHZhciByZXN1bHQ7XG5cdCAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuXHQgICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc051bWJlcih2YWwpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcblx0ICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG5cdCAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcblx0ICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcblx0ICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2Vcblx0ICovXG5cdGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG5cdCAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuXHQgKlxuXHQgKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuXHQgKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG5cdCAqXG5cdCAqIHdlYiB3b3JrZXJzOlxuXHQgKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcblx0ICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcblx0ICpcblx0ICogcmVhY3QtbmF0aXZlOlxuXHQgKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuXHQgKi9cblx0ZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG5cdCAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIHJldHVybiAoXG5cdCAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHQgICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXHQgICk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cblx0ICpcblx0ICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuXHQgKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cblx0ICpcblx0ICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3Npbmdcblx0ICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuXHQgKi9cblx0ZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG5cdCAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG5cdCAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0XG5cdCAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG5cdCAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG5cdCAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICAgIG9iaiA9IFtvYmpdO1xuXHQgIH1cblx0XG5cdCAgaWYgKGlzQXJyYXkob2JqKSkge1xuXHQgICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuXHQgICAgfVxuXHQgIH0gZWxzZSB7XG5cdCAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcblx0ICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcblx0ICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG5cdCAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuXHQgKlxuXHQgKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuXHQgKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG5cdCAqXG5cdCAqIEV4YW1wbGU6XG5cdCAqXG5cdCAqIGBgYGpzXG5cdCAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcblx0ICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2Vcblx0ICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG5cdCAqL1xuXHRmdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcblx0ICB2YXIgcmVzdWx0ID0ge307XG5cdCAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcblx0ICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXN1bHRba2V5XSA9IHZhbDtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cblx0ICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG5cdCAqL1xuXHRmdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuXHQgIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcblx0ICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgYVtrZXldID0gdmFsO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIHJldHVybiBhO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBpc0FycmF5OiBpc0FycmF5LFxuXHQgIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG5cdCAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuXHQgIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG5cdCAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuXHQgIGlzU3RyaW5nOiBpc1N0cmluZyxcblx0ICBpc051bWJlcjogaXNOdW1iZXIsXG5cdCAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuXHQgIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcblx0ICBpc0RhdGU6IGlzRGF0ZSxcblx0ICBpc0ZpbGU6IGlzRmlsZSxcblx0ICBpc0Jsb2I6IGlzQmxvYixcblx0ICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuXHQgIGlzU3RyZWFtOiBpc1N0cmVhbSxcblx0ICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG5cdCAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuXHQgIGZvckVhY2g6IGZvckVhY2gsXG5cdCAgbWVyZ2U6IG1lcmdlLFxuXHQgIGV4dGVuZDogZXh0ZW5kLFxuXHQgIHRyaW06IHRyaW1cblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcblx0ICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG5cdCAgfTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiFcblx0ICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuXHQgKlxuXHQgKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuXHQgKiBAbGljZW5zZSAgTUlUXG5cdCAqL1xuXHRcblx0Ly8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuXHQvLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG5cdH1cblx0XG5cdGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcblx0ICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxuXHR9XG5cdFxuXHQvLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuXHRmdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuXHQgIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxuXHR9XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIEludGVyY2VwdG9yTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHR2YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuXHQgKi9cblx0ZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcblx0ICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG5cdCAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG5cdCAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG5cdCAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG5cdCAgfTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGEgcmVxdWVzdFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcblx0ICovXG5cdEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcblx0ICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG5cdCAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG5cdCAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG5cdCAgICAgIHVybDogYXJndW1lbnRzWzBdXG5cdCAgICB9LCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0XG5cdCAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblx0ICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXHRcblx0ICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG5cdCAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcblx0ICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXHRcblx0ICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcblx0ICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG5cdCAgfSk7XG5cdFxuXHQgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG5cdCAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuXHQgIH0pO1xuXHRcblx0ICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG5cdCAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIHByb21pc2U7XG5cdH07XG5cdFxuXHQvLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcblx0dXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG5cdCAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblx0ICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuXHQgICAgICBtZXRob2Q6IG1ldGhvZCxcblx0ICAgICAgdXJsOiB1cmxcblx0ICAgIH0pKTtcblx0ICB9O1xuXHR9KTtcblx0XG5cdHV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG5cdCAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblx0ICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuXHQgICAgICBtZXRob2Q6IG1ldGhvZCxcblx0ICAgICAgdXJsOiB1cmwsXG5cdCAgICAgIGRhdGE6IGRhdGFcblx0ICAgIH0pKTtcblx0ICB9O1xuXHR9KTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0dmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuXHQgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG5cdCAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcblx0ICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcblx0ICB2YXIgYWRhcHRlcjtcblx0ICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuXHQgICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcblx0ICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHQgIH1cblx0ICByZXR1cm4gYWRhcHRlcjtcblx0fVxuXHRcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cdFxuXHQgIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcblx0ICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXHQgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcblx0ICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcblx0ICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG5cdCAgICApIHtcblx0ICAgICAgcmV0dXJuIGRhdGE7XG5cdCAgICB9XG5cdCAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcblx0ICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuXHQgICAgfVxuXHQgICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG5cdCAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcblx0ICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcblx0ICAgIH1cblx0ICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuXHQgICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuXHQgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XSxcblx0XG5cdCAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG5cdCAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblx0ICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfV0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuXHQgICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG5cdCAgICovXG5cdCAgdGltZW91dDogMCxcblx0XG5cdCAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcblx0ICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cdFxuXHQgIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXHRcblx0ICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG5cdCAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG5cdCAgfVxuXHR9O1xuXHRcblx0ZGVmYXVsdHMuaGVhZGVycyA9IHtcblx0ICBjb21tb246IHtcblx0ICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuXHQgIH1cblx0fTtcblx0XG5cdHV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcblx0ICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcblx0fSk7XG5cdFxuXHR1dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuXHQgIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcblx0fSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcblx0ICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcblx0ICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcblx0ICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcblx0ICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIHNldHRsZSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgcGFyc2VIZWFkZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdHZhciBpc1VSTFNhbWVPcmlnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0dmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdHZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG5cdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuXHQgICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cdFxuXHQgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG5cdCAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcblx0ICAgIH1cblx0XG5cdCAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHQgICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuXHQgICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblx0XG5cdCAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuXHQgICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cblx0ICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuXHQgICAgaWYgKChcInByb2R1Y3Rpb25cIikgIT09ICd0ZXN0JyAmJlxuXHQgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdCAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcblx0ICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG5cdCAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG5cdCAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuXHQgICAgICB4RG9tYWluID0gdHJ1ZTtcblx0ICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcblx0ICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuXHQgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG5cdCAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuXHQgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcblx0ICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcblx0ICAgIH1cblx0XG5cdCAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXHRcblx0ICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cdCAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblx0XG5cdCAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cdCAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuXHQgICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuXHQgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuXHQgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuXHQgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cdCAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2Vcblx0ICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuXHQgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuXHQgICAgICB2YXIgcmVzcG9uc2UgPSB7XG5cdCAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuXHQgICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuXHQgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcblx0ICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcblx0ICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdCAgICAgICAgY29uZmlnOiBjb25maWcsXG5cdCAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXHRcblx0ICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXHQgICAgICByZXF1ZXN0ID0gbnVsbDtcblx0ICAgIH07XG5cdFxuXHQgICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuXHQgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG5cdCAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuXHQgICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3Jcblx0ICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cdFxuXHQgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgfTtcblx0XG5cdCAgICAvLyBIYW5kbGUgdGltZW91dFxuXHQgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuXHQgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcblx0ICAgICAgICByZXF1ZXN0KSk7XG5cdFxuXHQgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgfTtcblx0XG5cdCAgICAvLyBBZGQgeHNyZiBoZWFkZXJcblx0ICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuXHQgICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblx0ICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG5cdCAgICAgIHZhciBjb29raWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHQgICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcblx0ICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cblx0ICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcblx0ICAgICAgICAgIHVuZGVmaW5lZDtcblx0XG5cdCAgICAgIGlmICh4c3JmVmFsdWUpIHtcblx0ICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3Rcblx0ICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuXHQgICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG5cdCAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG5cdCAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3Rcblx0ICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cdCAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuXHQgICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXHQgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG5cdCAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cblx0ICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG5cdCAgICAgICAgICB0aHJvdyBlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcblx0ICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuXHQgICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG5cdCAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcblx0ICAgICAgICBpZiAoIXJlcXVlc3QpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcblx0ICAgICAgICByZWplY3QoY2FuY2VsKTtcblx0ICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgICAgcmVxdWVzdCA9IG51bGw7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG5cdCAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuXHQgIH0pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0LyoqXG5cdCAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG5cdCAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuXHQgIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuXHQgIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG5cdCAgICByZXNvbHZlKHJlc3BvbnNlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuXHQgICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuXHQgICAgICByZXNwb25zZS5jb25maWcsXG5cdCAgICAgIG51bGwsXG5cdCAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG5cdCAgICAgIHJlc3BvbnNlXG5cdCAgICApKTtcblx0ICB9XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBlbmhhbmNlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuXHQgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0ICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG5cdCAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuXHQgIGlmIChjb2RlKSB7XG5cdCAgICBlcnJvci5jb2RlID0gY29kZTtcblx0ICB9XG5cdCAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG5cdCAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcblx0ICByZXR1cm4gZXJyb3I7XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRmdW5jdGlvbiBlbmNvZGUodmFsKSB7XG5cdCAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuXHQgICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuXHQgICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuXHQgICAgcmVwbGFjZSgvJTI0L2csICckJykuXG5cdCAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG5cdCAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cblx0ICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cblx0ICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcblx0ICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcblx0ICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICBpZiAoIXBhcmFtcykge1xuXHQgICAgcmV0dXJuIHVybDtcblx0ICB9XG5cdFxuXHQgIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuXHQgIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG5cdCAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuXHQgIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuXHQgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB2YXIgcGFydHMgPSBbXTtcblx0XG5cdCAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG5cdCAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcblx0ICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhbCA9IFt2YWxdO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG5cdCAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuXHQgICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG5cdCAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuXHQgICAgICB9KTtcblx0ICAgIH0pO1xuXHRcblx0ICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG5cdCAgfVxuXHRcblx0ICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuXHQgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIHVybDtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdC8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG5cdC8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcblx0dmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuXHQgICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG5cdCAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuXHQgICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcblx0ICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXHRdO1xuXHRcblx0LyoqXG5cdCAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3Rcblx0ICpcblx0ICogYGBgXG5cdCAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG5cdCAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuXHQgKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG5cdCAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG5cdCAgdmFyIHBhcnNlZCA9IHt9O1xuXHQgIHZhciBrZXk7XG5cdCAgdmFyIHZhbDtcblx0ICB2YXIgaTtcblx0XG5cdCAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblx0XG5cdCAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcblx0ICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcblx0ICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG5cdCAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cdFxuXHQgICAgaWYgKGtleSkge1xuXHQgICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG5cdCAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9KTtcblx0XG5cdCAgcmV0dXJuIHBhcnNlZDtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gKFxuXHQgIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXHRcblx0ICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcblx0ICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cblx0ICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHQgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHQgICAgdmFyIG9yaWdpblVSTDtcblx0XG5cdCAgICAvKipcblx0ICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG5cdCAgICAqXG5cdCAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcblx0ICAgICogQHJldHVybnMge09iamVjdH1cblx0ICAgICovXG5cdCAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuXHQgICAgICB2YXIgaHJlZiA9IHVybDtcblx0XG5cdCAgICAgIGlmIChtc2llKSB7XG5cdCAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuXHQgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXHQgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblx0XG5cdCAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuXHQgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG5cdCAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcblx0ICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG5cdCAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcblx0ICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG5cdCAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcblx0ICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG5cdCAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcblx0ICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcblx0ICAgICAgfTtcblx0ICAgIH1cblx0XG5cdCAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0XG5cdCAgICAvKipcblx0ICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cblx0ICAgICpcblx0ICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG5cdCAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2Vcblx0ICAgICovXG5cdCAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcblx0ICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcblx0ICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuXHQgICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuXHQgICAgfTtcblx0ICB9KSgpIDpcblx0XG5cdCAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cblx0ICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgIH0pKClcblx0KTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Ly8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cdFxuXHR2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXHRcblx0ZnVuY3Rpb24gRSgpIHtcblx0ICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcblx0fVxuXHRFLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcblx0RS5wcm90b3R5cGUuY29kZSA9IDU7XG5cdEUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblx0XG5cdGZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcblx0ICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcblx0ICB2YXIgb3V0cHV0ID0gJyc7XG5cdCAgZm9yIChcblx0ICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG5cdCAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcblx0ICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcblx0ICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG5cdCAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG5cdCAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuXHQgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcblx0ICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuXHQgICkge1xuXHQgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuXHQgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuXHQgICAgICB0aHJvdyBuZXcgRSgpO1xuXHQgICAgfVxuXHQgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG5cdCAgfVxuXHQgIHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gKFxuXHQgIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXHRcblx0ICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcblx0ICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuXHQgICAgICAgIHZhciBjb29raWUgPSBbXTtcblx0ICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cdFxuXHQgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuXHQgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG5cdCAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuXHQgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcblx0ICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuXHQgICAgICB9LFxuXHRcblx0ICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG5cdCAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcblx0ICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuXHQgICAgICB9LFxuXHRcblx0ICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuXHQgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgfSkoKSA6XG5cdFxuXHQgIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cblx0ICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG5cdCAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuXHQgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG5cdCAgICB9O1xuXHQgIH0pKClcblx0KTtcblxuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdGZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcblx0ICB0aGlzLmhhbmRsZXJzID0gW107XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcblx0ICpcblx0ICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuXHQgKi9cblx0SW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuXHQgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG5cdCAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcblx0ICAgIHJlamVjdGVkOiByZWplY3RlZFxuXHQgIH0pO1xuXHQgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG5cdH07XG5cdFxuXHQvKipcblx0ICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuXHQgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuXHQgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuXHQgIH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuXHQgKlxuXHQgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuXHQgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3Jcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcblx0ICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcblx0ICAgIGlmIChoICE9PSBudWxsKSB7XG5cdCAgICAgIGZuKGgpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciB0cmFuc2Zvcm1EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdHZhciBpc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHR2YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXHR2YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblx0XG5cdC8qKlxuXHQgKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcblx0ICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG5cdCAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuXHQgIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuXHQgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuXHQgIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuXHQgICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblx0ICB9XG5cdFxuXHQgIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG5cdCAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblx0XG5cdCAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuXHQgIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcblx0ICAgIGNvbmZpZy5kYXRhLFxuXHQgICAgY29uZmlnLmhlYWRlcnMsXG5cdCAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuXHQgICk7XG5cdFxuXHQgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuXHQgIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG5cdCAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG5cdCAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcblx0ICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG5cdCAgKTtcblx0XG5cdCAgdXRpbHMuZm9yRWFjaChcblx0ICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuXHQgICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG5cdCAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuXHQgICAgfVxuXHQgICk7XG5cdFxuXHQgIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblx0XG5cdCAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcblx0ICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXHQgICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG5cdCAgICAgIHJlc3BvbnNlLmRhdGEsXG5cdCAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG5cdCAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuXHQgICAgKTtcblx0XG5cdCAgICByZXR1cm4gcmVzcG9uc2U7XG5cdCAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuXHQgICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG5cdCAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cdCAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG5cdCAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuXHQgICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG5cdCAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcblx0ICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuXHQgICAgICAgICk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcblx0ICB9KTtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdC8qKlxuXHQgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuXHQgKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuXHQgKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG5cdCAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcblx0ICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG5cdCAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG5cdCAgfSk7XG5cdFxuXHQgIHJldHVybiBkYXRhO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG5cdCAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcblx0ICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG5cdCAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG5cdCAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG5cdCAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuXHQgIHJldHVybiByZWxhdGl2ZVVSTFxuXHQgICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcblx0ICAgIDogYmFzZVVSTDtcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcblx0ICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG5cdFxuXHRDYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG5cdH07XG5cdFxuXHRDYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblx0XG5cdC8qKlxuXHQgKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcblx0ICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG5cdCAgfVxuXHRcblx0ICB2YXIgcmVzb2x2ZVByb21pc2U7XG5cdCAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcblx0ICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcblx0ICB9KTtcblx0XG5cdCAgdmFyIHRva2VuID0gdGhpcztcblx0ICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuXHQgICAgaWYgKHRva2VuLnJlYXNvbikge1xuXHQgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHRcblx0ICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG5cdCAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuXHQgIH0pO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cblx0ICovXG5cdENhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcblx0ICBpZiAodGhpcy5yZWFzb24pIHtcblx0ICAgIHRocm93IHRoaXMucmVhc29uO1xuXHQgIH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG5cdCAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG5cdCAqL1xuXHRDYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG5cdCAgdmFyIGNhbmNlbDtcblx0ICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuXHQgICAgY2FuY2VsID0gYztcblx0ICB9KTtcblx0ICByZXR1cm4ge1xuXHQgICAgdG9rZW46IHRva2VuLFxuXHQgICAgY2FuY2VsOiBjYW5jZWxcblx0ICB9O1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG5cdCAqXG5cdCAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG5cdCAqXG5cdCAqICBgYGBqc1xuXHQgKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuXHQgKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG5cdCAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHQgKiAgYGBgXG5cdCAqXG5cdCAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuXHQgKlxuXHQgKiAgYGBganNcblx0ICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcblx0ICogIGBgYFxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259XG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuXHQgIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuXHQgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG5cdCAgfTtcblx0fTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXhpb3MubWFwIl19