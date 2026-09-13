import {cpSync,existsSync,readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {join,extname} from 'node:path';
// Rebase this static export for the repository's GitHub Pages subdirectory.
if(existsSync('docs'))throw new Error('Archive the previous docs export before regenerating');
cpSync('out','docs',{recursive:true});
let count=0;
function visit(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){
 const p=join(dir,entry.name);
 if(entry.isDirectory())visit(p);
 else if(['.html','.js','.css','.json','.rsc'].includes(extname(p))){
  const original=readFileSync(p,'utf8');
  const updated=original.replaceAll('/_next/','/nanwon-library/_next/').replaceAll('/fonts/','/nanwon-library/fonts/').replaceAll('/stickers/','/nanwon-library/stickers/').replaceAll('/favicon.svg','/nanwon-library/favicon.svg');
  writeFileSync(p,updated);count++;
 }
}}
visit('docs');
writeFileSync('docs/.nojekyll','');
if(!readFileSync('docs/index.html','utf8').includes('noindex'))throw new Error('Missing noindex');
console.log(`Prepared ${count} text assets for GitHub Pages`);
