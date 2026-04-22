// Types of locator- 1) Css locator
//2) Xpath Locator
import  {test,expect } from "@playwright/test";
// 
// XPathEvaluator
//"//input[@id='username']"- single attribute
//"//input[@class='form-control' and @name='username']" - multiple attribute
// Contains-//a[contains(text(),'terms and')]
//span{}
// //input[starts-with(@name,sign)]

test('abc',async({page}) => {
await page.goto('https://www.google.com');
 console.log(await page.title());
await expect(page).toHaveTitle('Google');
});

test.only('Locators',async({page}) => {
//goto link
await page.goto('https://demoblaze.com/index.html');
//click on login button
await page.locator("(//a[normalize-space()='Log in'])").click();
//type username
await page.locator('#loginusername').fill('pavanol');
//type password
await page.locator('id=loginpassword').fill('test@123')
// click login
await page.locator("//button[normalize-space()='Log in']").click();
//I want to check if logout link is available or not so that I am con firmed that login is happened
const logoutlink=await page.locator("(//a[normalize-space()='Log out'])");
await expect(logoutlink).toBeVisible();
}
);