import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "TIM REYNOLDS, SCHUYLER DIXON",
      title:
        "Sands casino family says they'll buy majority of Mavs from Cuban. AP source says valuation is $3.5B - The Associated Press",
      description:
        "The family that runs the Las Vegas Sands casino company says it has entered agreements to buy the majority stake of the Dallas Mavericks from team owner Mark Cuban. The agreement would be in the valuation range of $3.5 billion, according to an AP source, and …",
      url: "https://apnews.com/article/dallas-mavericks-mark-cuban-adelson-family-sale-28b58fc35f5c4159b5a4b61c749186b3",
      urlToImage:
        "https://dims.apnews.com/dims4/default/c23d2bd/2147483647/strip/true/crop/4358x2451+0+227/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F56%2F6b%2F7f48e5ecff52d279fa72f395057b%2Fb490af2093f340ffb2aa16b2baf7f2f4",
      publishedAt: "2023-11-29T22:09:00Z",
      content:
        "Dallas Mavericks owner Mark Cuban has entered into an agreement to sell a majority stake in the NBA franchise to the family that runs the Las Vegas Sands casino company, it was announced Wednesday. T… [+4176 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Moira Warburton, David Morgan",
      title:
        "Indicted Republican George Santos to face US House expulsion vote Friday - Reuters",
      description:
        "The U.S. House of Representatives is expected to vote on Friday on whether to expel scandal-plagued Republican George Santos, who faces criminal corruption charges and new accusations that he misspent campaign money, according to Republican aides.",
      url: "https://www.reuters.com/world/us/us-house-vote-expulsion-indicted-republican-george-santos-thursday-2023-11-29/",
      urlToImage:
        "https://www.reuters.com/resizer/7dSIG2mysWdwI_Do6csUJTUcdK0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CQ2PH7NQX5PNLEA3P3ZOOAGKXU.jpg",
      publishedAt: "2023-11-29T21:58:00Z",
      content:
        "WASHINGTON, Nov 29 (Reuters) - The U.S. House of Representatives is expected to vote on Friday on whether to expel scandal-plagued Republican George Santos, who faces criminal corruption charges and … [+3687 chars]",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Myles Simmons",
      title:
        "Aaron Rodgers officially limited in first practice back from Achilles tear - NBC Sports",
      description:
        "Breece Hall was also listed on the injury report as limited with a hamstring issue.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/aaron-rodgers-officially-limited-in-first-practice-back-from-achilles-tear",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/2a394b7/2147483647/strip/true/crop/3191x1795+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F14%2F1e%2Fa61fd1b94f659c882afcce47e788%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1790317726",
      publishedAt: "2023-11-29T21:42:53Z",
      content:
        "Aaron Rodgers has made his return to the practice field, which means the Jets must designate his participation level. \r\nRodgers was officially limited in Wednesdays session. \r\nThats no surprise, give… [+841 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Sean Piccoli",
      title:
        "Jonathan Majors Domestic Violence Trial Ends First Day With No Jury Seated, No Ruling On Sealed Evidence – Update - Deadline",
      description:
        "2nd UPDATE 1:40 PM: After a day spent with lawyers fighting over what can and cannot be made public in Jonathan Majors’ domestic violence trial, the Loki star got his first look Wednesday afternoon…",
      url: "https://deadline.com/2023/11/jonathan-majors-trial-domestic-violence-1235642075/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/11/jonathan-majors.jpg?w=1024",
      publishedAt: "2023-11-29T21:40:00Z",
      content:
        "2nd UPDATE 1:40 PM: After a day spent with lawyers fighting over what can and cannot be made public in Jonathan Majors’ domestic violence trial, the Lokistar got his first look Wednesday afternoon at… [+10582 chars]",
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: null,
      title:
        "US accuses Indian official in foiled plot to kill Sikh separatist in New York City - Financial Times",
      description:
        "Allegations contained in indictment brought by justice department against Indian national in murder-for-hire case",
      url: "https://www.ft.com/content/04544a8f-ba1a-47b7-9457-882614dc3852",
      urlToImage: null,
      publishedAt: "2023-11-29T21:29:23Z",
      content:
        "We use\r\ncookies\r\nand other data for a number of reasons, such as keeping FT Sites reliable and secure,\r\npersonalising content and ads, providing social media features and to\r\nanalyse how our Sites ar… [+6 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Ari Levy",
      title:
        "Salesforce shares jump on better-than-expected earnings report - CNBC",
      description:
        "Salesforce reported on Wednesday that revenue in the fiscal third quarter increased 11% while profit topped analysts' estimates",
      url: "https://www.cnbc.com/2023/11/29/salesforce-crm-q3-earnings-report-2024.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107335560-1700223311422-gettyimages-1797654207-js1_3782_mofkbgrs.jpeg?v=1700223465&w=1920&h=1080",
      publishedAt: "2023-11-29T21:18:48Z",
      content:
        "Salesforce shares rose more than 8% in extended trading on Wednesday after the cloud software vendor reported fiscal third-quarter earnings that topped analysts' estimates.\r\nHere's how the company di… [+1800 chars]",
    },
    {
      source: { id: null, name: "[Removed]" },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Fox Business",
      title:
        "Law enforcement issue warnings after latest Apple iOS release - New York Post ",
      description:
        "Law enforcement agencies across the U.S. are warning iPhone users about a feature released with the newest software update called NameDrop.",
      url: "https://nypost.com/2023/11/29/tech/law-enforcement-issue-warnings-after-latest-apple-ios-release/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/11/ios-17-update-syndication-comp.jpg?quality=75&strip=all&1701267235&w=1024",
      publishedAt: "2023-11-29T20:22:00Z",
      content:
        "Law enforcement agencies across the U.S. are warning iPhone users about a feature released with the newest software update called NameDrop.\r\n“With iOS 17.1 and watchOS 10.1, you can use NameDrop to q… [+2197 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Yvonne Wingett Sanchez",
      title:
        "Arizona officials charged with conspiring to delay midterm election outcome - The Washington Post",
      description:
        "The indictments mark a rare example of potential criminal consequences in battleground Arizona, where county officials, state lawmakers and GOP candidates have helped delegitimize election outcomes and procedures.",
      url: "https://www.washingtonpost.com/politics/2023/11/29/cochise-county-arizona-midterm-election-criminal-charges/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PYPEZQHTV6W2POOXOMACKGPELA.JPG&w=1440",
      publishedAt: "2023-11-29T20:10:19Z",
      content:
        "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nPHOENIX Two Republican members of a county election board in southern Arizona were indicted by a state grand jury this week for allege… [+2435 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Elijah McClain: Trial of paramedics charged in death begins - BBC.com",
      description:
        "The trial has begun for two paramedics charged over the 2019 death of the 23-year-old Colorado man.",
      url: "https://www.bbc.com/news/world-us-canada-67550179",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5747/production/_131834322_gettyimages-1268393510-1.jpg",
      publishedAt: "2023-11-29T20:06:00Z",
      content:
        'By Bernd Debusmann JrBBC News, Washington\r\nOpening arguments begin on Wednesday in the trial of paramedics Jeremy Cooper and Peter Cichuniec\r\nThe paramedics charged in the death of Elijah McClain "fa… [+4756 chars]',
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Breck Dumas",
      title:
        "Berkshire Hathaway's future after Charlie Munger's passing - Fox Business",
      description:
        "The passing of Berkshire Hathaway Vice Chairman Charlie Munger, Warren Buffett's longtime friend and business partner, puts the company's succession plan in the spotlight.",
      url: "https://www.foxbusiness.com/markets/berkshire-hathaways-future-charlie-mungers-passing",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/0/0/munger.jpg?ve=1&tl=1",
      publishedAt: "2023-11-29T19:47:00Z",
      content:
        "The death of Berkshire Hathaway Vice Chairman Charlie Munger, Warren Buffett's longtime friend and business partner, marks the loss of one half of the legendary investing duo that has run the multibi… [+2819 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "Katie Barnes",
      title: "Reese to return for LSU after 4-game absence - ESPN",
      description:
        "LSU star forward Angel Reese, who has missed four games for undisclosed reasons, is rejoining the Tigers on Thursday vs. Virginia Tech.",
      url: "https://www.espn.com/womens-college-basketball/story/_/id/39006632/angel-reese-return-lsu-4-game-absence",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0918%2Fr1226452_1296x729_16%2D9.jpg",
      publishedAt: "2023-11-29T19:21:00Z",
      content:
        "LSU star forward Angel Reese, who has missed four games for undisclosed reasons, is rejoining the seventh-ranked Tigers in advance of their matchup with No. 9 Virginia Tech on Thursday night.\r\nLSU co… [+2498 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Benoit Faucon, Summer Said",
      title:
        "OPEC+ Mulls New Oil Production Cuts Amid Middle East Conflict - WSJ - The Wall Street Journal",
      description:
        "Saudi Arabia favors curb of up to 1 million barrels a day, while other members oppose downgrading quotas",
      url: "https://www.wsj.com/business/energy-oil/opec-mulls-new-oil-production-cuts-amid-middle-east-conflict-f37cef80",
      urlToImage: "https://images.wsj.net/im-893329/social",
      publishedAt: "2023-11-29T19:03:00Z",
      content:
        "OPEC and its Russia-led allies are considering new oil production cuts of as much as 1 million barrels a day, delegates said Wednesday, despite tensions in oil markets amid the \r\nconflict in the Midd… [+324 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Joel Achenbach",
      title:
        "Astronomers discover six planets orbiting a nearby sun-like star - The Washington Post",
      description:
        "The new planets could provide a breakthrough in understanding how planets form and why there are so many “sub Neptune” worlds in our galaxy.",
      url: "https://www.washingtonpost.com/science/2023/11/29/six-new-planets-found-nasa/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OIPWYLK4BHSP4JG2FNCMRBHJ2I.jpeg&w=1440",
      publishedAt: "2023-11-29T19:00:00Z",
      content:
        "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nAstronomers have discovered a six-pack of planets, formed at least 4 billion years ago and remarkably unchanged since, orbiting a near… [+5642 chars]",
    },
    {
      source: { id: null, name: "Video Games Chronicle" },
      author: "Tom Ivan",
      title:
        "Microsoft has detailed Xbox's November update | VGC - Video Games Chronicle",
      description: "It features a new Compact mode in the Xbox app on…",
      url: "https://www.videogameschronicle.com/news/microsoft-has-detailed-xboxs-november-update/",
      urlToImage:
        "https://www.videogameschronicle.com/files/2023/11/xbox-Compact-mode.jpg",
      publishedAt: "2023-11-29T18:58:21Z",
      content:
        "Microsoft has detailed Xboxs November update, which includes a number of new features for PC gamers.\r\nHighlighting this months update is a new Compact mode in the Xbox app on PC.\r\nMicrosoft describes… [+1250 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Dominic Raab denies Dominic Cummings made key pandemic decisions - BBC.com",
      description:
        "Boris Johnson's former deputy says Sajid Javid is wrong to suggest the PM was his chief adviser's \"puppet\".",
      url: "https://www.bbc.com/news/uk-politics-67570491",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1C39/production/_131852270_e72c0b43d5205b83e10aa3415e611c3e04c17aff.jpg",
      publishedAt: "2023-11-29T18:37:00Z",
      content:
        "By Chas GeigerBBC Politics \r\nDominic Raab has rejected a claim by a former cabinet colleague that many of the key government decisions at the start of the Covid pandemic were taken by Dominic Cumming… [+5904 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Terry Eliasen, Exec. Weather Producer",
      title:
        'Northern lights may be visible in New England during potential "severe geomagnetic storm" - CBS Boston',
      description:
        "We may have a somewhat rare and unique opportunity to see the northern lights in parts of New England.",
      url: "https://www.cbsnews.com/boston/news/northern-lights-geomagnetic-storm-aurora-borealis-new-england/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/29/deffddd5-bb15-4e74-91fd-eb3ec99fa4dc/thumbnail/1200x630/fea14ddbb0b6980dfa7301a84b7eb6e6/new-aurora.jpg?v=5659e73acd91751548aa89950cf015b0",
      publishedAt: "2023-11-29T18:28:00Z",
      content:
        "BOSTON - The northern lights are, by far, one of the most beautiful AND elusive phenomena in our nighttime sky.\r\nIf you have been lucky enough to catch a glimpse, it is something you never forget.  \r… [+2566 chars]",
    },
    {
      source: { id: null, name: "Entertainment Tonight" },
      author: "Meredith B. Kile",
      title:
        "Travis Kelce Shares His Nickname for Taylor Swift - Entertainment Tonight",
      description:
        "The Kansas City tight end sweetly thanked Swift for her support on a new episode of his 'New Heights' podcast.",
      url: "https://www.etonline.com/travis-kelce-shares-his-nickname-for-taylor-swift-215633",
      urlToImage:
        "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-11/ETD_DN_Travis_Taylor_Best_Quality_20231120.jpg?h=d1cb525d",
      publishedAt: "2023-11-29T18:27:00Z",
      content:
        "Travis Kelce can't stop gushing about his relationship with Taylor Swift!\r\nOn a new episode of his New Heights podcast with brother Jason Kelce on Wednesday, the Kansas City Chiefs tight end thanked … [+1294 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        'By <a href="/profiles/tara-subramaniam">Tara Subramaniam</a>, Antoinette Radford, <a href="/profiles/adrienne-vogt">Adrienne Vogt</a>, <a href="/profiles/aditi-sandal">Aditi Sangal</a> and <a href="/profiles/elise-hammond">Elise Hammond</a>, CNN',
      title: "Israel-Hamas truce enters sixth day: Live updates - CNN",
      description:
        "Diplomatic efforts are underway to maintain the pause in fighting as the truce between Israel and Hamas is in a sixth day. Follow for live updates.",
      url: "https://www.cnn.com/middleeast/live-news/israel-hamas-war-gaza-news-11-29-23/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/231128133735-gaza-destruccion-drone-super-tease.jpg",
      publishedAt: "2023-11-29T18:26:00Z",
      content:
        "The Israel Defense Forces said Wednesday it was assessing a Hamas claim that the youngest Israeli hostage, 10-month-old Kfir Bibas, his brother and his mother are no longer alive.\r\nThe armed wing of … [+1933 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "USA TODAY",
      title:
        "Democratic, GOP lawmakers bicker after Hunter Biden offers to testify - USA TODAY",
      description: null,
      url: "https://www.usatoday.com/story/news/politics/2023/11/29/democratic-gop-lawmakers-bicker-hunter-biden-testify/71740065007/",
      urlToImage: null,
      publishedAt: "2023-11-29T18:13:42Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=feb55acd0b874808bdfcb631ed154821"
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    console.log(parseDeta);
    this.setState({articles: parseDeta.articles})
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center text-danger my-5">
            Daily Pulse - News HeadLines
       </h1>
          <div className="row">
          {this.state.articles.map((element) => {
    return( <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title?element.title.slice(0, 50):""}
                description={element.description?element.description.slice(0, 89):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>)
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
