import {ReactNode,useEffect,useState} from 'react'
import {siteNavigation,primaryNavigation} from './siteNavigation'
import {Icon,SocialLinks} from './Icons'
import ChatWidget from './ChatWidget'

export default function SiteChrome({children}:{children:ReactNode}){
 const [menuOpen,setMenuOpen]=useState(false)
 const [path,setPath]=useState(()=>window.location.pathname.replace(/\/$/,'')||'/')
 useEffect(()=>{
  const sync=()=>setPath(window.location.pathname.replace(/\/$/,'')||'/')
  window.addEventListener('popstate',sync)
  return()=>window.removeEventListener('popstate',sync)
 },[])
 const isActive=(itemPath:string)=>path===itemPath
 const closeMenu=()=>setMenuOpen(false)
 return <div className="public-app">
  <header className="public-topbar">
   <a className="public-brand" href="/" onClick={closeMenu} aria-label="ToolsKit home"><span className="public-brand-mark"><Icon name="sparkles" size={16}/></span><span>Tools<span>Kit</span></span></a>
   <button className="public-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="public-primary-nav" aria-label={menuOpen?'Close navigation':'Open navigation'} onClick={()=>setMenuOpen(open=>!open)}><Icon name={menuOpen?'x':'menu'} size={19}/></button>
   <nav id="public-primary-nav" className={`public-primary-nav${menuOpen?' is-open':''}`} aria-label="Primary navigation">
    {primaryNavigation.map(item=><a className={`public-nav-link${isActive(item.path)?' is-active':''}`} href={item.path} key={item.path} aria-current={isActive(item.path)?'page':undefined} onClick={closeMenu}>{item.label}</a>)}
   </nav>
   <a className="public-contact" href="mailto:rumitech.solutions00@gmail.com">Contact us</a>
  </header>
  {children}
  <footer className="public-footer"><div className="public-footer-shell"><div className="public-footer-main"><div><a className="public-brand public-footer-brand" href="/"><span className="public-brand-mark"><Icon name="sparkles" size={16}/></span><span>Tools<span>Kit</span></span></a><p>Practical web tools organized for writing, coding, documents, images, calculations, and everyday tasks.</p><a href="mailto:rumitech.solutions00@gmail.com"><Icon name="mail" size={14}/> rumitech.solutions00@gmail.com</a></div><div><h3>Navigate</h3>{siteNavigation.map(item=><a href={item.path} key={item.path}>{item.label}</a>)}</div><div><h3>Connect</h3><SocialLinks className="public-socials"/></div></div><div className="public-footer-bottom"><span>© 2026 Tools Kit. All rights reserved.</span><span>Created with <Icon name="heart" size={12}/> by <strong>RumiTech Solutions</strong></span></div></div></footer><ChatWidget/>
 </div>
}
