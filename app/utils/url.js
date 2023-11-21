const PREFIX =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://';
export const BASE_URL = `${PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}`;
