import{_ as l,o as u,c as d,b as t,d as n,w as r,v as i,e as m}from"./index.a7619fd9.js";const p={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete axios.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){try{const e=(await axios.post("api/users/login",this.model)).data;console.log(e),axios.defaults.headers.common.Authorization=`Bearer ${e.token}`,this.$store.commit("authenticate",e)}catch(e){e.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.name}}},c=t("br",null,null,-1),h=t("br",null,null,-1),f=t("button",{type:"submit"},"Login",-1);function g(e,s,w,b,$,a){return u(),d("div",null,[t("form",{onSubmit:s[2]||(s[2]=m((...o)=>e.login&&e.login(...o),["prevent"]))},[t("label",null,[n(" Username: "),r(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>a.username=o),type:"username",required:""},null,512),[[i,a.username]])]),c,t("label",null,[n(" Password: "),r(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.password=o),type:"password",required:""},null,512),[[i,e.password]])]),h,f],32)])}const y=l(p,[["render",g]]);export{y as default};