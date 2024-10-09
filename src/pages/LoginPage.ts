import { BasePage } from './BasePage';
import { URLs } from '../utils/urls';
import { expect } from 'playwright/test';

export class LoginPage extends BasePage {
    // Locators
    private readonly usernameInput = "//input[@type='email']";
    private readonly passwordInput = "//input[@type='password']";
    private readonly loginButton = "tcommon-button[type='submit']";
    private readonly headline = "//h1";
    private readonly toastMessageLocator = "#toast-container > div:nth-child(1) > div";
    private readonly myProfileLocator = "tcommon-tile-header[tcommon-title='My Profile']";

    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.clickMethod(this.loginButton);
    }

    async clkLoginButton() {
        await this.clickMethod(this.loginButton);
    }

    async populateUsernameAndPassword(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
    }

    async verifyHomePage(expectedText: string, expectedText1: string) {
        await this.waitForElement(this.headline);
        const actualText = await this.getText(this.headline);
        if (actualText !== expectedText && actualText !== expectedText1) {
            throw new Error(`Expected headline to be "${expectedText1}" or "${expectedText1}", but got "${actualText}"`);
        }
        console.log(`Headline verification passed: ${actualText}`);
    }

    async verifyMyProfileinHomePage() {
        await this.waitForElement(this.myProfileLocator);
         expect(this.page.locator(this.myProfileLocator)).toBeVisible();
    }

    async verifyButtonDisabled() {
        expect(this.page.locator(this.loginButton)).toBeDisabled();      
    }

    async verifyToastMessage() {
        await expect(this.page.locator(this.toastMessageLocator)).toBeVisible();
       // await expect(this.page.locator(this.toastMessageLocator)).toHaveText(messageText); messageText: string couldn't compare the text because it is not visible in html
    } 

    async verifyUrl(expectedUrl: string) {
        const currentUrl = this.page.url();
        expect(currentUrl).toBe(expectedUrl);
    }
}
