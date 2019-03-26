import { LocalCache } from '../src'

function getUser(username: string) {
  return { username }
}

const timeoutMs = 1000
const cache = new LocalCache({ timeout: timeoutMs })
const username = 'myname'

async function main() {
  // wrapper by key with function and args
  const result = await cache.wrapper(`getUser:${username}`, getUser, username)
  console.log(result)

  // wrapper by key with async function
  const resultAsync = await cache.wrapper(`getUser:${username}`, async () => (getUser(username)))
  console.log(resultAsync)
}

main()
