import { aliases } from "./path-aliases.js";
import fs from "node:fs";

const paths = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => {
    const cleanKey = key.replace(/\/\*$/, "");
    return [
      key.includes("/*") ? key : `${cleanKey}`,
      [value.replace(/^.*\/app\//, "app/")],
    ];
  })
);

const jsconfig = {
  compilerOptions: {
    baseUrl: ".",
    paths,
  },
  include: ["app"],
};

fs.writeFileSync("jsconfig.json", JSON.stringify(jsconfig, null, 2));
console.log("✅ jsconfig.json updated.");
