import {component$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'

export default component$(() => {
  return <h1>The Bronze Bat</h1>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
}
