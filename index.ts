import { openFile } from "./openFile";
import * as fs from "fs";
function writeFile(path: string) {
  using file = openFile(path)
  fs.writeFileSync(file.handle, "Permanent")

  if (path.includes("temp")) {
    return
  }

  fs.writeSync(file.handle, "Permanent")
}

writeFile("file.txt")
writeFile("temp.txt")