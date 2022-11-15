import { Messages } from './messages.constants';

export const requiredFileRules = [
  (files: File[]) => Boolean(files.length) || Messages.REQUIRED_FILE,
];

export const requiredTextRules = [
  (text?: string) => Boolean(text) || Messages.REQUIRED_TEXT,
];
