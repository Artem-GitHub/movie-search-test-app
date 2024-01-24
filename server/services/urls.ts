import type { UrlsType } from '@/types';

const config = useRuntimeConfig();
const externalApiUrl = config.public.VITE_EXTERNAL_API_URL;

if (!externalApiUrl)
  throw new Error('VITE_EXTERNAL_API_URL not found in env file');

const urls: UrlsType = {
  movie: `${externalApiUrl}/movie`,
};

export default urls;