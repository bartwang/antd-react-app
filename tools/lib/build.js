import "colors";
import { exec } from "../exec";
import fsp from "fs-promise";
import { srcRoot, libRoot } from "../constants";
import buildBabel from "../buildBabel";

export const BuildCommonJs = () => {
  console.log("Building: ".cyan + "npm module".green);

  return exec(`rimraf ${libRoot}`)
    .then(() => fsp.mkdirs(libRoot))
    .then(() =>
      buildBabel(srcRoot, libRoot, {
        presets: [["env", { modules: false }], "stage-3", "react"],
        plugins: [
          "transform-runtime",
          "transform-class-properties",
          ["import", { libraryName: "antd", style: true }]
        ]
      })
    )
    .then(() => console.log("Built: ".cyan + "npm module".green));
};
