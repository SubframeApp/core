import { makeNodeLogger } from "shared/logger/logger-node"

const ANONYMOUS_CLI_USER_ID = "ANONYMOUS_CLI_USER-db6a3ec1-756a-4931-acdd-ec29f531603c"

export function makeCLILogger() {
  return makeNodeLogger(ANONYMOUS_CLI_USER_ID)
}
