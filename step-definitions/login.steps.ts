import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


Given('Browser Launch', function () {
    console.log("browser launch")
});
When('Enter valid username {string}', function (user) {
    console.log(user)
});

When('Enter valid password {string}', function (pass) {
    console.log(pass)
});
When('Click Login button', function () {
    console.log("click button")
});

Then('Validate Home page', function () {
    console.log("Home Page")
});

When('Enter invalid username {string}', function (user) {
    console.log(user)
});

When('Enter invalid password {string}', function (pass) {
    console.log(pass)
});

When('Enter username {string}', function (user) {
    console.log(user)
});

When('Enter password {string}', function (pass) {
    console.log(pass)
});

Given('user enters the login details', async function (dataTable) {
    const data = dataTable.hashes();
    console.log(data);
    console.log(data[0].username)
});

Given('user enters the login details with rowsHash', async function (dataTable) {
    const data = dataTable.rowsHash();
    console.log(data)
    console.log(data.username)
    expect(data.username).toBe('sdhfkjsdfjk');
});

Given('user enters the login details with raw', async function (dataTable) {
    const data = dataTable.raw();
    console.log(data);
});

Given('user enters the login details rows', async function (dataTable) {
    const data = dataTable.rows();
    console.log(data)
});

