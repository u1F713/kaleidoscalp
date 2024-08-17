import {Context, Effect} from 'effect'
import {type ConfigError} from 'effect/ConfigError'
import cloudinary from 'cloudinary'

export class GalleryContext extends Context.Tag('cloudinary')<
  GalleryContext,
  {
    readonly cloudinary: Effect.Effect<typeof cloudinary.v2, ConfigError>
  }
>() {}
