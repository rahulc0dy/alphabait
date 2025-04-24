import fs from "fs/promises";
import path from "path";
import { z } from "zod";

export const AlphabetDataSchema = z.object({
  alphabet: z.string().min(1).max(1),
  pronunciation: z.object({
    // Updated regex: it expects a leading slash, one or more allowed IPA characters, then a trailing slash.
    ipa: z.string().regex(/^\/[^\/]+\/$/i, {
      message:
        "Invalid IPA format. It must be enclosed by '/' and contain only valid IPA characters.",
    }),
    spelling: z.string(),
  }),
  details: z.string(),
  regionalMappings: z.object({
    // If your regional mapping images (or vectors) are local, use z.string() instead of z.string().url()
    Bengali: z.string(),
    Hindi: z.string(),
  }),
  wordsData: z.array(
    z.object({
      word: z.string(),
      definition: z.string(),
      example: z.string(),
      // Local image path file so using string instead of .url()
      image: z.string(),
    })
  ),
  rhymes: z.array(
    z.object({
      name: z.string(),
      content: z.array(z.string()),
    })
  ),
});

export type AlphabetData = z.infer<typeof AlphabetDataSchema>;

/**
 * Fetches alphabet data from the JSON file for a specific letter
 * @param letter The letter to fetch data for
 * @returns The parsed alphabet data
 */
export async function getAlphabetData(
  letter: string
): Promise<AlphabetData | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "alphabet-data",
      `${letter.toLowerCase()}.json`
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // Validate the data against our schema
    const result = AlphabetDataSchema.safeParse(data);
    if (!result.success) {
      console.error(`Invalid data format for letter ${letter}:`, result.error);
      return null;
    }

    return result.data;
  } catch (error) {
    console.error(`Error loading alphabet data for letter ${letter}:`, error);
    return null;
  }
}

/**
 * Gets all available alphabet letters that have data files
 * @returns Array of available alphabet letters
 */
export async function getAvailableAlphabets(): Promise<string[]> {
  try {
    const dataDir = path.join(process.cwd(), "data", "alphabet-data");
    const files = await fs.readdir(dataDir);

    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => path.basename(file, ".json"));
  } catch (error) {
    console.error("Error getting available alphabets:", error);
    return [];
  }
}
