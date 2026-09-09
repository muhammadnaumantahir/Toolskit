export type SiteNavigationItem={label:string;path:string}
export const siteNavigation:SiteNavigationItem[]=[
 {label:'Home',path:'/'},
 {label:'Tools / Categories',path:'/tools'},
 {label:'About Us',path:'/about'},
 {label:'Contact Us',path:'/contact'},
 {label:'Privacy Policy',path:'/privacy-policy'},
 {label:'Terms & Conditions',path:'/terms-and-conditions'},
]

type SiteSection={heading:string;body:string[]}
export type SitePage={path:string;title:string;description:string;sections:SiteSection[]}

export const sitePages:SitePage[]=[
 {path:'/about',title:'About Us | ToolsKit',description:'Learn what ToolsKit is, why it exists, and how we design practical browser tools around clarity, speed, and useful everyday work.',sections:[
  {heading:'A toolkit built for real work',body:['ToolsKit is a focused collection of practical web utilities for writing, development, documents, images, calculations, and everyday security tasks. The goal is simple: make small jobs easier without forcing people through unnecessary accounts or complicated workflows.','We organize the experience around clear categories and dedicated tool workspaces so you can understand what a tool does before you use it and move quickly from discovery to result.']},
  {heading:'Our product principles',body:['Useful before flashy. Every tool should solve a recognizable problem and communicate its purpose clearly.','Fast and focused. Core browser-based tools are designed to keep processing close to the user wherever the task allows it.','Clear by design. Navigation, labels, actions, feedback, and supporting information should remain understandable on desktop and mobile.']},
  {heading:'What we are building toward',body:['ToolsKit is designed to grow as a coherent toolkit rather than a collection of disconnected pages. New utilities should fit the same information architecture, visual language, and quality expectations.']}
 ]},
 {path:'/contact',title:'Contact Us | ToolsKit',description:'Contact ToolsKit for questions, feedback, suggestions, corrections, or partnership enquiries.',sections:[
  {heading:'We would like to hear from you',body:['Have feedback about a tool, spotted something that needs improvement, or have an idea for a useful addition? Get in touch and tell us what you would like to see.']},
  {heading:'Email',body:['For support, feedback, suggestions, or general enquiries, contact us at rumitech.solutions00@gmail.com.']},
  {heading:'What to include',body:['For a tool issue, include the tool name, what you entered, what you expected, and what happened. Avoid sending passwords, private documents, API keys, or other sensitive information.']}
 ]},
 {path:'/privacy-policy',title:'Privacy Policy | ToolsKit',description:'Read how ToolsKit handles information when you use our website and browser-based utilities.',sections:[
  {heading:'Privacy by design',body:['Many ToolsKit utilities are designed to process content directly in your browser. When a tool operates locally, the content you enter or files you select are processed on your device rather than uploaded to a ToolsKit processing server.','Some browser capabilities, hosting infrastructure, analytics, advertising, or third-party services may have their own technical requirements and privacy practices. Review the relevant third-party terms when they apply.']},
  {heading:'Information you provide',body:['If you contact us by email, we receive the information included in your message so we can respond. We do not need your tool input to answer a general support request.','Do not submit confidential information through public feedback, email, or any form unless it is necessary for your request.']},
  {heading:'Cookies and external services',body:['ToolsKit may use essential browser storage or third-party services needed for hosting, security, measurement, or future site features. Any such service may process information according to its own policy.']},
  {heading:'Policy updates',body:['This policy may be updated as ToolsKit evolves. The current version published on this page is the version that applies to visitors using the site.']}
 ]},
 {path:'/terms-and-conditions',title:'Terms & Conditions | ToolsKit',description:'Read the terms that apply when you access and use the ToolsKit website and utilities.',sections:[
  {heading:'Using ToolsKit',body:['ToolsKit provides web-based utilities for general informational and productivity purposes. You are responsible for reviewing results and deciding whether they are appropriate for your specific use case.','Do not use ToolsKit to process material you are not authorized to handle.']},
  {heading:'Accuracy and availability',body:['We aim to keep tools useful and functional, but we cannot guarantee that every calculation, conversion, format, or transformation will be correct for every edge case. Check important results independently before relying on them.','Features may change, be improved, temporarily unavailable, or removed as the service evolves.']},
  {heading:'User responsibility',body:['You remain responsible for the files, text, code, or other content you process with the site and for complying with applicable laws, licenses, privacy obligations, and organizational policies.']},
  {heading:'Contact',body:['Questions about these terms can be sent to rumitech.solutions00@gmail.com.']}
 ]}
]

export function getSitePage(path:string){return sitePages.find(page=>page.path===path)}
