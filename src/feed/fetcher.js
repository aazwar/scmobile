const axios = require('axios');
import { AsyncStorage } from 'react-native';
import moment from 'moment';

function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

export async function fetchTaamim(force = false) {
  let now = moment().format('YYYY-MM-DD');
  let taamimFetchDate = await AsyncStorage.getItem('taamimFetchDate');
  let taamims = await AsyncStorage.getItem('taamims').then(str => JSON.parse(str));

  // No need to fetch. use stored taamim
  if (now == taamimFetchDate && taamims != null && !force) {
    return taamims;
  }

  try {
    const response = await axios.get('https://saudiculture.jp/taamimat/?lang=ar');
    let regex = /href="(.*?\/taamimat\/(\d+)\/\?lang=ar)">(.*?)</g;
    let taamims = [];
    let matches;
    while ((matches = regex.exec(response.data))) {
      taamims.push({
        id: matches[2],
        title: decodeHtmlEntity(matches[3]),
        url: matches[1],
      });
    }
    AsyncStorage.setItem('taamims', JSON.stringify(taamims));
    AsyncStorage.setItem('taamimFetchDate', now);
    return taamims;
  } catch (error) {
    console.error(error);
    return taamims || [];
  }
}

export async function fetchNews(lang, force = false) {
  let url = `https://saudiculture.jp/news/?lang=${lang}`;
  let now = moment().format('YYYY-MM-DD');
  await AsyncStorage.clear();
  let newsFetchDate = await AsyncStorage.getItem(`newsFetchDate${lang}`);
  let news = await AsyncStorage.getItem(`news-${lang}`).then(str => JSON.parse(str));

  // No need to fetch. use stored news
  if (now == newsFetchDate && news != null && news.length > 0 && !force) {
    return news;
  }

  try {
    const response = await axios.get(url);
    let regex = new RegExp(`href="(.*?\\/news\\/(\\d+)\\/\\?lang=${lang})">(.*?)<`, 'g');
    let news = [];
    let matches;
    while ((matches = regex.exec(response.data))) {
      news.push({
        id: matches[2],
        title: decodeHtmlEntity(matches[3]),
        url: matches[1],
      });
    }
    AsyncStorage.setItem(`news-${lang}`, JSON.stringify(news));
    AsyncStorage.setItem(`newsFetchDate${lang}`, now);
    return news;
  } catch (error) {
    console.error(error);
    return taamims || [];
  }
}

export async function fetchContent(url) {
  let [, type, id] = url.match(/(\w+)\/(\d+)/);
  let record = await AsyncStorage.getItem(`@${type}-${id}`).then(str => JSON.parse(str));
  if (record != null) return record;
  try {
    const { data } = await axios.get(url);
    let [, date] = data.match(/<div class="contentHeader">([\d\/年月日]+)<\/div>/);
    let [content] = data.match(/<div class="boxContent">([^]*)<div style="clear: both">&nbsp;<\/div>/gm);
    let record = { date, content };
    AsyncStorage.setItem(`@${type}-${id}`, JSON.stringify(record));
    return record;
  } catch (error) {
    console.error(error);
  }
}
