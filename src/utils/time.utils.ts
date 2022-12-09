import moment from 'moment';

/**
 * Форматирование секунд в минуты и секунды
 * по шаблону "минуты:секунды"
 *
 * @param seconds Секунды
 * @returns Отформатированное время
 */
export const secondsToTime = (seconds: number) => {
  return moment.utc(seconds * 1000).format('mm:ss');
};
