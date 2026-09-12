import {describe,expect,it} from 'vitest'
import {binaryToText,colorConvert,contrastRatio,convertNumberBase,convertTimestamp,csvToJson,daysUntil,findReplace,loremIpsum,randomNumbers,simpleInterest,slugify,stripHtmlTags,textToBinary,tipSplit,wordFrequency} from '../tools'
import {tools} from '../toolRegistry'

describe('new tool logic',()=>{
  it('slugify produces clean, URL-friendly slugs',()=>{
    expect(slugify('  Hello, World!! -- 2026  ')).toBe('hello-world-2026')
    expect(slugify('Café con leche')).toBe('caf\u00e9-con-leche')
  })

  it('loremIpsum generates the requested number of paragraphs',()=>{
    expect(loremIpsum(4).split('\n\n')).toHaveLength(4)
    expect(loremIpsum(0).split('\n\n')).toHaveLength(1)
  })

  it('findReplace supports plain, case-sensitive and regex modes',()=>{
    expect(findReplace('Cat cat CAT','cat','dog')).toBe('dog dog dog')
    expect(findReplace('Cat cat CAT','cat','dog',true)).toBe('Cat dog CAT')
    expect(findReplace('a1 b22 c333','\\d+','#',false,true)).toBe('a# b# c#')
  })

  it('wordFrequency counts and ranks word occurrences',()=>{
    expect(wordFrequency('the cat and the dog and the bird')).toBe('the: 3\nand: 2\ncat: 1\ndog: 1\nbird: 1')
  })

  it('stripHtmlTags removes markup and keeps text',()=>{
    expect(stripHtmlTags('<p>Hello <b>world</b></p>')).toBe('Hello world')
  })

  it('csvToJson converts quoted CSV rows into an array of objects',()=>{
    const result=JSON.parse(csvToJson('name,city\n"Doe, John",Boston'))
    expect(result).toEqual([{name:'Doe, John',city:'Boston'}])
  })

  it('convertNumberBase converts between binary, decimal and hex',()=>{
    expect(convertNumberBase('255',10,16)).toBe('FF')
    expect(convertNumberBase('ff',16,2)).toBe('11111111')
    expect(()=>convertNumberBase('zz',10,2)).toThrow()
  })

  it('convertTimestamp converts both directions',()=>{
    expect(convertTimestamp('1893456000','toDate')).toBe('2030-01-01T00:00:00.000Z')
    expect(convertTimestamp('2030-01-01T00:00:00.000Z','toTimestamp')).toBe('1893456000')
  })

  it('colorConvert reports hex, rgb and hsl for a given color',()=>{
    expect(colorConvert('#ff0000')).toBe('HEX: #ff0000\nRGB: rgb(255, 0, 0)\nHSL: hsl(0, 100%, 50%)')
    expect(colorConvert('rgb(255, 0, 0)')).toBe('HEX: #ff0000\nRGB: rgb(255, 0, 0)\nHSL: hsl(0, 100%, 50%)')
  })

  it('textToBinary and binaryToText round-trip',()=>{
    const bin=textToBinary('Hi!')
    expect(bin).toBe('01001000 01101001 00100001')
    expect(binaryToText(bin)).toBe('Hi!')
  })

  it('contrastRatio matches known WCAG values',()=>{
    expect(contrastRatio('#000000','#ffffff')).toBe(21)
    expect(contrastRatio('#ffffff','#ffffff')).toBe(1)
  })

  it('simpleInterest and tipSplit calculate expected totals',()=>{
    expect(simpleInterest(1000,5,2)).toBe(100)
    expect(tipSplit(100,15,4)).toEqual({tip:15,total:115,per:28.75})
  })

  it('daysUntil returns a signed day count',()=>{
    const now=new Date('2026-01-01T00:00:00.000Z')
    expect(daysUntil('2026-01-11',now)).toBe(10)
    expect(daysUntil('2025-12-22',now)).toBe(-10)
  })

  it('randomNumbers respects the requested count and range',()=>{
    const values=randomNumbers(1,5,20).split(', ').map(Number)
    expect(values).toHaveLength(20)
    expect(values.every(v=>v>=1&&v<=5)).toBe(true)
  })

  it('registers all 15 new tools with valid slugs and categories',()=>{
    const newIds=['slug-generator','lorem-ipsum-generator','find-replace','word-frequency-counter','html-tag-remover','csv-to-json','number-base-converter','timestamp-converter','color-converter','text-to-binary','color-contrast-checker','simple-interest-calculator','tip-calculator','countdown-calculator','random-number-generator']
    newIds.forEach(id=>expect(tools.find(t=>t.id===id)).toBeTruthy())
  })
})
