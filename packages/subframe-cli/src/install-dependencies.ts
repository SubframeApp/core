import { execa } from "execa"
import prompts from "prompts"
import { coerce, lt } from "semver"
import { AUTOINSTALLED_DEPENDENCIES } from "./constants"
import { abortOnState } from "./sync-helpers"
import {
  getInstalledPackageVersion,
  getLatestPackageVersion,
  getPackageManager,
  makePackageSpecifier,
} from "./utils/package-managers"

/**
 * Installs the dependencies that are required for Subframe to work
 *
 * - checks if the dependencies are already installed and up-to-date
 * - if not, asks the user if they want to install/update them
 * - if yes, installs/updates them
 * - if no, does nothing
 */
export async function installDependencies(cwd: string) {
  const packageManager = await getPackageManager(cwd)

  const toInstall = new Map<string, string>()

  for (const [packageName, packageVersion] of Object.entries(AUTOINSTALLED_DEPENDENCIES)) {
    const installedVersion = await getInstalledPackageVersion(packageName, cwd).then(coerce)
    const targetVersion = packageVersion === "latest" ? await getLatestPackageVersion(packageName) : packageVersion

    if (!installedVersion) {
      toInstall.set(packageName, targetVersion)
    } else {
      if (installedVersion === null) {
        toInstall.set(packageName, targetVersion)
        continue
      }

      if (lt(installedVersion, targetVersion)) {
        toInstall.set(packageName, targetVersion)
      }
    }
  }

  if (toInstall.size === 0) {
    return
  }

  const packageSpecifiers = Array.from(toInstall.entries()).map(([packageName, packageVersion]) =>
    makePackageSpecifier(packageName, packageVersion),
  )

  const response = await prompts({
    type: "confirm",
    name: "install",
    initial: true,
    message: [
      "Subframe requires the latest version of @subframe/core and the following dependencies:",
      packageSpecifiers.map((specifier) => `- ${specifier}`).join("\n"),
      "Do you wish to install them?",
    ].join("\n"),
    onState: abortOnState,
  })

  if (!response.install) {
    return
  }

  await execa(packageManager, [packageManager === "yarn" ? "add" : "install", ...packageSpecifiers])
    .pipeStdout?.(process.stdout)
    .pipeStderr?.(process.stderr)
}
