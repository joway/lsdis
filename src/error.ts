export class StorageQuotaLimited extends Error {
  constructor(message?: string) {
    super(message || 'Storage Hit Quota')
    this.name = StorageQuotaLimited.name
  }
}
