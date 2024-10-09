import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { test, expect } from '../tests/BaseTest';

test.describe('Visual Regression Tests', () => {
    test('Login page visual regression', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigateToBasePage();
      await expect(page).toHaveScreenshot('visual-regression/__snapshots__/login-page.png', { 
        maxDiffPixels: 100,
        fullPage: true
      });
    });
  
    test('Registration page visual regression', async ({ page }) => {
      const registrationPage = new RegistrationPage(page);
      await registrationPage.navigateToRegistrationPage();
      await expect(page).toHaveScreenshot('visual-regression/__snapshots__/registration-page.png', { 
        maxDiffPixels: 100,
        fullPage: true
      });
    });
});
