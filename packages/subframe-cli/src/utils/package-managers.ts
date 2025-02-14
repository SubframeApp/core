import { detect } from "@antfu/ni"
import { execa } from "execa"
import { readFile } from "fs/promises"

type PackageManager = "yarn" | "pnpm" | "npm"

export async function getInstalledPackageVersion(packageName: string, cwd: string): Promise<string | null> {
  try {
    const packageJSON: { dependencies: Record<string, string> } = await readFile(`${cwd}/package.json`, "utf-8").then(
      JSON.parse,
    )

    if (!packageJSON.dependencies) {
      return null
    }

    if (!packageJSON.dependencies[packageName]) {
      return null
    }

    return packageJSON.dependencies[packageName]
  } catch (e) {
    return null
  }
}

export async function getPackageManager(cwd: string): Promise<PackageManager> {
  const packageManager = await detect({ programmatic: true, cwd: cwd })

  if (packageManager === "yarn@berry") return "yarn"
  if (packageManager === "pnpm@6") return "pnpm"
  if (packageManager === "bun") return "npm"

  return packageManager ?? "npm"
}

export async function getLatestPackageVersion(packageName: string) {
  return execa("curl", [`https://registry.npmjs.org/${packageName}/latest`])
    .then((result) => result.stdout)
    .then((result) => JSON.parse(result))
    .then((result) => result.version)
}

export function makePackageSpecifier(packageName: string, packageVersion: string) {
  return `${packageName}@${packageVersion}`
}
