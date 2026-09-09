import {categories,tools} from './toolRegistry'

const icons:{[key:string]:string}={Text:'✎',Developer:'</>',PDF:'▱',Image:'◈',Calculators:'∑',Security:'⌘'}

export default function ToolsLanding(){
 return <main className="tools-landing"><section className="tools-landing-hero"><div className="info-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><strong>Tools / Categories</strong></nav><span className="info-kicker">ToolsKit · Browse the toolkit</span><h1>Every tool, clearly organized.</h1><p>Explore the full ToolsKit collection by category. Each utility has a dedicated workspace so visitors can understand the task and get straight to the result.</p></div></section><section className="info-shell tools-catalog">{categories.slice(1).map(category=><section className="catalog-category" key={category}><div className="catalog-heading"><span className="catalog-icon">{icons[category]??'✦'}</span><div><span>{category}</span><h2>{category} tools</h2></div><small>{tools.filter(t=>t.category===category).length} tools</small></div><div className="catalog-grid">{tools.filter(t=>t.category===category).map(tool=><a className="catalog-card" href={`/tools/${tool.id}`} key={tool.id}><strong>{tool.name}</strong><span>{tool.description}</span><b>Open tool →</b></a>)}</div></section>)}</section></main>
}
