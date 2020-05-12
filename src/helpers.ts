/**
 *
 * @param {object} query
 */
export function toQueryString (query: {[key: string]: any}): string {
  const params = Object.keys(Object(query))
    .sort()
    .map(key => {
      let value = query[key]
      if (Array.isArray(value)) {
        value = value.join()
      }
      return `${key}=${value}`
    })
    .join('&')
  return params ? `?${params}` : ''
}
