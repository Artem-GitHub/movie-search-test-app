import type { UrlsType } from '@/types';
const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

if (!baseApiUrl) {
  throw new Error('VITE_BASE_API_URL not found in env file');
}

const urls: UrlsType = {
  movie: `${baseApiUrl}/movie`,
};

export default urls;
