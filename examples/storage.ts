import LocalStorage from '../src'

const storage = new LocalStorage()
const mykey = 'mykey'
const myval = 'myval'
const timeoutMs = 1000

storage.set(mykey, myval, timeoutMs)
storage.get(mykey)
storage.del(mykey)
storage.flush()
