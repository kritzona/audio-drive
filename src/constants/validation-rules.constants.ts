import { Messages } from './messages.constants';

/**
 * Правило валидации обязательности файловых полей
 */
export const requiredFileRules = [
  (files: File[]) => Boolean(files.length) || Messages.REQUIRED_FILE,
];

/**
 * Правило валидации обязательности текстовых полей
 */
export const requiredTextRules = [
  (text?: string) => Boolean(text) || Messages.REQUIRED_TEXT,
];
