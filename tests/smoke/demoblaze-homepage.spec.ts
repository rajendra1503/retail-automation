import{test, expect} from '@playwright/test'

test('verify Home page loads correctly', async({page}) => {

    await page.goto('https://demoblaze.com/', {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveTitle('STORE');

    const linkPhones = page.getByRole('link', {name: 'Phones', exact: true});
    await expect(linkPhones).toBeVisible();
})