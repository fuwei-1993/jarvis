import { openai } from './core/openai'

const chatCompletion = openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: '你好' }],
  temperature: 0.9,
})

chatCompletion.then(r => console.log(r))
