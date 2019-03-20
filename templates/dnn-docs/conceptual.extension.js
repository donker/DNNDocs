// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
//var githubApi = require('./github-api.js');
var contributorsJson = require('./contributors.json');
//var fs = require('fs');

/**
 * This method will be called at the start of exports.transform in conceptual.html.primary.js
 */
exports.preTransform = function (model) {
  return model;
}

/**
 * This method will be called at the end of exports.transform in conceptual.html.primary.js
 */
exports.postTransform = function (model) {

  //var contributor = JSON.parse(contributorsJson);
  //githubApi.getContributors(contributor);
  //githubApi.testGet();

  //fs.writeFileSync('./contributorsOut.json', contributorsJson);

  // model._contrib1_total = contributorsJson[0].total;
  // model._contrib1_login = contributorsJson[0].author.login;
  // model._contrib1_avatar_url = contributorsJson[0].author.avatar_url;

  /*model._contrib1_total = contributor[0].total;
  model._contrib1_login = contributor[0].author.login;
  model._contrib1_avatar_url = contributor[0].author.avatar_url;
  
  /*model._contrib2_total = contributor[1].total;
  model._contrib2_login = contributor[1].author.login;
  model._contrib2_avatar_url = contributor[1].author.avatar_url;

  model._contrib3_total = contributor[2].total;
  model._contrib3_login = contributor[2].author.login;
  model._contrib3_avatar_url = contributor[2].author.avatar_url;

  model._contrib4_total = contributor[3].total;
  model._contrib4_login = contributor[3].author.login;
  model._contrib4_avatar_url = contributor[3].author.avatar_url;

  model._contrib5_total = contributor[4].total;
  model._contrib5_login = contributor[4].author.login;
  model._contrib5_avatar_url = contributor[4].author.avatar_url;*/

  return model;
}