const puppeteer = require("puppeteer");

// let counter = async ()=>{
//   await setTimeout(async ()=>{
//     await console.log("waited for 20s!");
//   },20000)
// }

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://ads.reddit.com/login?next=/");

  // await page.keyboard.down("Shift");
  // await page.keyboard.down("Shift");
  // await page.keyboard.down("Shift");
  // await page.keyboard.down("Shift");
  // await page.keyboard.type("fahdaddi");
  // await page.keyboard.down("Shift");
  // await page.keyboard.type("rvh8LL8rWC3B7tz");
  await page.$eval("#username", usr => (usr.value = "i"));
  await page.$eval("#username", usr => (usr.value = usr.value + "a"));
  await page.$eval("#username", usr => (usr.value = usr.value + "m"));
  await page.$eval("#username", usr => (usr.value = usr.value + "a"));
  await page.$eval("#username", usr => (usr.value = usr.value + "r"));
  await page.$eval("#username", usr => (usr.value = usr.value + "e"));
  await page.$eval("#username", usr => (usr.value = usr.value + "a"));
  await page.$eval("#username", usr => (usr.value = usr.value + "l"));
  await page.$eval("#username", usr => (usr.value = usr.value + "l"));
  await page.$eval("#username", usr => (usr.value = usr.value + "o"));
  await page.$eval("#username", usr => (usr.value = usr.value + "r"));
  await page.$eval("#username", usr => (usr.value = usr.value + "d"));
  await page.$eval("#password", psw => (psw.value = "youneverwalkalone"));
  await page.screenshot({ path: "./screenshot.png" });
  await page.click('button[type="submit"]');

  console.log("waiting");
  await page.screenshot({ path: "./screenshot2.png" });
  await page.waitForSelector("#CampaignObjective-8");
  console.log("done");
  // await counter();
  // console.log('console.log after counter() await')
  await page.screenshot({ path: "./screenshot3.png" });
  // const username = await page
  //   .evaluate(() => {
  //     return document.querySelector("#username");
  //   })
  //   .keyboard.type("fahdaddi");

  // console.log("username :", username.innerText());

  await browser.close();
})();
