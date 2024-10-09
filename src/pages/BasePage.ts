import { Page } from '@playwright/test';
import { URLs } from '../utils/urls';

export class BasePage {
    protected readonly page: Page;
    protected readonly baseUrl: string;
    static navigateToBasePage: any;

    private readonly logoutButtonLocator = "div[class='sign-out-container']";
    private readonly modalSignOutButton = "tcommon-button[ng-click='signOut()']";

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = URLs.BASE_URL;
    }

    async navigateToBasePage() {
        await this.page.goto(`${this.baseUrl}`);
    }

    async waitForElement(selector: string, timeout = 50000) {
        await this.page.waitForSelector(selector, { timeout });
    }

    async clickMethod(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
        await this.page.click(selector);
        
    }

    async fill(selector: string, value: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, value);
    }

    async getText(selector: string) {
        await this.waitForElement(selector);
        return await this.page.innerText(selector);
    }

    async isVisible(selector: string) {
        await this.waitForElement(selector);
        return await this.page.isVisible(selector);
    }

    async selectOption(selector: string, value: string) {
        await this.waitForElement(selector);
        await this.page.selectOption(selector, value);
    }

    async getTitle() {
        return await this.page.title();
    }

    async clkLogOutButton() {
        await this.clickMethod(this.logoutButtonLocator);
        await this.clickMethod(this.modalSignOutButton);
        
    }
}

    // These methods are reusable