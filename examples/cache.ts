import { LocalCache } from '../src'

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
