import { expect,test } from "@playwright/test";

//
test ('page',async({page})=>{
    await page.goto('https://www.naukri.com/');
    console.log(await page.title());

    //await expect(page).toHaveTitle('Facebook');
   // await expect(page).
 //#expereinceDD--id
 //.class--class selector
 //[type='test']--attribute selector
 //[name='username']
}

)

test ('login',async({page})=>{
     await page.goto('https://www.naukri.com/');
     await page.locator('#expereinceDD').fill('ramananda sharma')
   
}

)