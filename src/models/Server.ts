import { Player } from './Player'

export interface Server {
  id?: string
  domain?: string
  ip: string
  port: number
  name?: string
  description?: string
  players?: Player[]
  countryCode?: string
  gameMode?: number
  version?: string
  passwordRequired?: boolean | null
  isDedicated?: boolean
}
