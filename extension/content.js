(()=>{
'use strict';
const DASH='https://hungnh1125.github.io/job-application-tracker/';
const isDashboard=location.origin==='https://hungnh1125.github.io'&&location.pathname.startsWith('/job-application-tracker');
const providers=/(joinhandshake\.com|greenhouse\.io|lever\.co|ashbyhq\.com|myworkdayjobs\.com|workday\.com|linkedin\.com|indeed\.com|smartrecruiters\.com|icims\.com|workable\.com|jobvite\.com|bamboohr\.com|careers\.)/i;
if(isDashboard){
  const send=async()=>{const res=await chrome.storage.local.get({applications:[]});window.postMessage({type:'APPLICATION_HQ_SYNC',entries:res.applications},location.origin);};
  send();
  chrome.storage.onChanged.addListener((changes,area)=>{if(area==='local'&&changes.applications)send()});
  window.addEventListener('message',async e=>{
    if(e.source!==window||e.origin!==location.origin||e.data?.type!=='APPLICATION_HQ_REQUEST_SYNC')return;
    await send();
  });
  return;
}
if(!providers.test(location.hostname))return;
const norm=s=>(s||'').replace(/\s+/g,' ').trim().slice(0,150);
const company=()=>{
 const og=document.querySelector('meta[property="og:site_name"]')?.content;
 let s=norm(og||document.title.split(/[-|–]/).slice(-1)[0]||location.hostname);
 if(/handshake|linkedin|greenhouse|workday|indeed/i.test(s))s=norm(document.querySelector('[data-test="company-name"],[data-testid="company-name"],.company-name')?.textContent)||s;
 return s;
};
const role=()=>norm(document.querySelector('h1')?.textContent)||norm(document.title.split(/[-|–]/)[0]);
const confirmed=()=>{
 const h=norm(Array.from(document.querySelectorAll('h1,h2,[role="alert"],[role="status"],.alert,[data-testid*="alert"],[class*="toast"]')).slice(0,30).map(n=>n.textContent).join(' ')).toLowerCase();
 const path=location.pathname.toLowerCase();
 const phrase=/(application (has been |was )?(successfully )?(submitted|received)|thank you for (applying|your application)|you('ve| have) (successfully )?applied|application complete|application submitted|your application is in|you applied on\s+\w+|application submitted!)/i;
 const urlPattern=/(application[-_/]?(submitted|success|confirmation|thankyou|thank-you)|\/thank[-_]?you\b|\/applications\/submitted)/i;
 return phrase.test(h)||(urlPattern.test(path)&&phrase.test(norm(document.body?.innerText?.slice(0,1800))));
};
let last='';
async function check(){
 if(!confirmed())return;
 const key=location.hostname+location.pathname+role();
 if(key===last)return;last=key;
 const o=await chrome.storage.local.get({applications:[]});
 const entries=o.applications;
 const item={id:'ext-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7),
 company:company(),role:role(),url:location.href,type:'Full-time',stage:'Applied',
 applied:new Date().toLocaleDateString('en-CA'),source:location.hostname,location:'',deadline:'',followup:'',visa:'Unknown',
 notes:'Automatically detected confirmation page. Verify role/company; application status is unverified by an employer API.',
 updated:new Date().toISOString()};
 if(entries.some(j=>j.url===item.url&&j.applied===item.applied))return;
 entries.unshift(item);await chrome.storage.local.set({applications:entries});
}
check();
let t;new MutationObserver(()=>{clearTimeout(t);t=setTimeout(check,1400)}).observe(document.documentElement,{childList:true,subtree:true});
})();