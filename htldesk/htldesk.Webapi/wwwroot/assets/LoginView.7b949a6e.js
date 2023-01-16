import{o as n,c as l,b as t,F as d,f as i,v as u,g as m,t as p,d as r}from"./index.b2358c5d.js";const h={class:"loginForm"},g=t("label",null,"Username:",-1),c=t("hr",null,null,-1),f=t("label",null,"Password:",-1),w=t("hr",null,null,-1),b={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete r.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){console.log("Sending login data");try{const a=(await r.post("users/login",this.model)).data;r.defaults.headers.common.Authorization=`Bearer ${a.token}`,this.$store.commit("authenticate",a),console.log("Login successful"),this.$router.push("/dashboard")}catch(a){a.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.username}}},v=Object.assign(b,{__name:"LoginView",setup(a){return(e,s)=>(n(),l("div",h,[t("form",null,[e.authenticated?(n(),l(d,{key:1},[m(" Angemeldet als "+p(e.username)+" ",1),t("a",{href:"javascript:void(0)",onClick:s[3]||(s[3]=o=>e.deleteToken())},"Abmelden")],64)):(n(),l(d,{key:0},[g,i(t("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=o=>e.model.username=o)},null,512),[[u,e.model.username]]),c,f,i(t("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>e.model.password=o)},null,512),[[u,e.model.password]]),w,t("button",{type:"button",onClick:s[2]||(s[2]=(...o)=>e.sendLoginData&&e.sendLoginData(...o))},"Submit"),m(" (Hint: Use lenz, Password 1111) ")],64))])]))}});export{v as default};