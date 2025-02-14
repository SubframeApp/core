import { getLocalSyncSettings } from "./sync-settings"

// Whether or not to use the dev supabase url
// this is only used for internal debugging purposes
// and should not be used by end-users
export const isDev = process.argv.includes("--dev")

export const cwd = process.cwd()

export const localSyncSettings = getLocalSyncSettings(cwd)
