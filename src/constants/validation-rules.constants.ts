export const requiredFileRules = [
  (files: File[]) => {
    return Boolean(files.length) || 'Файл обязателен к загрузке';
  },
];

export const requiredTextRules = [
  (text?: string) => Boolean(text) || 'Поле обязательно для заполнения',
];
