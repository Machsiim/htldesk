import"./compiler-core.esm-bundler.d08ef138.js";import{o as n,c,a as s,F as u,j as l,f as i,t as r}from"./index.283cb2a5.js";const d=s("h3",null,"Konto l\xF6schen",-1),h={class:"select"},g={id:"fortnite"},_={props:{entries:[]},data(){return{accounts:[]}},async mounted(){const t=await i.get("https://localhost:5001/api/accountingaccounts/"+this.$store.state.file.guid);console.log(this.$store.state.file.guid),this.accounts=t.data,console.log(this.accounts)},methods:{deleteAccount(){i.delete("https://localhost:5001/api/accountingaccounts/"+this.getAccountGuid(document.getElementById("fortnite").value),{name:document.getElementById("fortnite").value,fileGuid:this.$store.state.file.guid}).then(t=>{this.message=t.data}).catch(t=>{console.log(t)}),this.$router.push("/dashboard")},getAccountGuid(t){for(let e=0;e<this.accounts.length;e++)if(this.accounts[e].name===t)return this.accounts[e].guid}}},f=Object.assign(_,{__name:"DeleteView",setup(t){return(e,a)=>(n(),c("div",null,[d,s("div",h,[s("select",g,[(n(!0),c(u,null,l(e.accounts,o=>(n(),c("option",{key:o.guid},r(o.name),1))),128))]),s("input",{type:"submit",onClick:a[0]||(a[0]=o=>e.deleteAccount()),L\u00F6schen:""})])]))}});export{f as default};
