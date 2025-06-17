// import { useFetch } from "#imports";

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

export type ModerationOptionFiller = {
  id: string; // should be ModerationCategory but noooooooo
  question: string;
  required?: boolean;
  large?: boolean;
  value?: string;
};

export type ModerationOption = {
  name: string;
  resultingMessage: string;
  shown?: boolean;
  fillers?: ModerationOptionFiller[];
};

export type ModerationStep = {
  id: string;
  question: string;
  shown: boolean;
  rules?: string[];
  examples?: string[];
  exceptions?: string[];
  navigate?: string;
  options?: ModerationOption[];
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
  proof?: string;
};

export type ModerationProjectMetadata = {
  identified: ModerationModpackFile[];
  flame_files: ModerationModpackFile[];
  unknown_files: ModerationModpackFile[];
};
