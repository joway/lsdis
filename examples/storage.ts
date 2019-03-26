import LocalStorage from '../src'

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
