const base='https://toolskit.sbs'

export const normalizePath=(value:string)=>value.replace(/\/$/,'')||'/'

export const canonicalUrl=(path=window.location.pathname)=>`${base}${normalizePath(path)}`

function sync(){
 const canonical=canonicalUrl()
 let link=document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
 if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}
 link.href=canonical
 let og=document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
 if(!og){og=document.createElement('meta');og.setAttribute('property','og:url');document.head.appendChild(og)}
 og.content=canonical
}

sync()

const originalPushState=history.pushState.bind(history)
history.pushState=(...args)=>{
 originalPushState(...args)
 window.dispatchEvent(new PopStateEvent('popstate'))
}

const originalReplaceState=history.replaceState.bind(history)
history.replaceState=(...args)=>{
 originalReplaceState(...args)
 window.dispatchEvent(new PopStateEvent('popstate'))
}

window.addEventListener('popstate',sync)
