import { test, expect } from './BaseTest';
import { registrationData, registrationDataTwice, registrationNoData, registrationNonExistingEmail } from '../utils/dataProvider';

test.describe('Registration Tests valid', () => {
    for (const data of registrationData) {
        test(`Register valid user ${data.firstName, data.lastName, data.email, data.password, data.expectedText}`, async ({ registrationPage }) => {
            await registrationPage.navigateToRegistrationPage();
            await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
            await registrationPage.clkRegisterButton();
            await registrationPage.verifyHomePage(data.expectedText)
        });
    }
});

test.describe('Registration test with no data', () => {
    for (const data of registrationNoData) {
        test(`Checking validation messages ${data.firstName, data.lastName, data.email, data.password, data.expectedText}`, async ({registrationPage}) => {
            await registrationPage.navigateToRegistrationPage();
            await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
            await registrationPage.verifyValdationMsg(data.expectedText);
        })
    }
})

test.describe('Registration test non existing email', () => {
    for (const data of registrationNonExistingEmail) {
        test(`Checking validation messages for non existing email ${data.firstName, data.lastName, data.email, data.password, data.expectedText}`, async ({registrationPage}) => {
            await registrationPage.navigateToRegistrationPage();
            await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
            await registrationPage.verifyWrongEmailValidation(data.expectedText)
        })
    }
})

test.describe('Registration test - register twice with the same email address', () => {
    for (const data of registrationDataTwice) {
        test(`Register twice with the same email ${data.firstName, data.lastName, data.email, data.password, data.expectedText, data.expectedUrlRegistration}`, async ({ registrationPage }) => {
            await registrationPage.navigateToRegistrationPage();
            await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
            await registrationPage.clkRegisterButton();
            await registrationPage.verifyHomePage(data.expectedText);
            await registrationPage.clkBackButtonTracker();
            await registrationPage.clkLogOutButton();
            await registrationPage.navigateToRegistrationPage();
            await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
            await registrationPage.clkRegisterButton();
            await registrationPage.verifyToastMessageRegistrationFailed();
            await registrationPage.verifyUrl(data.expectedUrlRegistration);
        });
    }
});