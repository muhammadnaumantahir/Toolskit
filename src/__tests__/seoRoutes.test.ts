import {describe,expect,it} from 'vitest'
import {tools} from '../toolRegistry'

const base='https://toolskit.sbs'
const infoRoutes=['/','/tools','/about','/contact','/privacy-policy','/terms-and-conditions']

describe('SEO route coverage',()=>{
  it('has unique tool ids suitable for /tools/:id routes',()=>{
    const ids=tools.map(tool=>tool.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every(id=>/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true)
  })

  it('contains every public informational route',()=>{
    expect(infoRoutes).toEqual([
      '/', '/tools', '/about', '/contact', '/privacy-policy', '/terms-and-conditions'
    ])
  })

  it('generates one production URL for every registered tool',()=>{
    const urls=tools.map(tool=>`${base}/tools/${tool.id}`)
    expect(urls).toHaveLength(tools.length)
    expect(new Set(urls).size).toBe(tools.length)
    expect(urls.every(url=>url.startsWith(`${base}/tools/`))).toBe(true)
  })

  it('keeps canonical URLs on the production domain',()=>{
    const paths=['/','/tools','/tools/word-counter','/privacy-policy']
    expect(paths.map(path=>`${base}${path}`)).toEqual([
      'https://toolskit.sbs/',
      'https://toolskit.sbs/tools',
      'https://toolskit.sbs/tools/word-counter',
      'https://toolskit.sbs/privacy-policy'
    ])
  })
})
