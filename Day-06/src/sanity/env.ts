export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk2ON2osaSgBNaTOrOgXpvpPS4Gr0YiFYJN5FRI22NwVhlFqdGQvNxCNwVF6DggKRJncHyHcex67uq2klaoP8YNgB2URD3hDFnwJbzqLIDzJ6KZsfXqhtneGyN2X9lWaQFDZkpYxJFF7DEBlgzixvf8W9K1oJ0qvKgWl98oNyNa5wxQSVUku",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
