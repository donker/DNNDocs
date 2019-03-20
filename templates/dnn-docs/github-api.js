//var fetch = require('./node_modules/node-fetch');
//var https = require('https');

//exports.getContributors = getContributors;
exports.getTopContributors = getTopContributors;
//exports.testGet = testGet;

/*function getContributors(contributor) {
    contributor.push({total: '14', author: {login: 'nvisionative',avatar_url: 'https://avatars2.githubusercontent.com/u/4568451?v=4'}});
    return contributor;
    /*(global.Headers = fetch.Headers;

    fetch('https://api.github.com/repos/DNNCommunity/DNNDocs/stats/contributors', {
        headers: new Headers({
            'Accept': 'application/vnd.github.v3+json'
        })
    })
    .then(function(response) {return response.json()})
    .then(function(data) {
        //console.log(data);
        var result = data;
        result.sort(function(a,b) {return b.total - a.total});
        //console.log(result);
        for(var i in result) {
            contributor.push(result[i]);
            //console.log(contributor[i].total);
            //console.log(contributor[i].author.login);
            //console.log(contributor[i].author.avatar_url);
            if(i == 4) { break; }
        }
        return contributor;
    })
    .catch(function(error) {
        return 'error' //console.error(error)
    })*/
//};

/*function getTopContributors(contributor) {

    return http.get({
        host: 'api.github.com',
        path: '/repos/DNNCommunity/DNNDocs/stats/contributors'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            parsed.sort(function(a,b) {return b.total - a.total});
            for(var i in parsed) {
                contributor.push(parsed[i]);
                if(i == 4) { break; }
            }
            callback({
                contribtor
            });
        });
    });
}*/

/*function getTopContributors(callback) {

    return https.get({
        host: 'api.github.com',
        path: '/repos/DNNCommunity/DNNDocs/stats/contributors'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            parsed.sort(function(a,b) {return b.total - a.total});
            var contributor = [];
            for(var i in parsed) {
                contributor.push(parsed[i]);
                if(i == 4) { break; }
            }
            callback({
                contribtor
            });
        });
    });

}*/

