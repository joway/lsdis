import LocalStorage from './storage'
import { StorageQuotaLimited } from './error'

export interface CacheConfig {
  timeout?: number
}

export default class LocalCache {
  storage: LocalStorage
  config: CacheConfig

  constructor(config: CacheConfig) {
    this.config = config
    this.storage = new LocalStorage()
  }

  wrapper(key: string, func: Function, ...args: any[]) {
    const val = this.storage.get(key)
    if (val) return val

    return Promise.resolve(func(...args)).then(newVal => {
      try {
        this.storage.set(key, newVal, this.config.timeout || -1)
      } catch (err) {
        if (err instanceof StorageQuotaLimited) {
          this.storage.flush()
        } else {
          console.error(err)
        }
      }
      return newVal
    })
  }
}
