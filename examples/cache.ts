import { LocalCache } from '../src'

function getUser(username: string) {
  return { username }
}

const timeoutMs = 1000
const cache = new LocalCache({ timeout: timeoutMs })
const username = 'myname'

async function main() {
  const result = await cache.wrapper(`getUser:${username}`, getUser, username)
  console.log(result)

  const resultAsync = await cache.wrapper(`getUser:${username}`, async () => (getUser(username)))
  console.log(resultAsync)
}

main()
