/* eslint no-process-exit: 0 */
import "colors";
import { BuildCommonJs } from "./lib/build";
import { BuildDistributable } from "./dist/build";

const Build = options =>
  Promise.all([BuildCommonJs(), BuildDistributable()]).then(() =>
    console.log("Built completed!".rainbow)
  );

Build().catch(err => {
  if (err.stack) {
    console.error(err.stack.red);
  } else {
    console.error(err.toString().red);
  }
  process.exit(1);
});
