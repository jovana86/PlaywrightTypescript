import { loginData, registrationData } from '@/utils/dataProvider';
import { test, expect } from './BaseTest';

 test.describe('Performance Metrics', () => {

  test('Login page load time', async ({ loginPage }) => {
    const startTime = Date.now();
    await loginPage.navigateToBasePage();
    const loadTime = Date.now() - startTime;
    console.log(`Login page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000); 
  });

  test('Registration page load time', async ({ registrationPage }) => {
    const startTime = Date.now();
    await registrationPage.navigateToRegistrationPage();
    const loadTime = Date.now() - startTime;
    console.log(`Registration page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000);
  });

  test.describe('Login Test with valid data response time', () => {
    for (const data of loginData) {
  test(`Login action response time' ${data.username, data.password}`, async ({ loginPage }) => {
    await loginPage.navigateToBasePage();
    const startTime = Date.now();
    await loginPage.login(data.username, data.password);
    await loginPage.clkLoginButton();
    await loginPage.verifyMyProfileinHomePage();
    const responseTime = Date.now() - startTime;
    console.log(`Login action response time: ${responseTime}ms`);
    expect(responseTime).toBeLessThan(10000);
});
}
})

test.describe('Registration Test with valid data response time', () => {
  for (const data of registrationData) {
test(`Registration action response time' ${data.firstName, data.lastName, data.email, data.password, data.expectedText}`, async ({ registrationPage }) => {
  await registrationPage.navigateToRegistrationPage();
  const startTime = Date.now();
  await registrationPage.register(data.firstName, data.lastName, data.email, data.password);
  await registrationPage.clkRegisterButton();
  await registrationPage.verifyHomePage(data.expectedText);
  const responseTime = Date.now() - startTime;
  console.log(`Login action response time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(10000);
});
}
})
})
