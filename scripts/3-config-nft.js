import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6b65e341bCF2A22Db7ffBeDbbAee23a8f38a7Db5",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Let's study together",
        description: "This NFT will give you access to StudyDAO!",
        image: readFileSync("scripts/assets/Studydao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()