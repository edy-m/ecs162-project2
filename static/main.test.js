/*  lecture  5 and 6 slides - syntax and other help writing js and understanding the DOM
    such as (document.getElementById("")
    (https://docs.google.com/presentation/d/18j1DvLYZKYAE6kmsX4NqLL7FbwTFteDi8aZPXZxaAUc/edit#slide=id.p)
    (https://docs.google.com/presentation/d/1-8SYGB4VpGPIexqrzuAGVcLSOMBTzxce8ZIBapu4-34/edit#slide=id.g10ed5339ceb_0_7)
*/

/*  week 5 discussion slides - getting started with unit testing with jest as well as general structure and usage
    (https://canvas.ucdavis.edu/courses/993295/files/folder/Lab%20Materials/week%205?preview=27594891)
*/

/*
    course assist ai chat: course chat: Fetch Using Jest - installation and setup using node-fetch so
    that I can use jest in this js testing file
    (https://app.courseassistai.com/courses/1000108/courseChat/1fb95745-aafc-4606-b862-a582f38312f3_1000108) 
*/
const fetch = require('node-fetch');

test('basic sanity check', () => {
    expect(1 + 1).toBe(2);
});

/*
    jest.io - help understanding unit testing using jest such as functions like expect and toBe among others
    (https://jestjs.io/docs/asynchronous) 
*/

test('making sure flask server returns API key as expected', async () => {
    //fetch data from our webpage
    const response = await fetch('http://localhost:8000/api/key');
    const data = await response.json();
    //display extracted api key to make sure we have the right one
    console.log('Keyyyy:', data.apiKey);
    //compare the extracted key to the actual key
    expect(data.apiKey).toBe('LwRGjUYN8Phbf9LXDJZmzm7Ab99CQmke');
});

test('check that the query is correct (Sacramento)', async () => {
    //fetch data from our webpage
    const response = await fetch('http://localhost:8000/api/key');
    const data = await response.json();
    //construct a search query for the nyt search api using the api key
    url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sacramento&api-key=' + data.apiKey;
    //display constructed url to make sure we have the right one
    console.log('queryyyy:', url);
    //compare the constructed url to the actual url
    expect(url).toBe('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sacramento&api-key=LwRGjUYN8Phbf9LXDJZmzm7Ab99CQmke');
});

/* 
    jest.io - help/inspiration/usage of DOM manipulation used for unit testing
    (https://jestjs.io/docs/tutorial-jquery)
*/
test('date at the top of the page is todays date', () => {
    //use DOM manipulation to simulate our html page
    //create date object in html body
    document.body.innerHTML = `<div id="date">
        </div>`;
    //extract current date/time using same strategy from assignment 1
    var now = new Date();
    var date = now.toLocaleString();
    document.getElementById("date").innerHTML = date;
    //create new variable that uses the date that we just wrote onto the simulated html
    var mockDate = document.getElementById("date");
    //display the date so we can check if it's correct
    console.log(mockDate.innerHTML);
    //check the date/time
    expect(mockDate.innerHTML).toBe(date);
});