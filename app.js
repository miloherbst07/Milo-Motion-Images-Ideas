// Milo Motion Idea Bank: one script for both pages. <body data-page="all"> or <body data-page="saved">.
(function(){
  var PAGE=document.body.getAttribute('data-page');
  var $=function(id){return document.getElementById(id)};
  var KEY='mmi-idea-bank-v1';
  var BDS=(typeof BD!=='undefined')?BD:{};
  function bd(i){return BDS[i.id]||null}
  var LVL={1:'Voice only',2:'Hands on camera',3:'Face to camera'};
  var NEED_CLASS={'Ready from my files':'n-ready','Quick input from me':'n-quick','Needs filming':'n-film','To do':'n-todo'};
  var NEED_ORDER=['Ready from my files','Quick input from me','Needs filming','To do'];
  var GOAL_TEXT={Reach:'Gets saves and shares, new people find you',Trust:'Shows your work and who you are',Leads:'Points people to book or DM you'};

  // ---------- saved / posted, kept in this browser ----------
  var store={saved:{},used:{}};
  function load(){
    try{
      var raw=localStorage.getItem(KEY);
      if(raw){var s=JSON.parse(raw);store.saved=s.saved||{};store.used=s.used||{};return}
    }catch(_){}
    SEED_SAVED.forEach(function(id){store.saved[id]=1});
    persist();
  }
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(_){toast('This browser blocked saving. Marks reset when you close the page.')}}
  function isSaved(i){return !!store.saved[i.id]}
  function isUsed(i){return !!store.used[i.id]}
  window.addEventListener('storage',function(e){if(e.key===KEY){load();render()}});

  // ---------- helpers ----------
  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
  function toast(m){var t=$('toast');t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(function(){t.hidden=true},2000)}
  function uniq(list,fn){var o=[];list.forEach(function(i){var v=fn(i);if(v!=null&&o.indexOf(v)<0)o.push(v)});return o}
  var STAR='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 17l-5.8 3.3 1.4-6.4L2.7 9.5l6.5-.7z"/></svg>';

  // timecode in the HUD
  (function(){var tc=$('tc');if(!tc)return;var s=Date.now();setInterval(function(){var f=Math.floor((Date.now()-s)/40),p=function(n){return ('0'+n).slice(-2)};tc.textContent=p(Math.floor(f/90000)%24)+':'+p(Math.floor(f/1500)%60)+':'+p(Math.floor(f/25)%60)+':'+p(f%25)},40)})();

  // ---------- tabs per page ----------
  var TABS = PAGE==='saved' ? [
    {k:'all',label:'Everything',test:function(){return true}},
    {k:'Carousel',label:'Carousels',test:function(i){return i.f==='Carousel'}},
    {k:'Reel',label:'Reels',test:function(i){return i.f==='Reel'}},
    {k:'Talking head',label:'Talking head',test:function(i){return i.f==='Talking head'}},
    {k:'Story',label:'Stories',test:function(i){return i.f==='Story'}},
    {k:'Series',label:'Series',test:function(i){return i.f==='Series'}},
    {k:'To do',label:'To-dos',test:function(i){return i.f==='To do'}}
  ] : [
    {k:'more',label:'More like these',title:'More like <em>what you saved</em>',text:'New ideas, each grown from one you saved. Tap the star to add one to your saved list.',test:function(i){return i.kind==='more'}},
    {k:'talk',label:'Talking head',title:'Talking <em>head</em>',text:'Getting on camera, step by step: voice only, then hands on camera, then face to camera. Each idea has three beats to say and footage to cut over it, so it\'s never just a face. A phone on a tripod by a window is enough.',test:function(i){return i.kind==='talk'}},
    {k:'launch',label:'Website launch',title:'Launch <em>the site</em>',text:'Posts and to-dos for promoting milomotionimages.ie, in order: before, launch day, launch week, ongoing, then getting it in front of the people who hire.',test:function(i){return i.kind==='launch'}},
    {k:'orig',label:'First 150',title:'The first <em>150</em>',text:'The original ideas built from your archive and client folders.',test:function(i){return i.kind==='idea'&&!i.hold}},
    {k:'hold',label:'On hold',title:'On hold: <em>Saleen</em>',text:'Nothing here can be posted yet. Kept apart until the film can be shared.',test:function(i){return !!i.hold}}
  ];
  var PHASES={before:'1 · Before launch',day:'2 · Launch day',week:'3 · Launch week',after:'4 · Ongoing',action:'5 · Get it in front of buyers'};

  var GROUPS={
    none:{label:'No grouping',fn:function(){return ''}},
    client:{label:'Client',fn:function(i){return i.client}},
    p:{label:'Type',fn:function(i){return i.p}},
    needs:{label:'What it needs',fn:function(i){return i.needs}},
    goal:{label:'Goal',fn:function(i){return i.goal}},
    f:{label:'Format',fn:function(i){return i.f}},
    ph:{label:'Launch step',fn:function(i){return PHASES[i.ph]||'Other'}}
  };
  var SORTS={
    bdfirst:{label:'Broken down first',fn:function(a,b){return (bd(b)?1:0)-(bd(a)?1:0)||NEED_ORDER.indexOf(a.needs)-NEED_ORDER.indexOf(b.needs)||cmpId(a,b)}},
    quick:{label:'Quickest first',fn:function(a,b){return NEED_ORDER.indexOf(a.needs)-NEED_ORDER.indexOf(b.needs)||cmpId(a,b)}},
    client:{label:'Client A–Z',fn:function(a,b){return a.client.localeCompare(b.client)||cmpId(a,b)}},
    id:{label:'Idea number',fn:cmpId}
  };
  function cmpId(a,b){return ALL.indexOf(a)-ALL.indexOf(b)}

  var defaults=function(){return {client:'all',needs:'all',goal:'all',p:'all',lvl:'all',q:'',group:PAGE==='saved'?'client':'none',sort:'quick',hideUsed:false,bdOnly:false}};
  var state={tab:TABS[0].k,f:defaults()};
  try{var saved=JSON.parse(localStorage.getItem(KEY+'-view-'+PAGE)||'null');if(saved&&TABS.some(function(t){return t.k===saved.tab})){state.tab=saved.tab;state.f.group=saved.group||state.f.group;state.f.sort=saved.sort||state.f.sort}}catch(_){}
  function rememberView(){try{localStorage.setItem(KEY+'-view-'+PAGE,JSON.stringify({tab:state.tab,group:state.f.group,sort:state.f.sort}))}catch(_){}}
  function tabObj(){return TABS.filter(function(t){return t.k===state.tab})[0]}

  function pool(){return PAGE==='saved'?ALL.filter(function(i){return isSaved(i)&&!i.hold}):ALL}
  function tabList(t){return pool().filter(t.test)}

  // ---------- render ----------
  function renderStats(){
    var s=$('stats');if(!s)return;s.innerHTML='';
    var sv=ALL.filter(isSaved).length,us=ALL.filter(function(i){return isSaved(i)&&isUsed(i)}).length;
    if(PAGE==='saved'){
      [[sv,'saved'],[ALL.filter(function(i){return isSaved(i)&&bd(i)}).length,'broken down'],[us,'posted'],[sv-us,'to go']].forEach(function(x){var e=el('span');e.appendChild(el('b',null,String(x[0])));e.appendChild(document.createTextNode(x[1]));s.appendChild(e)});
      var m=el('div','meter');var bar=el('i');bar.style.width=(sv?Math.round(us/sv*100):0)+'%';m.appendChild(bar);s.appendChild(m);
    }else{
      [[ALL.length,'ideas'],[ALL.filter(function(i){return i.kind==='more'}).length,'more like these'],[ALL.filter(function(i){return i.kind==='talk'}).length,'talking head'],[ALL.filter(function(i){return i.kind==='launch'}).length,'website launch']].forEach(function(x){var e=el('span');e.appendChild(el('b',null,String(x[0])));e.appendChild(document.createTextNode(x[1]));s.appendChild(e)});
    }
    var sc=$('savedCount');if(sc)sc.textContent=sv;
  }

  function renderTabs(){
    var w=$('tabs');w.innerHTML='';
    TABS.forEach(function(t){
      var n=tabList(t).length;
      var b=el('button','tab');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-selected',t.k===state.tab?'true':'false');
      b.appendChild(document.createTextNode(t.label));b.appendChild(el('span','n',String(n)));
      if(PAGE==='saved'&&!n&&t.k!==state.tab)b.disabled=true;
      b.addEventListener('click',function(){var keep={group:state.f.group,sort:state.f.sort};state.tab=t.k;state.f=defaults();state.f.group=keep.group;state.f.sort=keep.sort;
        if(PAGE==='all'&&t.k==='launch')state.f.group='ph';else if(PAGE==='all'&&state.f.group==='ph')state.f.group='none';
        rememberView();render(true);var top=$('tabsBar').offsetTop;if(window.scrollY>top)window.scrollTo({top:top})});
      w.appendChild(b);
    });
  }

  function select(key,label,options,onChange){
    var wrap=el('div','sel'+(state.f[key]!=='all'&&['client','needs','goal','p','lvl'].indexOf(key)>=0?' on':''));
    var id='s-'+key;var l=el('label',null,label);l.htmlFor=id;wrap.appendChild(l);
    var s=el('select');s.id=id;
    options.forEach(function(o){var op=el('option',null,o[1]);op.value=o[0];if(String(state.f[key])===String(o[0]))op.selected=true;s.appendChild(op)});
    s.addEventListener('change',function(){state.f[key]=this.value;if(onChange)onChange();rememberView();render()});
    wrap.appendChild(s);return wrap;
  }
  function opts(base,fn,allLabel,order){var v=uniq(base,fn);if(order)v.sort(function(a,b){return (order.indexOf(a)+1||99)-(order.indexOf(b)+1||99)});else v.sort();return [['all',allLabel]].concat(v.map(function(x){return [x,x+' ('+base.filter(function(i){return fn(i)===x}).length+')']}))}

  function renderTools(){
    var t=tabObj(),base=tabList(t),box=$('tools');box.innerHTML='';
    var head=el('div','tools-head');
    var h=el('h2');
    if(PAGE==='saved'){h.innerHTML=(t.k==='all'?'Everything <em>saved</em>':'Saved <em>'+t.label.toLowerCase()+'</em>')}else h.innerHTML=t.title;
    head.appendChild(h);
    if(t.text)head.appendChild(el('p',null,t.text));
    box.appendChild(head);

    var r1=el('div','row');
    var srch=el('label','search');srch.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
    var inp=el('input');inp.type='search';inp.placeholder='Search titles, hooks, folders…';inp.setAttribute('aria-label','Search');inp.value=state.f.q;
    inp.addEventListener('input',function(){state.f.q=this.value.trim().toLowerCase();renderList()});
    srch.appendChild(inp);r1.appendChild(srch);
    if(PAGE==='saved'){
      var hu=el('button','toggle',state.f.hideUsed?'Hiding posted':'Hide posted');hu.type='button';hu.setAttribute('aria-pressed',state.f.hideUsed?'true':'false');
      hu.addEventListener('click',function(){state.f.hideUsed=!state.f.hideUsed;render()});r1.appendChild(hu);
      var bo=el('button','toggle',state.f.bdOnly?'Broken down only':'Only broken down');bo.type='button';bo.setAttribute('aria-pressed',state.f.bdOnly?'true':'false');
      bo.addEventListener('click',function(){state.f.bdOnly=!state.f.bdOnly;render()});r1.appendChild(bo);
    }
    box.appendChild(r1);

    var r2=el('div','row');
    r2.appendChild(select('client','Client',opts(base,function(i){return i.client},'All')));
    r2.appendChild(select('needs','Needs',opts(base,function(i){return i.needs},'Anything',NEED_ORDER)));
    r2.appendChild(select('goal','Goal',opts(base,function(i){return i.goal},'Any',['Reach','Trust','Leads'])));
    if(t.k==='talk'||(PAGE==='saved'&&t.k==='Talking head'))r2.appendChild(select('lvl','Level',[['all','Any']].concat([1,2,3].map(function(n){return [String(n),LVL[n]]}))));
    else r2.appendChild(select('p','Type',opts(base,function(i){return i.p},'All types')));
    var gopts=['none','client','p','needs','goal'];if(PAGE==='saved'&&t.k==='all')gopts.splice(1,0,'f');if(t.k==='launch')gopts.splice(1,0,'ph');
    r2.appendChild(select('group','Group',gopts.map(function(k){return [k,GROUPS[k].label]})));
    r2.appendChild(select('sort','Sort',Object.keys(SORTS).map(function(k){return [k,SORTS[k].label]})));
    var active=['client','needs','goal','p','lvl'].some(function(k){return state.f[k]!=='all'})||state.f.q;
    if(active){var c=el('button','clear','Clear filters');c.type='button';c.addEventListener('click',function(){var g=state.f.group,s=state.f.sort,h=state.f.hideUsed;state.f=defaults();state.f.group=g;state.f.sort=s;state.f.hideUsed=h;render()});r2.appendChild(c)}
    var cnt=el('span','count');cnt.id='count';r2.appendChild(cnt);
    box.appendChild(r2);
  }

  function matches(i){
    var f=state.f;
    if(f.client!=='all'&&i.client!==f.client)return false;
    if(f.needs!=='all'&&i.needs!==f.needs)return false;
    if(f.goal!=='all'&&i.goal!==f.goal)return false;
    if(f.p!=='all'&&i.p!==f.p)return false;
    if(f.lvl!=='all'&&String(i.lvl)!==String(f.lvl))return false;
    if(f.hideUsed&&isUsed(i))return false;
    if(f.bdOnly&&!bd(i))return false;
    if(f.q){var hay=[i.id,i.t,i.hook,i.how,i.src,i.p,i.f,i.client,(i.beats||[]).join(' '),i.broll].join(' ').toLowerCase();if(hay.indexOf(f.q)<0)return false}
    return true;
  }

  function copyText(i){
    if(i.kind==='talk')return 'Claude, write and cut talking head '+i.id+': '+i.t+'. Hook: "'+i.hook+'". Beats: '+i.beats.join('; ')+'. B-roll: '+i.broll+'. About '+i.len+'.';
    if(i.kind==='launch')return 'Claude, help with website launch idea '+i.id+': '+i.t+' ('+i.f+'). '+i.how;
    if(bd(i))return 'Claude, make idea '+i.id+': '+i.t+' ('+i.f+'). Follow its breakdown in the Idea Bank (breakdowns.js).';
    return 'Claude, make idea '+i.id+': '+i.t+' ('+i.f+'). Hook: "'+i.hook+'". '+i.how+(i.src?' Source: '+i.src:'');
  }
  function copy(text,btn){
    function ok(){var o=btn.textContent;btn.textContent='Copied';setTimeout(function(){btn.textContent=o},1500)}
    function fb(){var ta=el('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');ok()}catch(_){toast('Copy didn\'t work in this browser.')}ta.remove()}
    try{navigator.clipboard.writeText(text).then(ok,fb)}catch(_){fb()}
  }

  function card(i){
    var c=el('article','card'+(isSaved(i)?' is-saved':'')+(isUsed(i)&&PAGE==='saved'?' is-used':'')+(i.hold?' held':''));
    var sl=el('div','slate');sl.appendChild(el('span','id',i.id.toUpperCase()));sl.appendChild(el('span','sep'));sl.appendChild(el('span',null,i.f));
    if(i.kind==='talk'){sl.appendChild(el('span','sep'));sl.appendChild(el('span',null,i.len))}
    var st=el('button','star');st.type='button';st.innerHTML=STAR;st.setAttribute('aria-pressed',isSaved(i)?'true':'false');st.setAttribute('aria-label',isSaved(i)?'Remove from saved':'Save idea');st.title=isSaved(i)?'Remove from saved':'Save';
    st.addEventListener('click',function(){
      if(store.saved[i.id])delete store.saved[i.id];else store.saved[i.id]=1;persist();
      toast(store.saved[i.id]?'Saved':'Removed from saved');render();
    });
    sl.appendChild(st);c.appendChild(sl);
    c.appendChild(el('h3',null,i.t));
    c.appendChild(el('p','hook',i.hook));
    if(i.kind==='talk'){
      var ol=el('ol','beats');i.beats.forEach(function(b){ol.appendChild(el('li',null,b))});c.appendChild(ol);
      c.appendChild(el('p','src','Footage over it: '+i.broll));
    }else{
      c.appendChild(el('p','how',i.how));
      if(i.src)c.appendChild(el('p','src',i.src));
    }
    if(i.parent){var fr=el('p','from');fr.appendChild(document.createTextNode('From your saved '));fr.appendChild(el('b',null,i.parent.t));c.appendChild(fr)}
    var pl=el('div','pills');
    pl.appendChild(el('span','pill client',i.client));
    pl.appendChild(el('span','pill '+(NEED_CLASS[i.needs]||''),i.kind==='talk'?LVL[i.lvl]:i.needs));
    pl.appendChild(el('span','pill',i.goal));
    if(i.kind!=='launch')pl.appendChild(el('span','pill',i.p));
    if(i.ok)pl.appendChild(el('span','pill warn','Check with client'));
    if(i.old)pl.appendChild(el('span','pill','From the archive'));
    if(i.hold)pl.appendChild(el('span','pill hold','On hold'));
    c.appendChild(pl);
    var b=bd(i);
    if(b){
      var det=el('details','bd');var sm=el('summary');sm.appendChild(el('span','bd-k','Breakdown'));sm.appendChild(el('span','bd-t',b.time));det.appendChild(sm);
      var you=el('div','bd-you');you.appendChild(el('b',null,'Your part'));you.appendChild(document.createTextNode(b.you));det.appendChild(you);
      function block(title,items,cls){if(!items||!items.length)return;det.appendChild(el('h5',null,title));var l=el(cls==='ol'?'ol':'ul','bd-list');items.forEach(function(x){l.appendChild(el('li',null,x))});det.appendChild(l)}
      block('Steps',b.steps,'ol');
      block(i.f==='Carousel'?'Slides':i.f==='Reel'?'Shots':'What it is',b.parts);
      block('Files',b.files);
      if(b.cap){det.appendChild(el('h5',null,'Caption'));var cp2=el('pre','bd-cap',b.cap);det.appendChild(cp2);
        var cb=el('button','act','Copy caption');cb.type='button';cb.addEventListener('click',function(){copy(b.cap,cb)});det.appendChild(cb)}
      if(b.check){var ck=el('p','bd-check');ck.appendChild(el('b',null,'Check first: '));ck.appendChild(document.createTextNode(b.check));det.appendChild(ck)}
      c.appendChild(det);
    }
    var ft=el('div','foot');
    if(PAGE==='saved'){
      var done=i.f==='To do';
      var u=el('button','act',isUsed(i)?(done?'Done':'Posted'):(done?'Mark done':'Mark posted'));u.type='button';u.setAttribute('aria-pressed',isUsed(i)?'true':'false');
      u.addEventListener('click',function(){if(store.used[i.id])delete store.used[i.id];else store.used[i.id]=1;persist();render()});
      ft.appendChild(u);
    }
    var cp=el('button','act ghost','Copy request');cp.type='button';cp.addEventListener('click',function(){copy(copyText(i),cp)});
    ft.appendChild(cp);c.appendChild(ft);
    return c;
  }

  function renderList(){
    var t=tabObj(),list=tabList(t).filter(matches).sort(SORTS[state.f.sort].fn),out=$('list');out.innerHTML='';
    $('count').textContent=list.length+' shown';
    if(!list.length){
      var e=el('div','empty');e.appendChild(el('b',null,PAGE==='saved'&&!tabList(t).length?'Nothing saved here yet':'No matches'));
      e.appendChild(document.createTextNode(PAGE==='saved'&&!tabList(t).length?'Star ideas on the main page and they land here.':'Clear a filter or the search.'));out.appendChild(e);return;
    }
    var g=GROUPS[state.f.group]||GROUPS.none,groups={},order=[];
    list.forEach(function(i){var k=g.fn(i);if(!groups[k]){groups[k]=[];order.push(k)}groups[k].push(i)});
    if(state.f.group==='needs')order.sort(function(a,b){return NEED_ORDER.indexOf(a)-NEED_ORDER.indexOf(b)});
    else if(state.f.group==='ph')order.sort();
    else if(state.f.group==='goal')order.sort(function(a,b){return ['Reach','Trust','Leads'].indexOf(a)-['Reach','Trust','Leads'].indexOf(b)});
    else if(state.f.group!=='none')order.sort(function(a,b){return a==='My brand'?-1:b==='My brand'?1:groups[b].length-groups[a].length});
    order.forEach(function(k){
      var sec=el('section','group');
      if(k){var h=el('div','group-h');h.appendChild(el('h3',null,k));h.appendChild(el('span','n',String(groups[k].length)));if(state.f.group==='goal')h.appendChild(el('p',null,GOAL_TEXT[k]||''));sec.appendChild(h)}
      var grid=el('div','grid');groups[k].forEach(function(i){grid.appendChild(card(i))});sec.appendChild(grid);out.appendChild(sec);
    });
  }

  function render(full){
    renderStats();renderTabs();
    var y=window.scrollY,focused=document.activeElement&&document.activeElement.tagName==='INPUT';
    if(!focused||full)renderTools();
    renderList();
    if(!full)window.scrollTo(0,y);
  }

  // ---------- backup / restore (saved page) ----------
  var exp=$('exportBtn');if(exp)exp.addEventListener('click',function(){
    var blob=new Blob([JSON.stringify(store,null,1)],{type:'application/json'});var a=el('a');a.href=URL.createObjectURL(blob);a.download='idea-bank-saved.json';document.body.appendChild(a);a.click();a.remove();toast('Backup downloaded');
  });
  var imp=$('importFile');if(imp)imp.addEventListener('change',function(){
    var f=this.files[0];if(!f)return;var r=new FileReader();
    r.onload=function(){try{var s=JSON.parse(r.result);if(!s.saved)throw 0;store.saved=s.saved;store.used=s.used||{};persist();render(true);toast('Saved list restored')}catch(_){toast('That file isn\'t an Idea Bank backup.')}};
    r.readAsText(f);this.value='';
  });
  var cl=$('copyList');if(cl)cl.addEventListener('click',function(){
    var ids=ALL.filter(function(i){return isSaved(i)&&!isUsed(i)}).map(function(i){return i.id});
    copy('My saved Idea Bank ideas (not posted yet): '+ids.join(', '),cl);
  });

  load();render(true);
})();
