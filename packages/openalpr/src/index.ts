import Debug from 'debug';
import {OpenALPR} from "./OpenALPR";
import defaults from "./defaults";

const debug = Debug('openalpr:main')

/**
 * Create an instance of OpenALPR
 *
 * @param {Object} instanceConfig The default config for the instance
 * @return {OpenALPR} A new instance of OpenALPR
 */
function createInstance(instanceConfig = defaults) {
    debug('Creating an instance...')
    return new OpenALPR(instanceConfig);
}

/**
 * Create the default instance to be exported
 */
const openALPR = createInstance(defaults);

/**
 * Expose OpenALPR class to allow class inheritance
 *
 * @type {OpenALPR}
 */
openALPR.OpenALPR = OpenALPR

/**
 * Factory for creating new instances
 *
 * @param {Object} instanceConfig
 * @return {OpenALPR}
 */
openALPR.create = function create(instanceConfig) {
    debug('Returning the new instance...')
    return createInstance({...defaults, ...instanceConfig})
}

/**
 * Allow use of default import syntax
 */
export default openALPR
