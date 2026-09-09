const required=[
 ['Home','/'],
 ['Tools / Categories','/tools'],
 ['About Us','/about'],
 ['Contact Us','/contact'],
 ['Privacy Policy','/privacy-policy'],
 ['Terms & Conditions','/terms-and-conditions'],
] as const

function patch(){
 const nav=document.querySelector('.main-nav')
 if(nav){
  const links=Array.from(nav.querySelectorAll<HTMLAnchorElement>('a'))
  required.forEach(([label,path],index)=>{
   let link=links[index]
   if(!link){link=document.createElement('a');nav.appendChild(link)}
   link.href=path
   const textNode=Array.from(link.childNodes).find(node=>node.nodeType===Node.TEXT_NODE)
   if(textNode)textNode.nodeValue=`${label}`
   else link.textContent=label
   if(index>0&&index<required.length) link.setAttribute('aria-label',label)
  })
  Array.from(nav.querySelectorAll('a')).slice(required.length).forEach(link=>link.remove())
 }
 const shell=document.querySelector('.site-footer .footer-shell')
 if(shell&&!shell.querySelector('.footer-legal-links')){
  const legal=document.createElement('div')
  legal.className='footer-legal-links'
  legal.innerHTML='<span>Legal</span><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms & Conditions</a>'
  const bottom=shell.querySelector('.footer-bottom')
  if(bottom)shell.insertBefore(legal,bottom)
  else shell.appendChild(legal)
 }
}

patch()
const observer=new MutationObserver(patch)
observer.observe(document.body,{childList:true,subtree:true})
