
// requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
// const ejs = require('ejs');
const async = require('async')

const app = express();
const port = process.env.PORT || 3000;

// Allow use of the static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
// app.use('/js', express.static(__dirname + 'public/js'));


// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes/news');
const { response } = require('express');

app.use('/', newsRouter);
// app.use('/business', newsRouter)


app.route('/business')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        })
    });
app.route('/technology')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=tech',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/politics')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=politics',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/economics')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=economics',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/science')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=science',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    }); 
app.route('/world')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=world',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/travel')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=travel',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/food')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=food',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/music')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=music',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/entertainment')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=entertainment',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/energy')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=energy',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });
app.route('/sports')
    .get((req, res) => {

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=gaming',
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                // console.log(body); // Displays the response from the API
                 var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('business', { Variable: author, contents: content })

        });
    });


    app.route('/business')
    .post((req, res) => {

        let search = req.body.search;

        var options = {
            method: 'GET',
            url: `https://api.newscatcherapi.com/v2/search?q=${search}`,
            params: { lang: 'en', media: 'True' },
            headers: {
                'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
            }
        };
        request(options, (error, response, body) => {
            if (!error && res.statusCode == 200) { // Successful response
                var data = JSON.parse(body);
                var author = data.articles[1].author;
                var content = data.articles;
            
            } else {
                console.log(error);
            }
            res.render('search', { Variable: author, contents: content })

        })
    });

// Listen on port 3000->backticks for tempalate strings. 
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));


// https://api.newscatcherapi.com/v2/search?q=Tesla&page_size=2


