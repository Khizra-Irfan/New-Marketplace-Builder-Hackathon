import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import order from './order'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, Category, order],
}
