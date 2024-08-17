import {Config, Effect, Layer, ManagedRuntime} from 'effect'
import cloudinary from 'cloudinary'

import {GalleryContext} from './cloudinaryContext.ts'

export const cloudinaryLive = Layer.succeed(GalleryContext, {
  cloudinary: Effect.gen(function* () {
    cloudinary.v2.config({
      secure: true,
      cloud_name: yield* Config.string('CLOUDINARY_CLOUD_NAME'),
      api_key: yield* Config.string('CLOUDINARY_API_KEY'),
      api_secret: yield* Config.string('CLOUDINARY_API_SECRET')
    })

    return cloudinary.v2
  })
})

export function makeRuntime() {
  return ManagedRuntime.make(cloudinaryLive)
}
