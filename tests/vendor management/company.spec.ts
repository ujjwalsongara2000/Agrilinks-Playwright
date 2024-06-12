import{test , expect} from '@playwright/test'

test("open company url is done", async ({ page :page})=>{

    await page.goto("/");
    await page.waitForTimeout(6000)
    await page.getByPlaceholder('Enter your work email').fill('tanishkapatil295@gmail.com')
    await page.locator('input[name="password"]').fill('Rishi@123')
    await page.getByLabel('Terms and Conditions').click()
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.getByText('Vendor Management').click()
    await page.getByText('Company', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Company' }).click();
    await page.getByLabel('Company Name').fill('Hellotest');
    await page.locator('.css-19bb58m').first().click();
    await page.getByRole('option', { name: '-2' }).click();
    await page.getByText('Grade AGrade BGrade C');
    await page.getByRole('button', { name: 'Grade B' }).click();
    await page.locator('#react-select-3-input').click();
    await page.locator('#react-select-3-input').fill('test');
    await page.locator('#react-select-3-option-0').click();
    await page.getByText('Import ExportTraderMillerRetailer');
    await page.getByLabel('Trader').click();
    await page.getByLabel('Pan Number').fill('ABCDE1234F');
    await page.getByLabel('Gst Number').fill('22AAAAA0000A1Z5');
    await page.locator('label:nth-child(9) > .flex').click();
    await page.getByRole('option', { name: 'MADHYA PRADESH' }).click();
    await page.locator('.block > div > .h-max > .css-1wm960t-control > .css-hlgwow > .css-19bb58m').click();
    await page.locator('#react-select-5-input').fill('indo');
    await page.getByRole('option', { name: 'Indore', exact: true }).click();
    await page.locator('textarea[name="address"]').fill('hello this is a using for testing');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(13000)
    



    // await page.waitForTimeout(16000)

    
});