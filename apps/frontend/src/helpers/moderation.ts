import { useFetch } from "#imports";

export type ModerationStatus = "approved" | "rejected" | "withheld";

export type ModerationCategory =
  | "title"
  | "slug"
  | "summary"
  | "description"
  | "links"
  | "categories"
  | "side-types"
  | "gallery"
  | "versions"
  | "copyright"
  | "rule-following"
  | "modpack-permissions"
  | "private-server";

export type ModerationStep = {
  id: ModerationCategory;
  question: string;
  shown?: boolean;
  rules?: string[];
  exceptions?: string[];
  options: string[];
};

export type ModerationOptionFiller = {
  id: string;
  question: string;
  required: boolean;
};

export type ModerationOption = {
  name: string;
  resultingMessage: string;
  shown?: boolean;
  fillers?: ModerationOptionFiller[];
};

export type ModerationModpackStatus =
  | "yes"
  | "with-attribution-and-source"
  | "with-attribution"
  | "no"
  | "permanent-no"
  | "unidentified";

export type ModerationMetaFile = {
  id?: string;
  title?: string;
  file_name?: string;
  url?: string;
  status?: ModerationModpackStatus;
};

export type ModerationModpackFile = {
  hash: string;
  fileName: string;
  file: ModerationMetaFile;
};

export type ModerationModpackFileMeta = {
  type: "unknown" | "flame" | "identified";
  file_name?: string;
  status?: ModerationModpackStatus | null;
  hash?: string;
  approved?: boolean | null;
  url?: string;
  id?: string;
  title?: string;
};

export type ModerationProjectMetadata = {
  identified: ModerationModpackFile[];
  flame_files: ModerationModpackFile[];
  unknown_files: ModerationModpackFile[];
};

export default async function getRawModerationMessage(
  category: ModerationCategory,
  message: string,
): Promise<string> {
  const response = await useFetch(`/moderation/msg/${category}/${message}`).catch((error) => {
    console.error(
      `Error fetching moderation message for category "${category}" and message "${message}":`,
      error,
    );
    throw new Error(`Failed to fetch moderation message: ${error.message}`);
  });

  return response.data.value!;
}
