import exifr from "exifr";

export interface ExifData {
  dateTaken?: Date;
  latitude?: number;
  longitude?: number;
  width?: number;
  height?: number;
  camera?: string;
}

export async function extractExif(file: File): Promise<ExifData> {
  try {
    const output = await exifr.parse(file, {
      pick: ["DateTimeOriginal", "CreateDate", "latitude", "longitude", "ImageWidth", "ImageHeight", "Model"],
    });

    if (!output) return {};

    return {
      dateTaken: output.DateTimeOriginal || output.CreateDate || undefined,
      latitude: output.latitude || undefined,
      longitude: output.longitude || undefined,
      width: output.ImageWidth || undefined,
      height: output.ImageHeight || undefined,
      camera: output.Model || undefined,
    };
  } catch {
    return {};
  }
}
