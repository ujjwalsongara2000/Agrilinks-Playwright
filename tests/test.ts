import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(600*20);
  await page.getByRole('button',{name : 'Create new account'}).click();
  await page.waitForTimeout(600*20);


});



  
