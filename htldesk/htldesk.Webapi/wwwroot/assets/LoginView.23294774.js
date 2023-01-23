import{o as a,c as l,b as t,F as d,g as i,v as u,d as m,t as p,e as r}from"./index.2c6fcb94.js";const h={class:"loginForm"},g=t("label",null,"Username:",-1),c=t("hr",null,null,-1),b=t("label",null,"Password:",-1),f=t("hr",null,null,-1),w={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete r.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){console.log("Sending login data");try{const n=(await r.post("users/login",this.model)).data;r.defaults.headers.common.Authorization=`Bearer ${n.token}`,this.$store.commit("authenticate",n),console.log("Login successful"),this.$router.push("/dashboard")}catch(n){n.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.username}}},v=Object.assign(w,{__name:"LoginView",setup(n){return(e,s)=>(a(),l("div",h,[t("form",null,[e.authenticated?(a(),l(d,{key:1},[m(" Angemeldet als "+p(e.username)+" ",1),t("a",{href:"javascript:void(0)",onClick:s[3]||(s[3]=o=>e.deleteToken())},"Abmelden")],64)):(a(),l(d,{key:0},[g,i(t("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=o=>e.model.username=o)},null,512),[[u,e.model.username]]),c,b,i(t("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>e.model.password=o)},null,512),[[u,e.model.password]]),f,t("button",{type:"button",id:"submitbtn",onClick:s[2]||(s[2]=(...o)=>e.sendLoginData&&e.sendLoginData(...o))}," Submit "),m(" (Hint: Use lenz, Password 1111) ")],64))])]))}});export{v as default};