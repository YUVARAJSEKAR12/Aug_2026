import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

export class CustomFix extends World {
    browser !: Browser;
    context !: BrowserContext;
    page !: Page;
}
setWorldConstructor(CustomFix);