//
// Copyright (c) Telefonica I+D. All rights reserved.
//
//
/**
 *
 * @type {String}
 */
//exports.redisServers = [{host:'localhost'}, {host:'localhost', port:'6789'}];
exports.redisServers = [{host:'localhost'}];

/**
 *
 * @type {String}
 */
exports.tranRedisServer = 'localhost';

/**
 *
 * @type {Number}
 */
exports.selected_db = 0; //0..15 for   0 ->pre-production 1->test

/**
 *
 * @type {String}
 */
exports.db_key_queue_prefix = 'PB:Q|';

/**
 *
 * @type {String}
 */
exports.dbKeyTransPrefix = 'PB:T|';

/**
 *
 * @type {String}
 */
exports.db_key_blocking_queue_prefix = 'PB:B|';

/**
 *
 * @type {Object}
 */
exports.ev_lsnr = {};

/**
 *
 * @type {String}
 */
exports.ev_lsnr.mongo_host = 'localhost';

/**
 *
 * @type {Number}
 */
exports.ev_lsnr.mongo_port = 27017;

/**
 *
 * @type {String}
 */
exports.ev_lsnr.mongo_db = 'popbox';

/**
 *
 * @type {String}
 */
exports.ev_lsnr.collection = 'popbox_ev';

/**
 *
 * @type {Object}
 */
exports.agent = {};

/**
 * Maximum size of request for provision
 * @type {Number}
 */
exports.agent.max_req_size = '1mb';

/**
 * Maximum number of queues for transaction
 * @type {Number}
 */
exports.agent.max_num_queues = 10000;

/**
 * Maximum payload size
 * @type {Number}
 */
exports.agent.max_payload_size = 1024 * 1024;

/**
 *
 * @type {Number}
 */
exports.agent.max_messages = 1000;

/**
 *
 * @type {Number}
 */
exports.agent.port = 3001;

/**
 * Provision timeout
 * @type {Number} seconds
 */
exports.agent.prov_timeout = 3 * 60;

/**
 * Default pop timeout
 * @type {Number} seconds
 */
exports.agent.pop_timeout = 5;

/**
* Maximum pop timeout
* @type {Number} seconds
*/
exports.agent.max_pop_timeout = 5*60;

/**
* Additional time for the HTTP request (added to pop timeout)
* @type {Number}  seconds
*/
exports.agent.grace_timeout = 60;

/**
 *
 * @type {Object}
 */
exports.cluster= {};

/**
 *
 * @type {Number} number of CPUS to be used in cluster mode (-1 for all)
 */
exports.cluster.numcpus = 1;
