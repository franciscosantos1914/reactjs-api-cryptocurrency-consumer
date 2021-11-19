import axios from 'axios'
import 'dotenv/config'

const baseURL = process.env.API_URL

export default axios.create({ baseURL: 'https://api.coingecko.com' });