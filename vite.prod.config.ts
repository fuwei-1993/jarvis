import { UserConfigExport, defineConfig } from 'vite'
import { resolve } from 'path'

const isProduction = (command: string): command is 'build' =>
  command === 'build'

export default {} as UserConfigExport
