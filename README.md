# lsdis

[![npm](https://img.shields.io/npm/v/lsdis.svg)](https://www.npmjs.com/package/lsdis)
[![CircleCI](https://circleci.com/gh/joway/lsdis.svg?style=shield)](https://circleci.com/gh/joway/lsdis)

KV storage based on [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Feature

- Persistent data storage
- Low level Storage API and high level Cache API
- Support cache invalidate

## Usage

### LocalStorage

```typescript
import LocalStorage from 'lsdis'

const storage = new LocalStorage()
const mykey = 'mykey'
const myval = 'myval'
const timeoutMs = 1000

// set value with timeout(/ms)
storage.set(mykey, myval, timeoutMs)

// if not existed, return null else return string
storage.get(mykey)

// delete by key
storage.del(mykey)

// flush all localstorage
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
  // wrapper by key with function and args
  const result = await cache.wrapper(`getUser:${username}`, getUser, username)
  console.log(result)

  // wrapper by key with function
  const resultAsync = await cache.wrapper(`getUser:${username}`, async () => (getUser(username)))
  console.log(resultAsync)
}
```
