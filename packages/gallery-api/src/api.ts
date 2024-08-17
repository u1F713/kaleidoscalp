import {Effect, pipe} from 'effect'
import {Schema as S} from '@effect/schema'
import {GalleryContext} from './cloudinaryContext.ts'
import {Resource} from './schemas/Resource.ts'

export const getResources = (prefix?: string) =>
  pipe(
    GalleryContext,
    Effect.flatMap(ctx => ctx.cloudinary),
    Effect.tryMapPromise({
      try: ctx =>
        ctx.api
          .resources({type: 'upload', max_results: 50, prefix})
          .then(S.decode(S.Array(Resource))),
      catch: err => err
    })
  )
