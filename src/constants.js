const COLLECTION_IDS = {
  Wallpapers: ["137627","1127828","343012","220388","151521","403","402","335992","1494572","1610448"],
  Nature: ["212915","244339","158642","327760","319663","143203","658265","444975","1157","367159"],
  Animals: ["181581","1424240","325839","444531","862524","158825","949479","208","3330452","490166"],
  Fashion: ["1051","119940","245314","1358076","3356576","1995472","1458318","1761194","1503724","474017"],
  People: ["159213","719","787231","181462","1238","368775","141745","356864","140368","142324"]
};

const COLLECTIONS = ["Wallpapers", "Nature", "Animals", "Fashion", "People"];

const BASEURL = "https://api.unsplash.com/search/photos";
const CLIENT_ID =
  "bdafd9c0457f994a91c042f1445ff058ee00fbbe745f642d5037ba1dd170c157";

const GET_RANDOM = array => array[Math.floor((Math.random()*array.length))];

export { BASEURL, CLIENT_ID, COLLECTIONS, COLLECTION_IDS, GET_RANDOM };
