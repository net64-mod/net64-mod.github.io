import { Server } from '../models/Server'
import axios from 'axios'

export async function getNet64Servers(): Promise<Server[] | null> {
  try {
    return (await axios.get('https://smmdb.ddns.net/api/getnet64servers', {
      method: 'get',
      timeout: 10000
    })).data
  } catch (err) {
    return null
  }
}
