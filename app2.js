const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const readlineSync = require("readline-sync");

function createStream(name, documentType) {
  let writeStream;
  switch (documentType) {
    case "text/html":
      writeStream = fs.createWriteStream("./writable/" + name + ".html");
      break;
    case "csv":
      writeStream = fs.createWriteStream("./writable/" + name + ".csv");
    default:
      writeStream = fs.createWriteStream("./writable/" + name + ".json");
  }
  return writeStream;
}

// (()=>{
//
//   const path = readlineSync.question("what's the path of your request ?"),
//   // methode = readlineSync.question("what's the methode of your request ?"),
//   writeStreamName = readlineSync.question("name your file!");
//
//   request(path,(err,response,html)=>{
//     if(err) throw err;
//     else if (response.statusCode == 200) {
//       writeStream = createStream(writeStreamName,response.headers["content-type"]);
//       writeStream.write(JSON.parse(response));
//       writeStream.end();
//     } else if (response.statusCode == 302) {
//         console.log(response.location);
//     }
//   })
//
// })();

// (()=>{
//   request.post({
//     url : "https://ads.reddit.com/api/auth/login",//?username=fahdaddi&password=rvh8LL8rWC3B7tz&&api_type=json
//     headers : ""+{
//       "cookie" :  "_lr_hb_-5xdwzh^%^2Fadsredditcom-production=^{^%^22heartbeat^%^22:1539616336584^}; __ssid=3e410f70a36e7bb1ca8e20f1d312b77; _lr_tabs_-5xdwzh^%^2Fadsredditcom-production=^{^%^22sessionID^%^22:0^%^2C^%^22recordingID^%^22:^%^222-b95d162b-1643-4010-bb9c-c1703932d4d9^%^22^%^2C^%^22lastActivity^%^22:1539616377500^}",
//       "origin" : "https://ads.reddit.com",
//       "accept-encoding" : "gzip, deflate, br",
//       "accept-language" : "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//       "user-agent" : "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
//       "content-type" : "application/json",
//       "content-length" : 52,
//       "accept" : "*/*",
//       "referer" : "https://ads.reddit.com/login?next=/",
//       "authority" : "ads.reddit.com",
//       "x-requested-with" : "XMLHttpRequest",
//
//     },
//     body :
//        ""+{
//         username : "fahdaddi",
//         password: "rvh8LL8rWC3B7tz"
//       }
//     },(err,response,body)=>{
//       console.log("response.statusCode",response.statusCode);
//     if(err) throw err;
//     const writeStream = createStream("response",'text/html');
//     writeStream.write(JSON.stringify(body));
//     console.log("cookie",response.headers)
//
//   });
// })();

(() => {
  request.post(
    {
      url: "https://ads.reddit.com/api/v1/account/t2_2eya4flk/dashboard", //?username=fahdaddi&password=rvh8LL8rWC3B7tz&&api_type=json
      headers:
        "" +
        {
          cookie:
            "_lr_hb_-5xdwzh%2Fadsredditcom-production={%22heartbeat%22:1539616336584}; __ssid=3e410f70a36e7bb1ca8e20f1d312b77; adsToken=eyJhY2Nlc3NUb2tlbiI6IjE4OTI3NjEzMzg4MC1mSTRWWV93ODNMcDZDcVN2emlISGRUSUVUb0UiLCJ0b2tlblR5cGUiOiJiZWFyZXIiLCJleHBpcmVzIjoxNTM5NjE5OTgxODcwLCJyZWZyZXNoVG9rZW4iOiIxODkyNzYxMzM4ODAtWXl2ejd6WXpBS3AycFBvbUkyeVRwUUk1WU9nIiwic2NvcGUiOiJhY2NvdW50IGNyZWRkaXRzIGVkaXQgZW1haWwgZmxhaXIgaGlzdG9yeSBpZGVudGl0eSBsaXZlbWFuYWdlIG1vZGNvbmZpZyBtb2Rjb250cmlidXRvcnMgbW9kZmxhaXIgbW9kbG9nIG1vZG1haWwgbW9kb3RoZXJzIG1vZHBvc3RzIG1vZHNlbGYgbW9kd2lraSBteXN1YnJlZGRpdHMgcHJpdmF0ZW1lc3NhZ2VzIHJlYWQgcmVwb3J0IHNhdmUgc3BvbnNvciBzdWJtaXQgc3Vic2NyaWJlIHZvdGUgd2lraWVkaXQgd2lraXJlYWQifQ==; adsToken.sig=J7gX934O_WF71QnDPZuzAu1dSzk; _lr_tabs_-5xdwzh%2Fadsredditcom-production={%22sessionID%22:0%2C%22recordingID%22:%222-b95d162b-1643-4010-bb9c-c1703932d4d9%22%2C%22lastActivity%22:1539616390239}",
          origin: "https://ads.reddit.com",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
          "user-agent":
            "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
          "content-type": "application/json",
          "content-length": 52,
          accept: "*/*",
          referer: "https://ads.reddit.com/login?next=/",
          authority: "ads.reddit.com",
          "x-requested-with": "XMLHttpRequest"
        },
      body:
        "" +
        {
          breakdowns: [],
          columns: ["impressions", "clicks", "revenue", "ecpm", "ctr", "cpc"],
          endDate: "2018-10-15",
          filters: [],
          graphMetric: "impressions",
          level: "campaignId",
          selectedCampaigns: [],
          selectedAdgroups: [],
          selectedAds: [],
          sorts: [],
          startDate: "2018-10-09",
          viewWindow: "viewWindow1",
          view: "Default"
        }
    },
    (err, response, body) => {
      console.log("response.statusCode", response.statusCode);
      if (err) throw err;
      // const writeStream = createStream("response",'text/html');
      // writeStream.write(JSON.stringify(body));
      // console.log("cookie",response.headers)
      const $ = cheerio.load(body);
      console.log($("body").text());
    }
  );
})();
