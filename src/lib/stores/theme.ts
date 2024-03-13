import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

type Theme = 'skeleton' | 'wintry' | 'modern' | 'seafoam' | 'gold-nouveau'
const theme: Writable<Theme> = writable<Theme>('wintry')

export { theme }
export type { Theme }
