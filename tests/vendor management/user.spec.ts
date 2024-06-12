import{test , expect} from '@playwright/test'

test("open user url is done", async ({ page :page})=>{

    await page.goto("/");
    await page.waitForTimeout(6000)
    await page.getByPlaceholder('Enter your work email').fill('tanishkapatil295@gmail.com')
    await page.locator('input[name="password"]').fill('Rishi@123')
    await page.getByLabel('Terms and Conditions').click()
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.getByText('Vendor Management').click()
    await page.getByRole('complementary').getByText('User').click()
    await page.getByRole('button', { name: 'Add Users' }).click()
    await page.locator('#user-name').fill('test');
    await page.locator('#phonenumber').fill('9876543234');
    await page.locator('#useemail').fill('test2@gmail.com');
    await page.locator('#uspassw').fill('Testing@123');
    await page.locator('input[name="confirmpassword"]').fill('Testing@123');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(6000)
   
    // await page.waitForTimeout(16000)

    
});