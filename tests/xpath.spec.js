
/*
    Types of locator- 
            1) Css locator
            2) Xpath Locator
                Xpath Locator methods-
                        1]-Ancestor 
                            a)ancestor 
                            b)Ancestor-or-self
                        2]Descendant
                            a) Descendant
                            b)Descendant-or-self
                         3] Sibling
                            a)following-sibling
                                ex://label[@for='username']//following-sibling::input
                            b)preceding-sibling 
                                ex: //td[text()='Maria Anders']//preceding-sibling::td//child::input[@type='checkbox']
                          4]Parent
                            ex://label[@for='username']//following-sibling::input//parent::div
                            or //label[@for='username']//parent::div
                          5]Child  
                            ex: //div[@class="form-group"][5]//child::label[@for='terms']  




            

*/
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

test('Locators',async({page}) => {
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
// locate multiple webelements
const Links=await page.$$("a");
for(link of Links){
console.log(await link.textContent());
}
}
);
//links on page
test('multiple Locators',async({page}) => {
await page.goto('https://demoblaze.com/index.html');
const Links = await page.$$('a');
for (const link of Links)
{
    const linktxt=await link.textContent()
    console.log(linktxt)
}

}

);

//products on page
// test('products',async({page})=> {
// await page.goto('https://demoblaze.com/index.html');
// const products=await page.$$("//div[@id='tbodyid']//h4//a");
// for (const product of products)
// {
//     const prodname= await product.textContent();
//     console.log (prodname);
// }

// }
// );


test.only('products', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
await page.waitForSelector("//div[@id='tbodyid']//h4//a");
    // Modern way: use locator().all() to get an array
    const products = await page.locator("//div[@id='tbodyid']//h4//a").all();

    for (const product of products) {
        const prodname = await product.textContent();
        console.log(prodname);
    }
});

