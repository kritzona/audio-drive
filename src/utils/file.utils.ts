export const fileToBlob = async (file: File): Promise<Blob> => {
  const blobParts = [new Uint8Array(await file.arrayBuffer())];
  const blobOptions: BlobPropertyBag = { type: file.type };

  return new Blob(blobParts, blobOptions);
};

export const fileToBase64Url = async (file: File): Promise<string> => {
  const blob = await fileToBlob(file);

  return window.URL.createObjectURL(blob);
};
