import { getElements } from './lib/api/get-elements/get-elements'

export default async function Home() {
  const data = await getElements()
  console.log('DATA', data[0])

  return (
    <code>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </code>
  )
}
