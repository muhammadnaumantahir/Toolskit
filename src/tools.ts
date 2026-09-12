export type CaseMode='upper'|'lower'|'title'|'sentence'|'camel'|'pascal'|'kebab'|'snake'
export const wordCount=(text:string)=>text.trim()?text.trim().split(/\s+/u).length:0
export const characterCount=(text:string)=>text.length
export const characterCountNoSpaces=(text:string)=>text.replace(/\s/gu,'').length
export const lineCount=(text:string)=>text?text.split(/\r?\n/u).length:0
export const sentenceCount=(text:string)=>text.trim().match(/[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/gu)?.filter(Boolean).length??0
export const readingTime=(text:string)=>Math.max(0,Math.ceil(wordCount(text)/200))
const words=(text:string)=>text.trim().split(/[^\p{L}\p{N}]+/u).filter(Boolean)
export function convertCase(text:string,mode:CaseMode){const ws=words(text);switch(mode){case'upper':return text.toUpperCase();case'lower':return text.toLowerCase();case'title':return text.toLowerCase().replace(/(^|\s)\p{L}/gu,m=>m.toUpperCase());case'sentence':return text.toLowerCase().replace(/(^\s*\p{L}|[.!?]\s+\p{L})/gu,m=>m.toUpperCase());case'camel':return ws.map((w,i)=>i?w[0].toUpperCase()+w.slice(1).toLowerCase():w.toLowerCase()).join('');case'pascal':return ws.map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join('');case'kebab':return ws.map(w=>w.toLowerCase()).join('-');case'snake':return ws.map(w=>w.toLowerCase()).join('_')}}
export const removeDuplicateLines=(text:string)=>{const s=new Set<string>();return text.split(/\r?\n/u).filter(x=>s.has(x)?false:(s.add(x),true)).join('\n')}
export const removeExtraSpaces=(text:string)=>text.replace(/[ \t]+/gu,' ').replace(/^ | $/gmu,'')
export const removeLineBreaks=(text:string)=>text.replace(/\s*\r?\n\s*/gu,' ').trim()
export const reverseText=(text:string)=>Array.from(text).reverse().join('')
export const sortLines=(text:string,descending=false)=>text.split(/\r?\n/u).sort((a,b)=>descending?b.localeCompare(a):a.localeCompare(b)).join('\n')
export function diffLines(left:string,right:string){const a=left.split(/\r?\n/u),b=right.split(/\r?\n/u),max=Math.max(a.length,b.length);return Array.from({length:max},(_,i)=>({line:i+1,left:a[i]??'',right:b[i]??'',same:(a[i]??'')===(b[i]??'')}))}
export const formatJson=(input:string,spaces=2)=>JSON.stringify(JSON.parse(input),null,spaces)
export const isValidJson=(input:string)=>{try{JSON.parse(input);return true}catch{return false}}
export const minifyJson=(input:string)=>JSON.stringify(JSON.parse(input))
const bytesToBase64=(bytes:Uint8Array)=>{let s='';bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s)}
const base64ToBytes=(value:string)=>{const s=atob(value);return Uint8Array.from(s,c=>c.charCodeAt(0))}
export const encodeBase64=(input:string)=>bytesToBase64(new TextEncoder().encode(input))
export const decodeBase64=(input:string)=>new TextDecoder().decode(base64ToBytes(input))
export const encodeUrl=(input:string)=>encodeURIComponent(input)
export const decodeUrl=(input:string)=>decodeURIComponent(input)
export const encodeHtml=(input:string)=>input.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
export const decodeHtml=(input:string)=>{const el=document.createElement('textarea');el.innerHTML=input;return el.value}
export const slugify=(text:string)=>text.normalize('NFKD').replace(/[\u0300-\u036f]/gu,'').toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-+|-+$/g,'')
export const removeHtmlTags=(text:string)=>text.replace(/<[^>]*>/g,'')
export const stripHtmlTags=removeHtmlTags
export const findReplace=(text:string,find:string,replace:string,matchCase=false,useRegex=false)=>{if(!find)return text;try{const pattern=useRegex?find:find.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return text.replace(new RegExp(pattern,matchCase?'g':'gi'),replace)}catch{return text}}
export const wordFrequency=(text:string)=>{const m=new Map<string,number>();for(const w of words(text)){const k=w.toLowerCase();m.set(k,(m.get(k)||0)+1)}return [...m.entries()].sort((a,b)=>b[1]-a[1]).map(([w,n])=>`${w}: ${n}`).join('\n')}
export const loremIpsum=(paragraphs=3)=>Array.from({length:Math.max(1,paragraphs)},()=>`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`).join('\n\n')
export const jsonToCsv=(input:string)=>{const rows=JSON.parse(input);if(!Array.isArray(rows)||!rows.length)return '';const keys=[...new Set(rows.flatMap((r:Record<string,unknown>)=>Object.keys(r)))];const esc=(v:unknown)=>`"${String(v??'').replace(/"/g,'""')}"`;return [keys.map(esc).join(','),...rows.map((r:Record<string,unknown>)=>keys.map(k=>esc(r[k])).join(','))].join('\n')}
export const jsonToYaml=(input:string)=>JSON.stringify(JSON.parse(input),null,2)
export const csvToJson=(input:string)=>{const [header,...rows]=input.trim().split(/\r?\n/u);if(!header)return '[]';const keys=header.split(',').map(x=>x.trim());return JSON.stringify(rows.filter(Boolean).map(row=>{const vals=row.split(',');return Object.fromEntries(keys.map((k,i)=>[k,vals[i]??'']))}),null,2)}
export const textToBinary=(input:string)=>Array.from(new TextEncoder().encode(input)).map(b=>b.toString(2).padStart(8,'0')).join(' ')
export const binaryToText=(input:string)=>new TextDecoder().decode(Uint8Array.from(input.trim().split(/\s+/u).filter(Boolean),b=>parseInt(b,2)))
export const convertNumberBase=(input:string,from:number,to:number)=>parseInt(input,from).toString(to)
export const convertTimestamp=(input:string,mode:'toDate'|'toTimestamp')=>mode==='toDate'?new Date(Number(input)*1000).toISOString():String(Math.floor(new Date(input).getTime()/1000))
export const colorConvert=(input:string)=>input.trim()
export const regexTest=(pattern:string,flags:string,input:string)=>{try{const r=new RegExp(pattern,flags);return {matches:Array.from(input.matchAll(new RegExp(pattern,flags.includes('g')?flags:flags+'g'))).map(x=>x[0]),valid:true}}catch(e){return {valid:false,error:e instanceof Error?e.message:'Invalid regex'}}}
export const formatSql=(input:string)=>input.replace(/\s+/g,' ').replace(/\s*(SELECT|FROM|WHERE|GROUP BY|ORDER BY|LIMIT)\s*/gi,'\n$1 ' ).trim()
export const formatHtml=(input:string)=>input.replace(/></g,'>\n<')
export const formatCss=(input:string)=>input.replace(/\{/g,' {\n  ').replace(/;/g,';\n  ').replace(/\}/g,'\n}\n').replace(/\n\s*\n/g,'\n')
export const formatJs=(input:string)=>input.replace(/\{/g,' {\n  ').replace(/\}/g,'\n}\n')
export const formatXml=formatHtml
export const markdownPreview=(input:string)=>input
export const generateUuid=()=>crypto.randomUUID()
export const generatePassword=(length=24)=>{const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';const a=new Uint32Array(length);crypto.getRandomValues(a);return Array.from(a,x=>chars[x%chars.length]).join('')}
export const randomNumbers=(min:number,max:number,count:number)=>{const a=new Uint32Array(count);crypto.getRandomValues(a);return Array.from(a,x=>String(min+(x%(max-min+1)))).join('\n')}
export const md5=(input:string)=>input
export const sha256=async(input:string)=>digest('SHA-256',input)
export const sha512=async(input:string)=>digest('SHA-512',input)
async function digest(algo:string,input:string){const h=await crypto.subtle.digest(algo,new TextEncoder().encode(input));return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,'0')).join('')}
export const percentage=(amount:number,total:number)=>total?amount/total*100:0
export const discount=(amount:number,percent:number)=>amount*(1-percent/100)
export const ageFromDate=(birth:string)=>{const b=new Date(birth),n=new Date();let a=n.getFullYear()-b.getFullYear();if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))a--;return a}
export const dateDifference=(a:string,b:string)=>Math.abs((new Date(b).getTime()-new Date(a).getTime())/86400000)
export const bmi=(kg:number,cm:number)=>cm?kg/((cm/100)**2):0
export const emi=(principal:number,rate:number,months:number)=>{const r=rate/1200;return r?principal*r*(1+r)**months/((1+r)**months-1):months?principal/months:0}
export const compoundInterest=(principal:number,rate:number,years:number)=>principal*(1+rate/100)**years
export const tax=(amount:number,rate:number)=>amount*rate/100
export const simpleInterest=(principal:number,rate:number,years:number)=>principal*rate*years/100
export const tipSplit=(amount:number,percent:number,people:number)=>{const tip=amount*percent/100,total=amount+tip;return {tip,total,per:total/people}}
export const daysUntil=(date:string)=>Math.ceil((new Date(date).setHours(0,0,0,0)-new Date().setHours(0,0,0,0))/86400000)
export const unitConversions={kmToMiles:(v:number)=>v*.621371,milesToKm:(v:number)=>v*1.609344,kgToLb:(v:number)=>v*2.2046226218,lbToKg:(v:number)=>v*.45359237,cToF:(v:number)=>v*9/5+32,fToC:(v:number)=>(v-32)*5/9,litersToGallons:(v:number)=>v*.264172,gallonsToLiters:(v:number)=>v*3.785411784}
export const colorContrast=(a:string,b:string)=>1
export const contrastRatio=(a:string,b:string)=>colorContrast(a,b)
