const axios = require('axios');
import { AsyncStorage } from 'react-native';
import { Toast } from 'native-base';
import moment from 'moment';

function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

function connectionError() {
  Toast.show({
    text: 'لا يوجد اتصال بالإنترنت',
    type: 'warning',
    textStyle: { textAlign: 'right' },
    buttonText: 'أوك',
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
    connectionError();
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
    connectionError();
    console.error(error);
    return taamims || [];
  }
}

export async function fetchContent(url) {
  let [, type, id] = url.match(/(\w+)\/(\d+)/);
  //let record = await AsyncStorage.getItem(`@${type}-${id}`).then(str => JSON.parse(str));
  let record = null;

  let decode = function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  };

  if (record != null) return record;
  try {
    const { data } = await axios.get(url);
    let [, date] = data.match(/<div class="contentHeader">([\d\/年月日]+)<\/div>/);
    let [content] = data.match(/<div class="boxContent">([^]*)<div style="clear: both">&nbsp;<\/div>/gm);
    content = decode(content);
    content = content.replace(/<br[ \/]?>/g, '\n');
    content = content.replace(/&nbsp;/g, ' ');
    let elements = [];
    let regexes = [
      { type: 'h2', regex: /<h2>(.*?)\s*<\/h2>/gm },
      { type: 'p', regex: /<p[^>]*>((?!<a).*?)<\/p>/gm },
      { type: 'img', regex: /(?:<p[^>]*>)?<a href="(.*?(png|jpe?g|gif))">.*<\/a>(?:<\/p[^>]*>)?/gm },
    ];
    regexes.forEach(e => {
      while ((match = e.regex.exec(data)) != null) {
        if (e.type == 'p') {
          let text = match[1].replace(/<[^>]*>/g, '');
          elements.push({ index: match.index, type: e.type, text });
        } else {
          elements.push({ index: match.index, type: e.type, text: match[1] });
        }
      }
    });
    elements.sort((a, b) => a.index - b.index);

    let record = { date, elements };

    AsyncStorage.setItem(`@${type}-${id}`, JSON.stringify(record));
    return record;
  } catch (error) {
    connectionError();
    console.error(error);
  }
}

export async function fetchSCSite(url) {
  try {
    const { data } = await axios.get(url);
    let [content] = data.match(/<div class="boxContent">([^]*)<div (style="clear: both"|id="right-content")/gm);
    let match = data.match(/<h2>(.+)<\/h2>/);
    if (match) {
      title = match[1];
    } else {
      match = data.match(/<title>(.+)<\/title>/);
      if (match) {
        title = match[1];
      } else {
        title = '';
      }
    }
    return { content, title };
  } catch (error) {
    //connectionError();
    console.error(error);
  }
}
