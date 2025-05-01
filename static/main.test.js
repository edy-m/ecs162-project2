const fetch = require('node-fetch');

test('basic sanity check', () => {
    expect(1 + 1).toBe(2);
});

test('making sure flask server returns API key as expected', async () => {
    const response = await fetch('http://localhost:8000/api/key');
    const data = await response.json();
    console.log('Keyyyy:', data.apiKey);
    expect(data.apiKey).toBe('LwRGjUYN8Phbf9LXDJZmzm7Ab99CQmke');
});

test('check that the query is correct (Sacramento)', async () => {
    const response = await fetch('http://localhost:8000/api/key');
    const data = await response.json();
    url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sacramento&api-key=' + data.apiKey;
    console.log('queryyyy:', url);
    expect(url).toBe('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sacramento&api-key=LwRGjUYN8Phbf9LXDJZmzm7Ab99CQmke');
});

test('date at the top of the page is todays date', () => {
    document.body.innerHTML = `<div id="date">
        </div>`;
    var now = new Date();
    var date = now.toLocaleString();
    document.getElementById("date").innerHTML = date;
    var mockDate = document.getElementById("date");
    console.log(mockDate.innerHTML);
    expect(mockDate.innerHTML).toBe(date);
});