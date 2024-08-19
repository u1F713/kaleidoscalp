import {Schema as S} from '@effect/schema'

export const Resource = S.Struct({
  public_id: S.String,
  resource_type: S.String,
  created_at: S.String,
  secure_url: S.String,
  height: S.Int,
  width: S.Int
})

export type Resource = typeof Resource.Type
