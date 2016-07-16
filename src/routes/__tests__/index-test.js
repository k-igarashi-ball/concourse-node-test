const expect = require('chai').expect;
const request = require('supertest');
const routes = require('../');
describe('Routes', () => {
    context('/', () => {
        it('should return 200', (done) => {
            request(routes)
                .get('/')
                .set('Accept', 'application/json')
                .expect(200, done);
        });
    });
});
