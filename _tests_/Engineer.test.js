const Engineer = require('../lib/Enginner');
const Employee = require('../lib/Employee');
const {test} = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer1');

    expect(typeof(engineer)).toBe('object');
});

test('get github username', () => {
    const engineer = new Engineer('Manager', '1', 'sara@fakemail.com', 'saragithub');

    expect(engineer.github).toBe(saragithub);
})

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('Manager1');

    expect(engineer.getRole()).toBe('Engineer');
});