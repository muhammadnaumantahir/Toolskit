import {useEffect,useRef,useState} from 'react'
import {tools,categories} from './toolRegistry'
import {Icon} from './Icons'

type Msg={role:'bot'|'user';text:string;matches?:{id:string;name:string}[]}

const STOPWORDS=new Set(['a','an','the','is','are','for','to','of','in','on','and','how','do','i','can','you','me','my','please','need','want','tool','tools'])

function findTools(query:string){
 const words=query.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(w=>w.length>1&&!STOPWORDS.has(w))
 if(!words.length)return []
 const scored=tools.map(t=>{
  const hay=`${t.name} ${t.description} ${t.category} ${t.keywords.join(' ')}`.toLowerCase()
  const score=words.reduce((s,w)=>s+(hay.includes(w)?1:0),0)
  return {t,score}
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score)
 return scored.slice(0,4).map(x=>({id:x.t.id,name:x.t.name}))
}

function reply(raw:string):Msg{
 const q=raw.toLowerCase().trim()
 if(/^(hi|hey|hello|salam|assalam)/.test(q))
  return {role:'bot',text:"Hey! I'm the ToolsKit assistant. Tell me what you're trying to do — e.g. \"compress a pdf\" or \"format json\" — and I'll point you to the right tool."}
 if(/(contact|email|reach|support)/.test(q))
  return {role:'bot',text:'You can reach the team at rumitech.solutions00@gmail.com — happy to help with anything ToolsKit related.'}
 if(/(category|categories)/.test(q))
  return {role:'bot',text:`ToolsKit is organized into ${categories.length-1} categories: ${categories.slice(1).join(', ')}. Tap one on the home page, or tell me what you need and I'll find it.`}
 if(/(free|cost|price|pay)/.test(q))
  return {role:'bot',text:'ToolsKit is completely free. Most tools also run locally in your browser, so your files and text never leave your device.'}
 if(/(private|privacy|safe|secure|upload|server)/.test(q))
  return {role:'bot',text:'Most tools process everything locally in your browser — files and text are not uploaded to a server. Look for the green "Local" badge on a tool\u2019s page to confirm.'}
 if(/(who (made|built)|about (toolskit|this)|rumitech)/.test(q))
  return {role:'bot',text:'ToolsKit is built by RumiTech Solutions — a focused collection of everyday web tools for text, developers, PDFs, images, calculators and security.'}
 const matches=findTools(raw)
 if(matches.length)
  return {role:'bot',text:matches.length===1?`That sounds like a job for ${matches[0].name}:`:'Here are a few tools that might help:',matches}
 return {role:'bot',text:"I couldn't find an exact match. Try describing the task in a few words — like \"resize image\", \"count words\", or \"generate password\" — or browse all tools from the Categories menu."}
}

export default function ChatWidget(){
 const [open,setOpen]=useState(false)
 const [messages,setMessages]=useState<Msg[]>([{role:'bot',text:"Hi! I'm the ToolsKit assistant. Ask me what you're trying to do and I'll point you to the right tool."}])
 const [input,setInput]=useState('')
 const listRef=useRef<HTMLDivElement>(null)

 useEffect(()=>{if(listRef.current)listRef.current.scrollTop=listRef.current.scrollHeight},[messages,open])

 function send(){
  const text=input.trim()
  if(!text)return
  const botReply=reply(text)
  setMessages(m=>[...m,{role:'user',text},botReply])
  setInput('')
 }

 return <div className="chat-widget">
  {open&&<div className="chat-panel" role="dialog" aria-label="ToolsKit assistant">
   <div className="chat-head"><span><span className="chat-head-icon"><Icon name="sparkles" size={14}/></span>ToolsKit assistant</span><button aria-label="Close assistant" onClick={()=>setOpen(false)}><Icon name="close" size={16}/></button></div>
   <div className="chat-body" ref={listRef}>
    {messages.map((m,i)=><div key={i} className={m.role==='user'?'chat-msg chat-user':'chat-msg chat-bot'}>
     <p>{m.text}</p>
     {m.matches&&<div className="chat-suggestions">{m.matches.map(s=><a key={s.id} href={`/tools/${s.id}`}>{s.name}<Icon name="arrow" size={13}/></a>)}</div>}
    </div>)}
   </div>
   <div className="chat-input"><input value={input} placeholder="Ask about a tool…" onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} aria-label="Message the ToolsKit assistant"/><button aria-label="Send" onClick={send}><Icon name="send" size={16}/></button></div>
  </div>}
  <button className={open?'chat-toggle chat-toggle-open':'chat-toggle'} onClick={()=>setOpen(o=>!o)} aria-label={open?'Close assistant':'Open ToolsKit assistant'}>
   <Icon name={open?'close':'chat'} size={22}/>
  </button>
 </div>
}
