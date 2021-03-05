import { Server } from '../models/Server'

export async function getNet64Servers(): Promise<Server[] | null> {
  try {
    const res = await fetch('https://smmdb.net/api/getnet64servers', {
      method: 'get'
    })
    return res.json()
  } catch (err) {
    return null
  }
}
