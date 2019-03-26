# lsdis

[![npm](https://img.shields.io/npm/v/lsdis.svg)](https://www.npmjs.com/package/lsdis)
[![CircleCI](https://circleci.com/gh/joway/lsdis.svg?style=shield)](https://circleci.com/gh/joway/lsdis)

KV storage based on [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Usage

### LocalStorage

```typescript
import LocalStorage from 'lsdis'

const storage = new LocalStorage()
const mykey = 'mykey'
const myval = 'myval'
const timeoutMs = 1000

storage.set(mykey, myval, timeoutMs)
storage.get(mykey)
storage.del(mykey)
storage.flush()
```

### LocalCache

```typescript
import { LocalCache } from 'lsdis'

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
```
