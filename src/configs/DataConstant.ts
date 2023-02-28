const languageCodes = [
  {code: 'vi', tag: 'vi-VN'},
  {code: 'en', tag: 'en-US'},
  {code: 'ja', tag: 'ja-JP'},
];

const appLanguage = {
  VietNam: {key: 1, label: 'Tiếng Việt', value: 'vi-VN'},
  English: {key: 2, label: 'English', value: 'en-US'},
  Japan: {key: 3, label: '日本語', value: 'ja-JP'},
};

export const DataConstant = {
  LANGUAGE_CODE: languageCodes,
  LANGUAGES: appLanguage,
};
