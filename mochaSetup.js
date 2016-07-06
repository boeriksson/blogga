const sinon = require('sinon');
const chai = require('chai');

chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));
chai.use(require('chai-enzyme')());

const jsdom = require('jsdom');

const document = jsdom.jsdom();
const window = document.defaultView;

Object.assign(global, {
  sinon,
  expect: chai.expect,
  window,
  document
});

/**
 * Now we should attach some properties
 * of [window] object to [global] in
 * order to use them as usual, without "window." prefix.
 * Only now because we assign some of them in <setupPolyfills.js>
 */

Object.assign(
  global,
  ['navigator', 'location', 'CustomEvent', 'Event', 'fetch']
    .reduce((res, key) => Object.assign({}, res, { [key]: global.window[key] }), {})
);
