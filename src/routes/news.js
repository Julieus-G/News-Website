const express = require('express');
const newsRouter = express.Router();
const axios = require('axios').default;

        // setting request 'options' parameter 
        var options = {
                        method: 'GET',
                        url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US',
                        params: { lang: 'en', media: 'True' },
                        headers: {
                            'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
                        },
                    };
        axios.request(options).then(function (response) {
            console.log(response.data);
            response.data.pipe()
            // var data = JSON.parse(response);
            //     var author = data.status;
            //     var content = data.total_hits;
            //     var image = data.articles[1].media;
            //     var excerpt = data.articles[1].excerpt;
            //     var contentTwo = data.articles[2].excerpt;
            //     var imageSix = data.articles[2].media;
            //     var contentThree = data.articles[3].excerpt;
            //     var contentFour = data.articles[4].excerpt;
            //     var title5 = data.articles[5].title;
            //     var imageFive = data.articles[5].media;
            //     var contentFive = data.articles[5].excerpt;
            //     var imageThree = data.articles[6].media;
            //     var contentSix = data.articles[6].excerpt;
            //     var imageFour = data.articles[7].media;
            //     var contentSeven = data.articles[7].excerpt;
            //     var title7 = data.articles[7].title;
            //     var imageTwo = data.articles[2].media;
            //     console.log(imageTwo);
            // // console.log(response.data);
            // res.render('news', { greetings: h, Variable: author, contents: content, image: image, excerpt: excerpt, excerpts: contentTwo, ImageTwo: imageTwo, excerpts2: contentThree, excerpts3: contentFour, excerpts4: contentFive, excerpts5: contentSix, ImageThree: imageThree, ImageFour: imageFour, excerpts6: contentSeven, Title7: title7, Title5: title5, ImageFive: imageFive, ImageSix: imageSix })
        }).catch(function (error) {
            console.error(error);
        });
        // axios.request(options).then(function (response) {
        //     if (!error && res.statusCode == 200) {
        //         var data = JSON.parse(body);
        //         var author = data.status;
        //         var content = data.total_hits;
        //         var image = data.articles[1].media;
        //         var excerpt = data.articles[1].excerpt;
        //         var contentTwo = data.articles[2].excerpt;
        //         var imageSix = data.articles[2].media;
        //         var contentThree = data.articles[3].excerpt;
        //         var contentFour = data.articles[4].excerpt;
        //         var title5 = data.articles[5].title;
        //         var imageFive = data.articles[5].media;
        //         var contentFive = data.articles[5].excerpt;
        //         var imageThree = data.articles[6].media;
        //         var contentSix = data.articles[6].excerpt;
        //         var imageFour = data.articles[7].media;
        //         var contentSeven = data.articles[7].excerpt;
        //         var title7 = data.articles[7].title;
        //         var imageTwo = data.articles[2].media;
        //     } else {
        //         console.log(error);
        //     }
        //     // rendering on news.ejs template the assigned variables
        //     res.render('news', { greetings: h, Variable: author, contents: content, image: image, excerpt: excerpt, excerpts: contentTwo, ImageTwo: imageTwo, excerpts2: contentThree, excerpts3: contentFour, excerpts4: contentFive, excerpts5: contentSix, ImageThree: imageThree, ImageFour: imageFour, excerpts6: contentSeven, Title7: title7, Title5: title5, ImageFive: imageFive, ImageSix: imageSix })

module.exports = newsRouter;



// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
//   params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
//   headers: {
//     'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
//     'x-rapidapi-key': '478f85a7b5msh8f8921cd90e6026p1ecf9cjsnb299c30b5770'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });




// newsRouter.get('', async (req, res) => {
//     try {
//         //Getting todays Date to determine salutation////
//         if (hours > 4 && hours < 12) {
//             var h = "Good morning"
//             console.log(h)
//         } else if (hours > 12 && hours < 18) {
//             var h = "Good afternoon"
//             console.log(h)
//         } else if (hours > 18 && hours <= 23) {
//             var h = "Good evening"
//             console.log(h)
//         } else {
//             var h = "Hello"
//             console.log(h)
//         }
//         // setting request 'options' parameter 
//         var options = {
//             method: 'GET',
//             url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US',
//             params: { lang: 'en', media: 'True' },
//             headers: {
//                 'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
//             },
//         };
//         axios.request(options).then(function (response) {
//             var data = JSON.parse(body);
//                 var author = data.status;
//                 var content = data.total_hits;
//                 var image = data.articles[1].media;
//                 var excerpt = data.articles[1].excerpt;
//                 var contentTwo = data.articles[2].excerpt;
//                 var imageSix = data.articles[2].media;
//                 var contentThree = data.articles[3].excerpt;
//                 var contentFour = data.articles[4].excerpt;
//                 var title5 = data.articles[5].title;
//                 var imageFive = data.articles[5].media;
//                 var contentFive = data.articles[5].excerpt;
//                 var imageThree = data.articles[6].media;
//                 var contentSix = data.articles[6].excerpt;
//                 var imageFour = data.articles[7].media;
//                 var contentSeven = data.articles[7].excerpt;
//                 var title7 = data.articles[7].title;
//                 var imageTwo = data.articles[2].media;

                
//                 res.render('news', { greetings: h, Variable: author, contents: content, image: image, excerpt: excerpt, excerpts: contentTwo, ImageTwo: imageTwo, excerpts2: contentThree, excerpts3: contentFour, excerpts4: contentFive, excerpts5: contentSix, ImageThree: imageThree, ImageFour: imageFour, excerpts6: contentSeven, Title7: title7, Title5: title5, ImageFive: imageFive, ImageSix: imageSix })
//         })
//     } catch (error) {
//         if (err.response) {
//             res.render('news', { articles: null })
//             console.log(err.response.status)
//             console.log(err.response.headers)
//             console.log(err.response.data)
//         } else if (err.request) {
//             res.render('news', { articles: null })
//             console,log(err.request)
//         } else {
//             res.render('news', { articles: null })
//             console.log('Error', err.message)
//         }
//     }
// });




// // the home route
// app.route('/')
//     .get(function (req, res) {
//         ////Getting todays Date to determine salutation////
//         if (hours > 4 && hours < 12) {
//             var h = "Good morning"
//             console.log(h)
//         } else if (hours > 12 && hours < 18) {
//             var h = "Good afternoon"
//             console.log(h)
//         } else if (hours > 18 && hours <= 23) {
//             var h = "Good evening"
//             console.log(h)
//         } else {
//             var h = "Hello"
//             console.log(h)
//         }
//         // setting request 'options' parameter 
//         var options = {
//             method: 'GET',
//             url: 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US',
//             params: { lang: 'en', media: 'True' },
//             headers: {
//                 'x-api-key': 'GrKC0IWB9ne3YNgAo1W7sbngx72SS2OnFTFSOcC5nY8'
//             },
//         };
//         request(options, (error, response, body) => {
//             if (!error && res.statusCode == 200) {
//                 var data = JSON.parse(body);
//                 var author = data.status;
//                 var content = data.total_hits;
//                 var image = data.articles[1].media;
//                 var excerpt = data.articles[1].excerpt;
//                 var contentTwo = data.articles[2].excerpt;
//                 var imageSix = data.articles[2].media;
//                 var contentThree = data.articles[3].excerpt;
//                 var contentFour = data.articles[4].excerpt;
//                 var title5 = data.articles[5].title;
//                 var imageFive = data.articles[5].media;
//                 var contentFive = data.articles[5].excerpt;
//                 var imageThree = data.articles[6].media;
//                 var contentSix = data.articles[6].excerpt;
//                 var imageFour = data.articles[7].media;
//                 var contentSeven = data.articles[7].excerpt;
//                 var title7 = data.articles[7].title;
//                 var imageTwo = data.articles[2].media;
//             } else {
//                 console.log(error);
//             }
//             // rendering on news.ejs template the assigned variables
//             res.render('news', { greetings: h, Variable: author, contents: content, image: image, excerpt: excerpt, excerpts: contentTwo, ImageTwo: imageTwo, excerpts2: contentThree, excerpts3: contentFour, excerpts4: contentFive, excerpts5: contentSix, ImageThree: imageThree, ImageFour: imageFour, excerpts6: contentSeven, Title7: title7, Title5: title5, ImageFive: imageFive, ImageSix: imageSix })
//         });
    // });