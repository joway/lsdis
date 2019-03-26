import * as bluebird from 'bluebird'
import lsdis from '../src'

test('lsdis simple get', () => {
  const ls = new lsdis()
  ls.set('test', 'val', 1000)
  const v = ls.get('test')
  expect(v).toBe('val')
})

test('lsdis timeout', async () => {
  const ls = new lsdis()
  ls.set('test', 'val', 1)

  await bluebird.delay(1)
  const v = ls.get('test')
  expect(v).toBeNull()
})

test('lsdis flush', async () => {
  const ls = new lsdis()
  ls.set('test', 'val')
  let v = ls.get('test')
  expect(v).toBe('val')

  ls.flush()
  v = ls.get('test')
  expect(v).toBeNull()
})
