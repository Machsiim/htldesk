import{r as p,o as d,c as u,a as e,F as f,i as m,v as h,d as o,t as _,b as a,w as i,f as c}from"./index.68a3ca69.js";const g={class:"loginForm"},k=e("label",null,"Username:",-1),v=e("hr",null,null,-1),b=e("label",null,"Password:",-1),w=e("hr",null,null,-1),L={key:1,class:"container-fluid"},y={class:"footer-dark"},V={class:"text-center text-white",id:"maxim"},$=e("br",null,null,-1),A={class:"container"},D={class:"row"},S={class:"col-sm-6 col-md-3 item"},T=e("h3",null,"Seiten",-1),z={class:"col-sm-6 col-md-3 item"},B=e("h3",null,"About",-1),C=e("div",{class:"col-md-6 item text"},[e("h3",null,"InParis"),e("p",null," Die Webapllikation bietet Hilfe an f\xFCr Sch\xFCler oder auch Lehrer. Arbeiten Sie ganz leicht mit unsere Tools ")],-1),F=e("p",{class:"copyright"},"InParis \xA9 2023",-1),I={data(){return{model:{username:"",password:""}}},methods:{deleteToken(){delete c.defaults.headers.common.Authorization,this.$store.commit("authenticate",null)},async sendLoginData(){console.log("Sending login data");try{const r=(await c.post("users/login",this.model)).data;c.defaults.headers.common.Authorization=`Bearer ${r.token}`,this.$store.commit("authenticate",r),console.log("Login successful"),this.$router.push("/dashboard")}catch(r){r.response.status==401&&alert("Login failed. Invalid credentials.")}}},computed:{authenticated(){return this.$store.state.user.isLoggedIn},username(){return this.$store.state.user.username}}},U=Object.assign(I,{__name:"LoginView",setup(r){return(t,s)=>{const l=p("RouterLink");return d(),u("div",g,[e("form",null,[t.authenticated?(d(),u("div",L,[e("h1",null,"Willkommen, "+_(t.username),1),o(" Angemeldet als "+_(t.username)+" ",1),e("a",{href:"javascript:void(0)",onClick:s[3]||(s[3]=n=>t.deleteToken())},"Abmelden")])):(d(),u(f,{key:0},[k,m(e("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=n=>t.model.username=n)},null,512),[[h,t.model.username]]),v,b,m(e("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=n=>t.model.password=n)},null,512),[[h,t.model.password]]),w,e("button",{type:"button",onClick:s[2]||(s[2]=(...n)=>t.sendLoginData&&t.sendLoginData(...n))},"Submit"),o(" (Hint: Use lenz, Password 1111) ")],64))]),e("div",y,[e("footer",V,[$,e("div",A,[e("div",D,[e("div",S,[T,e("ul",null,[e("li",null,[a(l,{to:"/",class:"footer-link"},{default:i(()=>[o("Home")]),_:1})]),e("li",null,[a(l,{to:"/login",class:"footer-link"},{default:i(()=>[o("Login")]),_:1})]),e("li",null,[a(l,{to:"/register",class:"footer-link"},{default:i(()=>[o("Register")]),_:1})])])]),e("div",z,[B,e("ul",null,[e("li",null,[a(l,{to:"/about",class:"footer-link"},{default:i(()=>[o("Firma")]),_:1})]),e("li",null,[a(l,{to:"/about",class:"footer-link"},{default:i(()=>[o("Team")]),_:1})]),e("li",null,[a(l,{to:"/about",class:"footer-link"},{default:i(()=>[o("Karriere")]),_:1})])])]),C]),F])])])])}}});export{U as default};
