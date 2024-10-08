
import { en, Faker, pt_BR } from '@faker-js/faker';
const fakerBr = new Faker({ locale: [pt_BR] });
const faker = new Faker({ locale: [en] });

export class User {
    fakeNome: string;
    fakeEmail: string;
    fakePassword: string;
    fakeDay: string;
    fakeMonth: string;
    fakeYear: string;
    firstName: string;
    lastName: string;
    companyName: string;
    address: string;
    city: string;
    state: string;
    mobileNumber: string;
    zipCode: string;
    country: string;
    gender: string;
    cardNumber: string;
    cardType: string;
    cardExpirationDate: Date;
    cardCVC: string;

    constructor() {
        const fakeNome = fakerBr.person.fullName();
        const fakeEmail = fakerBr.internet.email();
        const fakePassword = fakerBr.internet.password();
        const fakeDay = (1 + Math.floor(Math.random() * 30)).toString();
        const fakeMonth = faker.date.month();
        const fakeYear = (1970 + Math.floor(Math.random() * 50)).toString();
        const firstName = fakerBr.person.firstName();
        const lastName = fakerBr.person.lastName();
        const companyName = fakerBr.company.name();
        const mobileNumber = fakerBr.phone.number();
        const address = faker.location.streetAddress();
        const city = fakerBr.location.city();
        const state = fakerBr.location.state();
        const country = fakerBr.location.country();
        const zipCode = fakerBr.location.zipCode();
        const cardNumber = faker.finance.creditCardNumber();
        const cardType = faker.finance.creditCardIssuer();
        const cardExpirationDate = faker.date.future();
        const cardCVC = faker.finance.creditCardCVV();

        this.fakeNome = fakeNome,
            this.fakeEmail = fakeEmail,
            this.fakePassword = fakePassword,
            this.fakeDay = fakeDay,
            this.fakeMonth = fakeMonth,
            this.fakeYear = fakeYear,
            this.firstName = firstName,
            this.lastName = lastName,
            this.companyName = companyName,
            this.address = address,
            this.city = city,
            this.state = state,
            this.mobileNumber = mobileNumber,
            this.zipCode = zipCode,
            this.country = 'Australia',
            this.gender = 'Mr',
            this.cardNumber = cardNumber,
            this.cardType = cardType,
            this.cardExpirationDate = cardExpirationDate,
            this.cardCVC = cardCVC
    }
}