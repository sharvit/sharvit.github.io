import path from "path";
import fs from "fs";
import yaml from "yaml";

import { IAuthorProfile } from "./types";

export const getAuthorProfile = (): IAuthorProfile => {
  const yamlString = fs.readFileSync(
    path.resolve(__dirname, "./author.yaml"),
    "utf8",
  );
  const { profile } = yaml.parse(yamlString) as { profile: IAuthorProfile };

  return profile;
};
