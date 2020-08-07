# lsdis

[![npm](https://img.shields.io/npm/v/lsdis.svg)](https://www.npmjs.com/package/lsdis)
[![CircleCI](https://circleci.com/gh/joway/lsdis.svg?style=shield)](https://circleci.com/gh/joway/lsdis)

KV storage based on [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Purpose

Cache requests with localStorage in the browser.

## Install

```bash
# nodejs
npm i -S lsdis
```

Or

```html
<!-- browser -->
<script src='https://cdn.jsdelivr.net/npm/lsdis@latest/dist/lsdis.min.js'></script>
```

## Feature

- Local storage API
- Cache wrapper
- Cache invalidate

## Usage

### LocalStorage - Low Level API

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

### LocalCache - High Level API

```typescript
import { LocalCache } from 'lsdis'

function getUser(username: string) {
  // fetch request data
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
  const resultAsync = await cache.wrapper(`getUser:${username}`, async () => getUser(username))
  console.log(resultAsync)
}
```
