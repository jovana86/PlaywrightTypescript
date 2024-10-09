import { test, expect } from './BaseTest';
import { e2eData} from '../utils/dataProvider';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

test.describe('End-to-End Authentication Test', () => {
    for (const data of e2eData) {
    test(`Register and Login User ${data.firstName, data.lastName, data.email, data.password, data.expectedText}`, async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        const loginPage = new LoginPage(page);

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
        await registrationPage.clkRegisterButton();
        await registrationPage.verifyHomePage(data.expectedText);
        await registrationPage.clkBackButtonTracker();

        await loginPage.clkLogOutButton();

        await loginPage.navigateToBasePage();
        await loginPage.login(data.email, data.password);
        await loginPage.clkLoginButton();
        await loginPage.verifyMyProfileinHomePage();
    });
}
});