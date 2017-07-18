const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
    // nightmare = new Nightmare({show: true})
  })

  describe('basic', () => {
    it('should work', done => {
      assert.equal(1, 1)
      done()
    })
  })

  describe('google loads', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare
        .goto('http://google.com')
        .end()
        .then(result => { done() })
        .catch(done)
    })
  })
  describe('gethoodie loads', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare
        .goto('http://gethoodie.com')
        .end()
        .then(result => { done() })
        .catch(done)
    })
  })

  // describe('load operator console login page', () => {
  //   it('should load without error', done => {
  //     // your actual testing urls will likely be `http://localhost:port/path`
  //     nightmare
  //       .goto('http://10.238.41.200/operatorconsole_portlet/standalone_login.jsp')
  //       .end()
  //       .then(result => { done() })
  //       .catch(done)
  //   })
  // })
  // describe('sign in to login page', () => {
  //   it('should work without error', done => {
  //     nightmare
  //       .goto('http://10.238.41.200/operatorconsole_portlet/standalone_login.jsp')
  //       .type('#usrname', 'administrator')
  //       .type('#pswd', 'password')
  //       .click('.submit')
  //       .wait('#root')
  //       .end()
  //       .then(result => { done() })
  //       .catch(done)
  //   })
  // })
  // describe('intial page load', () => {
  //   it('should have a title bar logo', done => {
  //     nightmare
  //       .goto('http://10.238.41.200/operatorconsole_portlet/standalone_login.jsp')
  //       .type('#usrname', 'administrator')
  //       .type('#pswd', 'password')
  //       .click('.submit')
  //       .wait('.titlebarheader__logo')
  //       .exists('.titlebarheader__logo')
  //       .end()
  //       .then(result => {
  //         assert.ok(result)
  //         done()
  //       })
  //       .catch(done)
  //   })
  //   it('should have a primary nav', done => {
  //     nightmare
  //       .goto('http://10.238.41.200/operatorconsole_portlet/standalone_login.jsp')
  //       .type('#usrname', 'administrator')
  //       .type('#pswd', 'password')
  //       .click('.submit')
  //       .wait('.nav--primary')
  //       .exists('.nav--primary')
  //       .end()
  //       .then(result => {
  //         assert.ok(result)
  //         done()
  //       })
  //       .catch(done)
  //   })
  // })
})