const randomEmail = 'usuario' + Math.floor(Math.random() * 1000) + '@gmail.com'
describe('API Test - Get All Products List', () => {
    it('API1 - Deve retornar a lista de todos os produtos com status 200', () => {
        cy.request('GET', '/api/productsList')
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)

                expect(parsedResponse).to.have.property('products');
                expect(parsedResponse.products).to.be.an('array');

                for (const product of parsedResponse.products) {
                    expect(product).to.have.property('id');
                    expect(product).to.have.property('name');
                    expect(product).to.have.property('price');
                    expect(product).to.have.property('brand');
                    expect(product).to.have.property('category');
                    expect(product.category).to.have.property('usertype');
                    expect(product.category.usertype).to.have.property('usertype');
                    expect(product.category).to.have.property('category');
                }
            })
    });

    it('API2 - Deve retornar erro 405 ao tentar fazer um POST na lista de produtos', () => {
        cy.request({
            method: 'POST',
            url: '/api/productsList',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(405);
                expect(parsedResponse.message).to.eq('This request method is not supported.');
            })
    })

    it('API3 - Deve retornar a lista de todas as marcas com status 200', () => {
        cy.request('GET', '/api/brandsList')
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)

                expect(parsedResponse).to.have.property('brands');
                expect(parsedResponse.brands).to.be.an('array');

                for (const brand of parsedResponse.brands) {
                    expect(brand).to.have.property('id');
                    expect(brand).to.have.property('brand');
                }
            })
    });

    it('API4 - Deve retornar erro 405 ao tentar fazer um PUT na lista de marcas', () => {
        cy.request({
            method: 'PUT',
            url: '/api/brandsList',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(405);
                expect(parsedResponse.message).to.eq('This request method is not supported.');
            })
    })

    it('API5 - Deve retornar a lista de produtos filtrados com status 200', () => {
        cy.request({
            method: 'POST',
            url: '/api/searchProduct',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ search_product: 'top' }).toString()
        }).then((response) => {
            expect(response.status).to.eq(200);

            const parsedResponse = JSON.parse(response.body)

            expect(parsedResponse).to.have.property('products');
            expect(parsedResponse.products).to.be.an('array');

            for (const product of parsedResponse.products) {
                expect(product).to.have.property('id');
                expect(product).to.have.property('name');
                expect(product).to.have.property('price');
                expect(product).to.have.property('brand');
                expect(product).to.have.property('category');
                expect(product.category).to.have.property('usertype');
                expect(product.category).to.have.property('category');
            }
        })
    });

    it('API6 - Deve retornar erro 400 ao tentar fazer um POST na lista de produtos sem o parametro search_product', () => {
        cy.request({
            method: 'POST',
            url: '/api/searchProduct',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(400);
                expect(parsedResponse.message).to.eq('Bad request, search_product parameter is missing in POST request.');
            })
    })

    it('API7 - Deve retornar mensagem de sucesso ao tentar fazer login com email e senha válidos', () => {
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                email: 'admin@admin',
                password: 'admin'
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(200);
                expect(parsedResponse.message).to.eq('User exists!');
            })
    })

    it('API8 - Deve retornar erro 400 ao tentar fazer login sem o parametro email', () => {
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ password: 'admin' }).toString(),
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(400);
                expect(parsedResponse.message).to.eq('Bad request, email or password parameter is missing in POST request.');
            })
    })

    it('API9 - Deve retornar erro 405 ao tentar fazer um DELETE na verificação de login', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/verifyLogin',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(405);
                expect(parsedResponse.message).to.eq('This request method is not supported.');
            })
    })

    it('API10 - Deve retornar mensagem de erro ao tentar fazer login com email e senha inválidos', () => {
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                email: 'admin@admin',
                password: 'admin123'
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(404);
                expect(parsedResponse.message).to.eq('User not found!');
            })
    })

    it('API11 - Deve retornar mensagem de sucesso ao tentar criar uma conta com os dados válidos', () => {
        cy.request({
            method: 'POST',
            url: '/api/createAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                name: 'Teste',
                email: randomEmail,
                password: 'teste',
                title: 'Mr',
                birth_date: '01',
                birth_month: '01',
                birth_year: '2000',
                firstname: 'Teste',
                lastname: 'Teste',
                company: 'Teste',
                address1: 'Teste',
                address2: 'Teste',
                country: 'Teste',
                zipcode: '12345',
                state: 'Teste',
                city: 'Teste',
                mobile_number: '123456789'
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(201);
                expect(parsedResponse.message).to.eq('User created!');
            })
    })

    it('API12 - Deve retornar mensagem de sucesso ao tentar deletar uma conta com email e senha válidos', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/deleteAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                email: randomEmail,
                password: 'teste'
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(200);
                expect(parsedResponse.message).to.eq('Account deleted!');
            })
    })

    it('API13 - Deve retornar mensagem de sucesso ao tentar atualizar uma conta com os dados válidos', () => {
        cy.request({
            method: 'PUT',
            url: '/api/updateAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                name: 'Teste',
                email: randomEmail,
                password: 'teste',
                title: 'Mr',
                birth_date: '01',
                birth_month: '01',
                birth_year: '2000',
                firstname: 'Teste',
                lastname: 'Teste',
                company: 'Teste',
                address1: 'Teste',
                address2: 'Teste',
                country: 'Teste',
                zipcode: '12345',
                state: 'Teste',
                city: 'Teste',
                mobile_number: '123456789'
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(200);
                expect(parsedResponse.message).to.eq('User updated!');
            })
    })

    it('API14 - Deve retornar os detalhes da conta do usuário com email válido', () => {
        cy.request({
            method: 'GET',
            url: '/api/getUserDetailByEmail',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                email: randomEmail
            }).toString()
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                const parsedResponse = JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.eq(200);
                expect(parsedResponse.message).to.eq('User Detail');
            })
    })
})