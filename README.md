# lsdis

[![npm](https://img.shields.io/npm/v/lsdis.svg)](https://www.npmjs.com/package/lsdis)
[![CircleCI](https://circleci.com/gh/joway/lsdis.svg?style=shield)](https://circleci.com/gh/joway/lsdis)

KV storage based on LocalStorage like redis.

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

function sum(a: number, b: number) {
  return a + b
}

const timeoutMs = 1000
const cache = new LocalCache({ timeout: timeoutMs })
const a = 1
const b = 2

cache.wrapper(`sum:${a}+${b}`, sum, a, b)
  .then((result: string) => {
    console.log(result)
  })
```
