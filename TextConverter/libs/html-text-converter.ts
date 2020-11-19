import { readFileSync } from 'fs'
import StringUtils from './string-utils'

class HtmlTextConverter {
  private _filename: string

  constructor(filename: string) {
    this._filename = filename
  }

  convertToHtml(): string {
    const text = readFileSync(this._filename, 'utf8')

    return StringUtils.basicHtmlEncode(text)
  }
}

export = HtmlTextConverter
