import { test } from './BaseTest';
import { loginData, loginDataEmpty, loginDataInvalidEmail, loginDataInvalidPass } from '../utils/dataProvider';

test.describe('Login Test with valid data', () => {
    for (const data of loginData) {
        test(`Successful Log in: ${data.username, data.password}`, async ({ loginPage }) => {
            await loginPage.navigateToBasePage();
            await loginPage.login(data.username, data.password);
            await loginPage.verifyMyProfileinHomePage();
        });
    }
});

test.describe('Login Test with no data', () => {
    for (const data of loginDataEmpty) {
        test(`Attempting to log in with empty credentials: ${data.username, data.password}`, async ({ loginPage }) => {
            await loginPage.navigateToBasePage();
            await loginPage.populateUsernameAndPassword(data.username, data.password);
             loginPage.verifyButtonDisabled;
        });
    }
}
);

test.describe('Login with invalid password', () => {
    for (const data of loginDataInvalidPass) {
        test(`Log in with valid email address and invalid password: ${data.username, data.password, data.expectedUrl}`, async ({loginPage}) => {
            await loginPage.navigateToBasePage();
            await loginPage.populateUsernameAndPassword(data.username, data.password);
            await loginPage.clkLoginButton();
            await loginPage.verifyToastMessage();
            await loginPage.verifyUrl(data.expectedUrl);
        })
    }
})

test.describe('Login with invalid email', () => {
    for (const data of loginDataInvalidEmail) {
        test(`Log in with wrong email address and valid password: ${data.username, data.password, data.expectedUrl}`, async ({loginPage}) => {
            await loginPage.navigateToBasePage();
            await loginPage.populateUsernameAndPassword(data.username, data.password);
            await loginPage.clkLoginButton();
            await loginPage.verifyToastMessage();
            await loginPage.verifyUrl(data.expectedUrl);
        })
    }
})