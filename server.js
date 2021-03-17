const express = require("express");
const { company } = require("faker");
const faker = require("faker");

const app = express();
const port = 8000;

class User{
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    newUser = new User();
    res.json({ user: newUser });
});

app.get("/api/companies/new", (req, res) => {
    newCompany = new Company();
    res.json({ company : newCompany });
});

app.get("/api/user/company", (req, res) => {
    newCompany = new Company();
    newUser = new User();
    res.json({
        company: newCompany,
        user: newUser
    })
});
app.listen(port, () => console.log(`Listening on port ${port}`));

