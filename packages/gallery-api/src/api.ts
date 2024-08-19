import {Effect} from 'effect'
import {GalleryContext} from './cloudinaryContext.ts'
import {Schema as S} from '@effect/schema'
import {Resource} from './schemas/Resource.ts'

export const getResources = (prefix?: string) =>
  Effect.gen(function* () {
    const {cloudinary} = yield* GalleryContext
    const {api} = yield* cloudinary

    const {resources}: {resources: Resource[]} = yield* Effect.tryPromise({
      try: () => api.resources({type: 'upload', max_results: 50, prefix}),
      catch: () => new Error()
    })

    return yield* S.decode(S.Array(Resource))(resources)
  })
