import { toQueryString } from '../src/helpers'

describe('helpers', () => {
  describe('toQueryString(object)', () => {
    it('should return empty string when no payload was given', async () => {
      const result = toQueryString({})
      expect(result).toEqual('')
    })

    it('should return query string with question mark (?) when there is one key given', async () => {
      const result = toQueryString({ foo: 'bar' })
      expect(result).toEqual('?foo=bar')
    })

    it('should return query string in alphabetical order on the keys', async () => {
      const result = toQueryString({ id: 123, email: 'john@doe.com' })
      expect(result).toEqual('?email=john@doe.com&id=123')
    })

    it('should handle key values that are array as string separated values by ,', async () => {
      const result = toQueryString({ status: [1,2,3], email: 'john@doe.com' })
      expect(result).toEqual('?email=john@doe.com&status=1,2,3')
    })
  })
})
