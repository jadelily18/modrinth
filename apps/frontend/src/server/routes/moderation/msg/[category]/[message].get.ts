import * as path from "node:path";
import * as fs from "node:fs";

export default defineEventHandler(async (event) => {
  // const { category, message } = event.context.params;
  const { category, message } = getRouterParams(event);

  const filePath = path.join(
    process.cwd(),
    "src",
    "public",
    "moderation",
    "message",
    category,
    `${message}.md`,
  );
  const data = await fs.promises.readFile(filePath, "utf-8").catch((err) => {
    console.error(`Error reading file ${filePath}:`, err);
  });
  return data;
});
