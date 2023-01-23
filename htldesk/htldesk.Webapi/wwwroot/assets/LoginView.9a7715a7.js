import{o as a,c as l,b as t,F as p,g as r,v as d,d as u,t as m,e as i}from"./index.5a3c23c0.js";const h={class:"loginForm"},g=t("label",null,"Username:",-1),c=t("hr",null,null,-1),_=t("label",null,"Password:",-1),f=t("hr",null,null,-1),v={key:1,class:"container-fluid"},w={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete i.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){console.log("Sending login data");try{const n=(await i.post("users/login",this.model)).data;i.defaults.headers.common.Authorization=`Bearer ${n.token}`,this.$store.commit("authenticate",n),console.log("Login successful"),this.$router.push("/dashboard")}catch(n){n.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.username}}},y=Object.assign(w,{__name:"LoginView",setup(n){return(e,s)=>(a(),l("div",h,[t("form",null,[e.authenticated?(a(),l("div",v,[t("h1",null,"Willkommen, "+m(e.username),1),u(" Angemeldet als "+m(e.username)+" ",1),t("a",{href:"javascript:void(0)",onClick:s[3]||(s[3]=o=>e.deleteToken())},"Abmelden")])):(a(),l(p,{key:0},[g,r(t("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=o=>e.model.username=o)},null,512),[[d,e.model.username]]),c,_,r(t("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>e.model.password=o)},null,512),[[d,e.model.password]]),f,t("button",{type:"button",onClick:s[2]||(s[2]=(...o)=>e.sendLoginData&&e.sendLoginData(...o))},"Submit"),u(" (Hint: Use lenz, Password 1111) ")],64))])]))}});export{y as default};