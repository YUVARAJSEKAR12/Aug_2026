import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomFix } from "../utils/CustomFix";

// Before(async ()=>{
//     console.log("Before")
// })

Before(async function (this: CustomFix) {
    this.browser = await chromium.launch({
        headless: false
    })
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    console.log("browser launch")

})
After(async function (this: CustomFix, scenario) {
    if (scenario.result?.status === 'FAILED') {
        await this.page.screenshot({
            path: `screenshots/${Date.now()}.png`,
            fullPage: true
        });
        console.log("failure screenshot captured")
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})
// After(async ()=>{
//     console.log("after")
// })
