/**
 * Конвертация файла в Blob
 *
 * @param file Файл
 * @returns Blob
 */
export const fileToBlob = async (file: File): Promise<Blob> => {
  const blobParts = [new Uint8Array(await file.arrayBuffer())];
  const blobOptions: BlobPropertyBag = { type: file.type };

  return new Blob(blobParts, blobOptions);
};

/**
 * Конвертация файла в base64-ссылку
 *
 * @param file Файл
 * @returns Ссылка на файл, которая содержит тип
 * и содержимое файла в виде base64-строки
 */
export const fileToBase64Url = async (file: File): Promise<string> => {
  const blob = await fileToBlob(file);

  const reader = new FileReader();
  reader.readAsDataURL(blob);

  return new Promise((resolve) => {
    reader.onload = () => {
      typeof reader.result === 'string' && resolve(reader.result);
    };
  });
};
