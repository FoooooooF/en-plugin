import axios from 'axios';

const YOUDAO_API_URL = 'https://openapi.youdao.com/api';

export const translateWord = async (word: string) => {
  try {
    const response = await axios.get(YOUDAO_API_URL, {
      params: {
        q: word,
        // 配置有道翻译 API 参数
      }
    });
    return response.data;
  } catch (error) {
    console.error('翻译失败', error);
    return null;
  }
};