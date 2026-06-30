export type Strumento = 'chitarra' | 'chitarra-12' | 'ukulele'

export type Tuning = {
  slug: string
  name: string
  notes: string[]
  frequencies: number[]
  categoria: string
  strumento: Strumento
}

export const tunings: Tuning[] = [
  // Accordature di base — chitarra
  {
    slug: 'standard',
    name: 'Standard EADGBE',
    notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    frequencies: [82.4, 110.0, 146.8, 196.0, 246.9, 329.6],
    categoria: 'accordature-di-base',
    strumento: 'chitarra',
  },
  {
    slug: 'standard-12',
    name: 'Standard chitarra 12 corde',
    notes: ['E2/E3', 'A2/A3', 'D3/D4', 'G3/G4', 'B3/B3', 'E4/E4'],
    frequencies: [82.4, 110.0, 146.8, 196.0, 246.9, 329.6],
    categoria: 'accordature-di-base',
    strumento: 'chitarra-12',
  },
  {
    slug: 'ukulele-gcea',
    name: 'Ukulele standard GCEA',
    notes: ['G4', 'C4', 'E4', 'A4'],
    frequencies: [392.0, 261.6, 329.6, 440.0],
    categoria: 'accordature-di-base',
    strumento: 'ukulele',
  },
  {
    slug: 'ukulele-baritono',
    name: 'Ukulele baritono DGBE',
    notes: ['D3', 'G3', 'B3', 'E4'],
    frequencies: [146.8, 196.0, 246.9, 329.6],
    categoria: 'accordature-di-base',
    strumento: 'ukulele',
  },
  // Accordature alternative
  {
    slug: 'drop-d',
    name: 'Drop D',
    notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    frequencies: [73.4, 110.0, 146.8, 196.0, 246.9, 329.6],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'double-drop-d',
    name: 'Double Drop D',
    notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'D4'],
    frequencies: [73.4, 110.0, 146.8, 196.0, 246.9, 293.7],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'open-g',
    name: 'Open G',
    notes: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'],
    frequencies: [73.4, 98.0, 146.8, 196.0, 246.9, 293.7],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'open-d',
    name: 'Open D',
    notes: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'],
    frequencies: [73.4, 110.0, 146.8, 185.0, 220.0, 293.7],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'open-c',
    name: 'Open C',
    notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'],
    frequencies: [65.4, 98.0, 130.8, 196.0, 261.6, 329.6],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'open-e',
    name: 'Open E',
    notes: ['E2', 'B2', 'E3', 'G#3', 'B3', 'E4'],
    frequencies: [82.4, 123.5, 164.8, 207.7, 246.9, 329.6],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'dadgad',
    name: 'DADGAD',
    notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
    frequencies: [73.4, 110.0, 146.8, 196.0, 220.0, 293.7],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
  {
    slug: 'nashville',
    name: 'Nashville Tuning',
    notes: ['E3', 'A3', 'D4', 'G4', 'B3', 'E4'],
    frequencies: [164.8, 220.0, 293.7, 392.0, 246.9, 329.6],
    categoria: 'accordature-alternative',
    strumento: 'chitarra',
  },
]

export function getTuningBySlug(slug: string): Tuning | undefined {
  return tunings.find((t) => t.slug === slug)
}
