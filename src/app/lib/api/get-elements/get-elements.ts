import { Element, PaginatedResponse, elementsResultSchema } from './types'

export async function getElements(): Promise<Element[]> {
  const response = await fetch('http://localhost:3000/api/sample').then((res) => res.json() as unknown as PaginatedResponse<ElementsResult>)

  const { results } = response

  // check valid response
  const validation = elementsResultSchema.safeParse(results)
  if (!validation.success) {
    console.error('response for getElements is invalid', validation.error)
    return results
  }

  return validation.data
}
