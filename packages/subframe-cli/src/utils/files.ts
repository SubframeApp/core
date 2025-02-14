import fs from "fs"
import { IGNORE_UPDATE_KEYWORD } from "shared/constants"
import path from "path"

export function isFileContentsWriteable(contents: string | Buffer): boolean {
  return contents.indexOf(IGNORE_UPDATE_KEYWORD) < 0
}

export async function getAllAbsFilePaths(directoryPath: string): Promise<string[]> {
  const childrenFiles = await fs.promises.readdir(directoryPath)
  const allFiles: string[][] = await Promise.all(
    childrenFiles.map(async (file) => {
      const absPath = path.join(directoryPath, file)
      const stats = await fs.promises.stat(absPath)
      if (stats.isDirectory()) {
        return getAllAbsFilePaths(absPath)
      } else {
        return [absPath]
      }
    }),
  )

  return allFiles.flat()
}
