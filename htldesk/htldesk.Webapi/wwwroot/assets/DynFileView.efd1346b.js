import{_ as p,o,c as l,a as t,t as r,F as h,j as m,f as d,r as g,b as n,w as a,d as c}from"./index.8a4a11e4.js";const b={props:{name:String}},v={class:"imageContainer"};function $(i,s,_,e,u,E){return o(),l("div",v,[t("div",null,r(this.$store.state.file.guid),1)])}const k=p(b,[["render",$],["__scopeId","data-v-61cda82e"]]),y={class:"accounts"},w=t("br",null,null,-1),x=t("br",null,null,-1),D=t("br",null,null,-1),F=t("br",null,null,-1),S={data(){return{entries:[],entrieCount:0,name:"2800",guid:"08daf341-a2c3-4020-8154-4a29c41300b7"}},mounted:async function(){this.entrieCount=(await d.get("https://localhost:5001/api/entries/count/"+this.guid)).data,this.entries=(await d.get("https://localhost:5001/api/entries/"+this.guid)).data}},f=Object.assign(S,{__name:"AccountingAccount",setup(i){return(s,_)=>(o(),l("div",y,[w,x,t("div",null,"Konto: "+r(this.name),1),D,(o(!0),l(h,null,m(s.entries,e=>(o(),l("div",{key:e.guid},[t("div",null,"Datum: "+r(e.datum),1),t("div",null,"Gegenkonto: "+r(e.gegenKonto),1),t("div",null,"Soll: "+r(e.soll),1),t("div",null,"Haben: "+r(e.haben),1),F]))),128))]))}});const A=t("br",null,null,-1),L=t("br",null,null,-1),C=t("br",null,null,-1),V={class:"footer-dark"},j={class:"text-center text-white",id:"dashaev"},N=t("br",null,null,-1),B={class:"container"},H={class:"row"},I={class:"col-sm-6 col-md-3 item"},K=t("h3",null,"Seiten",-1),P={class:"col-sm-6 col-md-3 item"},R=t("h3",null,"About",-1),T=t("div",{class:"col-md-6 item text"},[t("h3",null,"InParis"),t("p",null," Die Webapllikation bietet Hilfe an f\xFCr Sch\xFCler oder auch Lehrer. Arbeiten Sie ganz leicht mit unsere Tools ")],-1),O=t("p",{class:"copyright"},"InParis \xA9 2023",-1),z={data(){return{fileName:this.$route.params.filename,accounts:[]}},methods:{returnFilename(){return console.log(this.$route.params.filename),this.$route.params.filename}},mounted:async function(){try{const i=await fetch("https://localhost:5001/api/accountingaccounts/"+this.$store.state.file.guid);i.ok||alert("Problem beim Laden der Daten."),i.json().then(s=>{this.accounts=s,console.log(this.accounts)})}catch{alert("Der Server ist nicht erreichbar.")}},components:{AccountingAccount:f}},W=Object.assign(z,{__name:"DynFileView",setup(i){return(s,_)=>{const e=g("RouterLink");return o(),l("div",null,[A,L,C,n(k,{name:s.$route.params.filename},null,8,["name"]),(o(!0),l(h,null,m(s.accounts,u=>(o(),l("div",{key:u.guid},[n(f,{guid:u.guid},null,8,["guid"])]))),128)),t("div",V,[t("footer",j,[N,t("div",B,[t("div",H,[t("div",I,[K,t("ul",null,[t("li",null,[n(e,{to:"/",class:"footer-link"},{default:a(()=>[c("Home")]),_:1})]),t("li",null,[n(e,{to:"/login",class:"footer-link"},{default:a(()=>[c("Login")]),_:1})]),t("li",null,[n(e,{to:"/register",class:"footer-link"},{default:a(()=>[c("Register")]),_:1})])])]),t("div",P,[R,t("ul",null,[t("li",null,[n(e,{to:"/about",class:"footer-link"},{default:a(()=>[c("Firma")]),_:1})]),t("li",null,[n(e,{to:"/about",class:"footer-link"},{default:a(()=>[c("Team")]),_:1})]),t("li",null,[n(e,{to:"/about",class:"footer-link"},{default:a(()=>[c("Karriere")]),_:1})])])]),T]),O])])])])}}});export{W as default};
