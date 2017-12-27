export const splitListToBuckets = (arr, buckets) => {
  let list = arr.slice(0)
  const chunks = new Array(buckets).fill(1).map(_ => [])

  let cnt = 0
  while (list && list.length) {
    chunks[cnt].push(list.pop())
    cnt = cnt === buckets - 1 ? 0 : cnt + 1
  }

  return chunks
}