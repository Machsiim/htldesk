import{o as r,c as d,F as i,b as s,f as n,g as u,v as m,t as p,d as l}from"./index.e9ad5326.js";const h={class:"loginForm"},g={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete l.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){try{const a=(await l.post("users/login",this.model)).data;l.defaults.headers.common.Authorization=`Bearer ${a.token}`,this.$store.commit("authenticate",a),this.$router.push("/dashboard")}catch(a){a.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.username}}},b=Object.assign(g,{__name:"LoginView",setup(a){return(e,t)=>(r(),d("div",h,[e.authenticated?(r(),d(i,{key:1},[n(" Angemeldet als "+p(e.username)+" ",1),s("a",{href:"javascript:void(0)",onClick:t[3]||(t[3]=o=>e.deleteToken())},"Abmelden")],64)):(r(),d(i,{key:0},[s("label",null,[n("Username: "),u(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>e.model.username=o)},null,512),[[m,e.model.username]])]),s("label",null,[n("Password: "),u(s("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>e.model.password=o)},null,512),[[m,e.model.password]])]),s("button",{type:"button",onClick:t[2]||(t[2]=o=>e.sendLoginData())},"Submit"),n(" (Hint: Use lenz, Password 1111) ")],64))]))}});export{b as default};
