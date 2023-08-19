import * as crypto from 'crypto';

export const generateRandomId = (...suffix: string[]): string => {
  let uuid = '';
  suffix.map((str) => {
    uuid = uuid + '-' + str;
  });

  return uuid.substring(1);
};

export const getRandomString = (size: number): string => {
  return crypto.randomBytes(size / 2 || 5).toString('hex');
};

export const getToday = (time?: Date): string => {
  const date = time || getLocalTime();
  const year = date.getFullYear().toString();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return year.substring(2, 4) + month + day;
};

export const getLocalTime = (): Date => {
  const now = new Date();
  return new Date(
    now.getTime() + now.getTimezoneOffset() * 60 * 1000 + 9 * 60 * 60 * 1000,
  );
};
