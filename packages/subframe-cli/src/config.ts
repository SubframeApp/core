import fs from "fs"
import path from "path"
import XDGAppPaths from "xdg-app-paths"

const SUBFRAME_DIRECTORY = XDGAppPaths("com.subframe.cli").dataDirs()[0]
const SUBFRAME_AUTH_CONFIG_PATH = path.join(SUBFRAME_DIRECTORY, "auth.json")

interface AuthConfig {
  token: string
}

export function readAuthConfig(): AuthConfig | null {
  try {
    if (!fs.existsSync(SUBFRAME_AUTH_CONFIG_PATH)) {
      return null
    }

    const rawConfig = fs.readFileSync(SUBFRAME_AUTH_CONFIG_PATH, "utf8")
    const config = JSON.parse(rawConfig)

    if (typeof config !== "object" || config === null) {
      return null
    }

    if (typeof config.token !== "string") {
      return null
    }

    return config
  } catch (err) {
    return null
  }
}

export async function writeAuthConfig(authConfig: AuthConfig): Promise<void> {
  fs.mkdirSync(SUBFRAME_DIRECTORY, { recursive: true })

  fs.writeFileSync(SUBFRAME_AUTH_CONFIG_PATH, JSON.stringify(authConfig, null, 2))
}
