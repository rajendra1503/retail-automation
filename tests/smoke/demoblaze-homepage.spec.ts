import{test, expect} from '@playwright/test'

test('verify Home page loads correctly and Phones link is displayed.', async({page}) => {

    await page.goto('https://demoblaze.com/', {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveTitle('STORE');

    const linkPhones = page.getByRole('link', {name: 'Phones', exact: true});
    await expect(linkPhones).toBeVisible();
})

test('verify Laptops link is displayed on Home page.', async({page}) => {

    await page.goto('https://demoblaze.com/', {waitUntil: 'domcontentloaded'});
    const linkLaptops = page.getByRole('link', {name: 'Laptops', exact: true});
    await expect(linkLaptops).toBeVisible();
})

test.only('verify Monitors link is displayed on Hoe page.', async({page}) => {

    await page.goto('https://demoblaze.com/', {waitUntil: 'domcontentloaded'});
    const linkMonitors = page.getByRole('link', { name: 'Monitors', exact: true});
    await expect(linkMonitors).toBeVisible();
})