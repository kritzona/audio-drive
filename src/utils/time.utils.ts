import moment from 'moment';

export const secondsToTime = (seconds: number) => {
  return moment.utc(seconds * 1000).format('mm:ss');
};
