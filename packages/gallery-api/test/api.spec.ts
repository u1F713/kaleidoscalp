import {test} from 'vitest'
import {getResources} from '../src/api'
import {makeRuntime} from '../src/runtime.ts'

test('(api): get-resources', () => {
  const runtime = makeRuntime()
  runtime.runPromise(getResources())
})
