import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { BasePage } from '@/pages/BasePage';

type Pages = {
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
    basePage: BasePage;
};

export const test = base.extend<Pages>({
    page: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.navigateToBasePage();
        await page.context().clearCookies();
        // Set the required cookie before each test
        await page.context().addCookies([
            {
                name: 'interview',
                value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl',
                domain: '.tractive.com',
                path: '/',
                secure: true
                
            },
            {
                name: 'cookie_consent',
                value: 'accepted',
                domain: '.tractive.com',
                path: '/',
                secure: true
            },
            {
                name: 'language',  //for visual tests I had issue that sometimes browser have english and sometimes serbian language
                value: 'en',       
                domain: '.tractive.com',
                path: '/',
                secure: true,
            }
        ]);
        await page.waitForTimeout(1000);  
        await page.reload();
        await use(page);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
});

export { expect } from '@playwright/test';
