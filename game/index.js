import EthyriaVN from './ethyria-vn';

window.EthyriaVN = {
  startChapter(elementId, chapterNum = 1) {
    return new EthyriaVN(elementId, chapterNum);
  },
};

console.log('window.EthyriaVN');
