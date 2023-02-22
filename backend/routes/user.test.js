process.env.NODE_ENV = 'test';

const request = require('supertest');

const app = require('../app');
const db = require('../db');
const bcrypt = require('bcrypt');
const BCRYPT_WORK_FACTOR = require('../config');
const SECRET_KEY = require('../config');
const jwt = require('jsonwebtoken');

let testUserToken;
let testAdminToken;

beforeEach(async function(){
    const hashedPassword = await bcrypt.hash("secret", BCRYPT_WORK_FACTOR);
    await db.query(`INSER INTO user VALUES ('test', $1)`, [hashedPassword]);
    await db.query(`INSER INTO user VALUES ('admin', $1)`, [hashedPassword]);

    const testUser = { username: 'test' };
    const testAdmin = { username: 'admin' };
    testUserToken = jwt.sign(testUser, SECRET_KEY);
    testAdminToken = jwt.sign(testAdmin, SECRET_KEY);
    
})

afterEach(async function(){
    await db.query("DELETE FROM users");
});

afterAll(async function(){
    await db.end();
})

/** POST user/register - Register new user from data: return `{user: username, firstName, lastName, email, isAdmin}` */
describe("POST user/register", function(){
    test("Register new user", async function(){
        const response = await request(app)
            .post(`/user/register`)
            .send({
                username: "testUser2",
                password: "hello123",
                firstName: "Test",
                lastName: "lastName",
                email: "testuser@user.com",
                isAdmin: false
            });
        
        expect(response.statusCode).toEqual(201);
    });
});
