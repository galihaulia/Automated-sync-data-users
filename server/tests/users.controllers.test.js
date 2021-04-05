const request = require('supertest');
const app = require('../app');

describe('Login', () => {
    jest.setTimeout(3000);

    test('Login using email', async (done) => {
       const r = await request(app)
       .post('/api/v1/login')
       .send({
           email: 'admin@clev.co.id',
           password: 'superadmin'
       });
       expect(r.statusCode).toBe(200);
       done();
    });
    
    test('Login using nik', async (done) => {
        const r = await request(app)
        .post('/api/v1/login')
        .send({
            idNumber: '123451',
            password: 'superadmin'
        });
        expect(r.statusCode).toBe(200);
        done();
     });

     test('Login with nik & email', async (done) => {
        const r = await request(app)
        .post('/api/v1/login')
        .send({
            email: 'admin@clev.co.id',
            idNumber: '123451',
            password: 'superadmin'
        });
        expect(r.statusCode).toBe(400);
        done();
     });
     
     test('Login without nik/email', async (done) => {
        const r = await request(app)
        .post('/api/v1/login')
        .send({
            password: 'superadmin'
        });
        expect(r.statusCode).toBe(400);
        done();
     });

     test('Login email as nik', async (done) => {
        const r = await request(app)
        .post('/api/v1/login')
        .send({
            idNumber: 'admin@clev.co.id',
            password: 'superadmin'
        });
        expect(r.statusCode).toBe(400);
        done();
     });

     test('Login nik as email', async (done) => {
        const r = await request(app)
        .post('/api/v1/login')
        .send({
            email: '123451',
            password: 'superadmin'
        });
        expect(r.statusCode).toBe(400);
        done();
     });
});



describe('Change Password', () => {
    jest.setTimeout(3000);
    let token = '';

    beforeAll(() => {
        return request(app)
        .post('/api/v1/login')
        .send({
           email: 'admin@clev.co.id',
           password: 'superadmin'
      }).then((r) => {
        token = r.body.data.token;
      });
    });
    
    test('Change password with old_password, password, password_confirmation 1', async (done) => {
        const r  = await request(app)
        .post('/api/v1/change-password')
        .set('Authorization', 'Bearer ' + token)
        .send({
            old_password: 'superadmin',
            password: 'superadmin1',
            password_confirmation: 'superadmin1'
        })
        expect(r.statusCode).toBe(200);
        
        done();
    });

    test('Change password with old_password, password, password_confirmation 2', async (done) => {
        const r  = await request(app)
        .post('/api/v1/change-password')
        .set('Authorization', 'Bearer ' + token)
        .send({
            old_password: 'superadmin1',
            password: 'superadmin',
            password_confirmation: 'superadmin'
        })
        expect(r.statusCode).toBe(200);
        done();
    });

    test('Change password with wrong old_password', async (done) => {
        const r  = await request(app)
        .post('/api/v1/change-password')
        .set('Authorization', 'Bearer ' + token)
        .send({
            old_password: 'superadmin1',
            password: 'superadmin',
            password_confirmation: 'superadmin'
        })
        expect(r.statusCode).toBe(400);
        done();
    });

    test('Change password with wrong password_confirmation', async (done) => {
        const r  = await request(app)
        .post('/api/v1/change-password')
        .set('Authorization', 'Bearer ' + token)
        .send({
            old_password: 'superadmin',
            password: 'superadmin',
            password_confirmation: '1234'
        })
        expect(r.statusCode).toBe(400);
        done();
    });

    test('Change password with weak password', async (done) => {
        const r  = await request(app)
        .post('/api/v1/change-password')
        .set('Authorization', 'Bearer ' + token)
        .send({
            old_password: 'superadmin',
            password: '1234',
            password_confirmation: '1234'
        })
        expect(r.statusCode).toBe(400);
        done();
    });
});