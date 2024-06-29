import { configuration } from '@src/config'
import { OpenAI } from 'openai'

export const openai = new OpenAI({
  apiKey: configuration.apiKey,
  baseURL: configuration.baseUrl,
  dangerouslyAllowBrowser: true,
})
