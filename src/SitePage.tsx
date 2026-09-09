import {useEffect} from 'react'
import {siteNavigation,type SitePage as SitePageData} from './siteNavigation'

type Props={page:SitePageData}

export default function SitePage({page}:Props){
 useEffect(()=>{document.title=page.title;document.querySelector('meta[name="description"]')?.setAttribute('content',page.description)},[page])
 return <main className="info-page">
  <div className="info-hero">
   <div className="info-hero-grid"/>
   <div className="info-shell">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><strong>{page.title.split(' | ')[0]}</strong></nav>
    <span className="info-kicker">ToolsKit · {page.title.split(' | ')[0]}</span>
    <h1>{page.title.split(' | ')[0]}</h1>
    <p>{page.description}</p>
   </div>
  </div>
  <div className="info-shell info-body">
   <aside className="info-toc" aria-label="On this page"><span>On this page</span>{page.sections.map((section,i)=><a href={`#section-${i+1}`} key={section.heading}>{section.heading}</a>)}</aside>
   <article className="info-content">{page.sections.map((section,i)=><section id={`section-${i+1}`} className="info-section" key={section.heading}><div className="info-section-number">{String(i+1).padStart(2,'0')}</div><div><h2>{section.heading}</h2>{section.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>)}<div className="info-cta"><strong>Need help or have a suggestion?</strong><a href="mailto:rumitech.solutions00@gmail.com">Contact ToolsKit</a></div></article>
  </div>
  <div className="info-shell info-links"><span>Explore</span>{siteNavigation.filter(item=>!['/privacy-policy','/terms-and-conditions'].includes(item.path)).map(item=><a href={item.path} key={item.path}>{item.label}</a>)}</div>
 </main>
}
