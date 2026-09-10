export type IconName='grid'|'search'|'sparkles'|'arrow'|'mail'|'heart'|'facebook'|'instagram'|'youtube'|'linkedin'|'github'|'x'|'chevron'|'chat'|'send'|'close'

export function Icon({name,size=18}:{name:IconName;size?:number}){
 const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,ariaHidden:true}
 switch(name){
  case'grid':return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>
  case'search':return <svg {...common}><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
  case'sparkles':return <svg {...common}><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></svg>
  case'arrow':return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
  case'mail':return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>
  case'heart':return <svg {...common}><path d="M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z"/></svg>
  case'facebook':return <svg {...common}><path d="M14 8h2V4.5a14.4 14.4 0 0 0-3-.3c-3 0-5 1.8-5 5.1V12H5v4h3v8h4v-8h3.3l.7-4H12V9.7c0-1.2.5-1.7 2-1.7Z"/></svg>
  case'instagram':return <svg {...common}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>
  case'youtube':return <svg {...common}><path d="m10 15 5-3-5-3v6Z"/><path d="M21 12c0 4.2-.5 6-1.1 6.7C19.3 19.4 17.8 20 12 20s-7.3-.6-7.9-1.3C3.5 18 3 16.2 3 12s.5-6 1.1-6.7C4.7 4.6 6.2 4 12 4s7.3.6 7.9 1.3C20.5 6 21 7.8 21 12Z"/></svg>
  case'linkedin':return <svg {...common}><path d="M6 9v9"/><path d="M6 6.2v.1"/><path d="M10 18v-5a4 4 0 0 1 8 0v5"/><path d="M10 9v9"/></svg>
  case'github':return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.2-6-2.7"/><path d="M15 19v-2.3c0-.7.1-1.4.5-1.9 3.3-.4 4.8-1.6 4.8-4.9a4.8 4.8 0 0 0-1.2-3.3A4.6 4.6 0 0 0 19 3.3s-1.1-.4-3.6 1.3a12.4 12.4 0 0 0-6.8 0C6.1 2.9 5 3.3 5 3.3a4.6 4.6 0 0 0-.1 3.3 4.8 4.8 0 0 0-1.2 3.3c0 3.3 1.5 4.5 4.8 4.9.3.4.5 1 .5 1.9V19"/></svg>
  case'x':return <svg {...common}><path d="M5 4 19 20"/><path d="M19 4 5 20"/></svg>
  case'chat':return <svg {...common}><path d="M4 5h16v11H9l-5 4v-4H4Z"/><path d="M8 9h8M8 12.5h5"/></svg>
  case'send':return <svg {...common}><path d="M21 3 3 10.5l7 2.5 2 7L21 3Z"/><path d="M10 13 21 3"/></svg>
  case'close':return <svg {...common}><path d="M6 6 18 18"/><path d="M18 6 6 18"/></svg>
  default:return <svg {...common}><path d="m8 10 4 4 4-4"/></svg>
 }
}

/** label, icon, url ('' = coming soon), brand color used for the icon chip */
export const socialLinks:[string,IconName,string,string][]=[
 ['Facebook','facebook','','#1877f2'],
 ['Instagram','instagram','','#e1306c'],
 ['YouTube','youtube','','#ff0000'],
 ['LinkedIn','linkedin','','#0a66c2'],
 ['X','x','','#0f1419'],
 ['GitHub','github','https://github.com/muhammadnaumantahir/ToolNest','#6d5ef8'],
]

/** Shared social icon row used by both the home footer and the site-page footer */
export function SocialLinks({className='socials'}:{className?:string}){
 return <div className={className}>{socialLinks.map(([label,icon,url,color])=>url
  ?<a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} style={{['--brand' as never]:color}}><Icon name={icon} size={17}/></a>
  :<span key={label} className="social-placeholder" title={`${label} link coming soon`} aria-label={`${label} link coming soon`} style={{['--brand' as never]:color}}><Icon name={icon} size={17}/></span>
 )}</div>
}
