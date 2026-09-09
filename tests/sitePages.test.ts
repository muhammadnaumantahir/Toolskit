import {describe,expect,it} from 'vitest'
import {siteNavigation,sitePages} from '../src/siteNavigation'

describe('ToolsKit information architecture',()=>{
 it('defines the primary navigation and required legal/support destinations',()=>{
  expect(siteNavigation.map(item=>item.label)).toEqual(['Home','Tools / Categories','About Us','Contact Us','Privacy Policy','Terms & Conditions'])
  expect(siteNavigation.map(item=>item.path)).toEqual(['/','/tools','/about','/contact','/privacy-policy','/terms-and-conditions'])
 })
 it('defines useful indexable copy for every public information page',()=>{
  for(const page of sitePages) {
   expect(page.title.length).toBeGreaterThan(8)
   expect(page.description.length).toBeGreaterThan(40)
   expect(page.sections.length).toBeGreaterThanOrEqual(2)
  }
 })
})
