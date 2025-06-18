// import { useFetch } from "#imports";

export type ChecklistCategory =
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

export type ChecklistOptionFiller = {
  id: string; // should be ModerationCategory but noooooooo
  question: string;
  required?: boolean;
  large?: boolean;
  value?: string;
};

export type ChecklistOption = {
  name: string;
  resultingMessage: string;
  shown?: boolean;
  fillers?: ChecklistOptionFiller[];
};

export type ChecklistStep = {
  id: string;
  question: string;
  shown: boolean;
  rules?: string[];
  examples?: string[];
  exceptions?: string[];
  navigate?: string;
  options?: ChecklistOption[];
};

export type ChecklistModpackApprovalType =
  | "yes"
  | "with-attribution-and-source"
  | "with-attribution"
  | "no"
  | "permanent-no"
  | "unidentified";

export type ChecklistModpackEntryMeta = {
  type: "unknown" | "flame" | "identified";
  file_name?: string;
  status?: ChecklistModpackApprovalType | null;
  hash?: string;
  approved?: boolean | null;
  url?: string;
  id?: string;
  title?: string;
  proof?: string;
  link?: string;
};

export type ChecklistModpackIdentifiedFile = {
  file_name: string;
  status: ChecklistModpackApprovalType;
};

export type ChecklistModpackMissingMetaFlameFile = {
  title: string;
  file_name: string;
  url: string;
  id: number;
};

export type ChecklistModpackProjectMetadata = {
  identified: Map<string, ChecklistModpackIdentifiedFile[]>;
  flame_files: Map<string, ChecklistModpackMissingMetaFlameFile[]>;
  unknown_files: Map<string, string>;
};
