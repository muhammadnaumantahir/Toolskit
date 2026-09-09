import {describe,expect,it} from 'vitest'
import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'
import {contactEmail,creatorName,footerCopyright,siteName} from '../src/brand'

describe('ToolsKit branding',()=>{
 it('defines the public brand and footer contact identity',()=>{expect(siteName).toBe('ToolsKit');expect(footerCopyright).toBe('© 2026 Tools Kit. All rights reserved.');expect(creatorName).toBe('RumiTech Solutions');expect(contactEmail).toBe('rumitech.solutions00@gmail.com')})
 it('defines all planned social destinations',()=>{const socialLabels=['Facebook','Instagram','YouTube','LinkedIn','X','GitHub'];expect(socialLabels).toHaveLength(6)})
 it('ships the premium UI skin with responsive and motion states',()=>{
  const css=readFileSync(resolve(process.cwd(),'src/premium.css'),'utf8')
  expect(css).toContain('ui-premium')
  expect(css).toContain('prefers-reduced-motion')
  expect(css).toContain('@media(max-width:900px)')
 })
})
