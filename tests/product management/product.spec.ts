import { test, expect } from '@playwright/test'

test("open company url is done", async ({ page: page }) => {

    await page.goto("/");
    await page.waitForTimeout(6000)
    await page.getByPlaceholder('Enter your work email').fill('tanishkapatil295@gmail.com')
    await page.locator('input[name="password"]').fill('Rishi@123')
    await page.getByLabel('Terms and Conditions').click()
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.locator('div').filter({ hasText: /^Product Management$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Add Products' }).click();
    await page.locator('#RAW').check();
    await page.locator('.css-19bb58m').first().click();
    await page.locator('#react-select-2-input').fill('Hellotest');
    await page.getByRole('option', { name: 'Hellotest' }).click();
    await page.locator('.css-1pys1u9-control > .css-hlgwow > .css-19bb58m').first().click();
    await page.getByRole('option', { name: '2', exact: true }).click();
    await page.locator('label:nth-child(3) > .flex > .h-max > .css-1wm960t-control > .css-hlgwow').click();
    await page.locator('#react-select-4-input').fill('toor');
    await page.getByRole('option', { name: 'Toor Dal' }).click();
    await page.locator('#react-select-5-input').fill('ha');
    await page.getByRole('option', { name: 'haha' }).click();
    await page.locator('label:nth-child(5) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow > .css-19bb58m').click();
    await page.locator('#react-select-6-input').fill('ha');
    await page.getByRole('option', { name: 'haha' }).click();
    await page.locator('label:nth-child(6) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow > .css-19bb58m').click();
    await page.locator('#react-select-7-input').fill('ha');
    await page.getByRole('option', { name: 'haha' }).click();
    await page.locator('label:nth-child(7) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow').click();
    await page.getByRole('option', { name: 'PLAIN PLASTIC' }).click();
    await page.getByLabel('Brand Name').click();
    await page.getByLabel('Brand Name').fill('kk');
    await page.getByLabel('Total Quantity').click();
    await page.getByLabel('Total Quantity').fill('987654319');
    await page.locator('#SPOT').check();
    await page.locator('div:nth-child(3) > label > .flex > .h-max > .css-1wm960t-control > .css-hlgwow').click();
    await page.locator('#react-select-9-input').fill('indore');
    await page.getByRole('option', { name: 'Indore', exact: true }).click();
    await page.locator('div:nth-child(3) > label:nth-child(2) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow').first().click();
    await page.getByRole('option', { name: '2', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter...' }).fill('9876543');
    await page.locator('div:nth-child(3) > label:nth-child(4) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow').first().click();
    await page.getByRole('option', { name: '50' }).click();
    await page.locator('div:nth-child(3) > div > label > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow').first().click();
    await page.getByRole('option', { name: 'Time Payment' }).click();
    await page.locator('label:nth-child(3) > .flex > .h-max > .css-1pys1u9-control > .css-hlgwow').click();
    await page.getByRole('option', { name: '2', exact: true }).click();
    await page.getByLabel('Add Note').fill('kjhg');
    await page.getByText('Drop Product ImagesBrowse')
              .setInputFiles('Screenshot 2024-06-05 at 4.05.03 PM.png');
    await page.getByRole('button', { name: 'Save' }).click();
});