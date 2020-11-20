import { readFileSync } from 'fs'

class HtmlTextConverter {
  private _filename: string

  constructor(filename: string) {
    this._filename = filename
  }

  convertToHtml(): string {
    const text = readFileSync(this._filename, 'utf8')

    return this._basicHtmlEncode(text)
  }

  private _basicHtmlEncode(source: string): string {
    let i: number = 0
    const result: string[] = []
    let convertedLine: string[] = []
    let characterToConvert: string = source.charAt(i)
    while (i <= source.length) {
      i++
      switch (characterToConvert) {
        case '<':
          convertedLine.push('&lt')
          break
        case '>':
          convertedLine.push('&gt')
          break
        case '&':
          convertedLine.push('&amp')
          break
        case '\n':
          result.push(convertedLine.join(''))
          convertedLine = []
          break
        default:
          convertedLine.push(characterToConvert)
      }

      characterToConvert = source.charAt(i)
    }

    result.push(convertedLine.join(''))
    convertedLine = []

    return result.join('<br />')
  }
}

export = HtmlTextConverter
