import {test} from 'vitest'
import {getResources} from '../src/api'
import {makeRuntime} from '../src/runtime.ts'

test('(api): get-resources', async () => {
  const runtime = makeRuntime()
  await runtime.runPromise(getResources())
})
