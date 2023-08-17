const puppeteer = require('puppeteer');
const assert = require('assert');
try{
    (async () => {
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto("http://localhost:3000/");
        const mySearch = await page.$('#mySearch');
        await mySearch.type('Clothes' );
        const clothes = await page.$('#testingclothes');
        await clothes.click;
        const pageUrl = await page.url();
        assert(pageUrl === 'http://localhost:3000/clothes');
        console.log("URL matched successfully");
        await browser.close();
    })();
} catch (err) {
    console.error(err);
}