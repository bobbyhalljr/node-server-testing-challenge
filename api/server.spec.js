const request = require('supertest');

const server = require('./server');

describe('GET /', () => {
    test('should return 200 http status code', async () => {
        const response = await request(server).get('/');

        expect(response.status).toBe(200);
    })

    test('should return JSON', async () => {
        const response = await request(server).get('/');

        expect(response.type).toMatch(/json/i);
    })

    test('should return an array of users', async () => {
        const response = await request(server).get('/');

        expect(response.body.users).toEqual(["bobby", "danielle", "milo"])
    })
})