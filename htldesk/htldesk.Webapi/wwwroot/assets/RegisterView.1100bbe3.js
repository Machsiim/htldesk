import{_ as f,f as g,r as h,o as p,c as y,a as e,g as w,b as c,w as u,h as b,d as m}from"./index.29c28a44.js";function v(){const r=document.getElementById("username"),t=document.getElementById("email"),n=document.getElementById("password"),d=document.getElementById("password2"),o=document.querySelectorAll(".error");document.getElementById("success"),document.querySelector("#eye_icon"),i();let s=!1;r.value.length<3&&(o[0].innerText="Username must be at least 3 characters long",r.classList.add("error-border"),s=!0),a(t.value)||(o[1].innerText="Email is not valid",t.classList.add("error-border"),s=!0),n.value.length<4&&(o[2].innerText="Password must be at least 4 characters long",n.classList.add("error-border"),s=!0),d.value!==n.value&&(o[3].innerText="Passwords do not match",d.classList.add("error-border"),s=!0);function a(l){return/\S+@\S+\.\S+/.test(l)}function i(){o.forEach(l=>{l.innerText=""}),document.querySelectorAll(".error-border").forEach(l=>{l.classList.remove("error-border")})}return!s}const x={data(){return{email:"",username:"",password:"",passwordConfirmation:""}},methods:{async register(){if(!!v())try{console.log(document.getElementById("email").value);const r=(await g.post("users/register",{email:document.getElementById("email").value,username:document.getElementById("username").value,password:document.getElementById("password").value})).data;console.log(r),this.$router.push("/login")}catch(r){console.error(r),this.errorMessage="Error creating user"}},togglePasswordVisibility:function(){const r=arguments[0],t=arguments[1],n=r.getAttribute("type")==="password"?"text":"password";r.setAttribute("type",n),t.classList.toggle("fa-eye-slash")},validateForm(){const r=document.getElementById("username"),t=document.getElementById("email"),n=document.getElementById("password"),d=document.getElementById("password2"),o=document.querySelectorAll(".error");document.getElementById("success"),document.querySelector("#eye_icon"),i();let s=!1;r.value.length<3&&(o[0].innerText="Username must be at least 3 characters long",r.classList.add("error-border"),s=!0),a(t.value)||(o[1].innerText="Email is not valid",t.classList.add("error-border"),s=!0),n.value.length<4&&(o[2].innerText="Password must be at least 4 characters long",n.classList.add("error-border"),s=!0),d.value!==n.value&&(o[3].innerText="Passwords do not match",d.classList.add("error-border"),s=!0);function a(l){return/\S+@\S+\.\S+/.test(l)}function i(){o.forEach(l=>{l.innerText=""}),document.querySelectorAll(".error-border").forEach(l=>{l.classList.remove("error-border")})}return!s}}},E=e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"},null,-1),S={class:"register"},B=e("h1",{id:"reg_form"},"Registration Form",-1),I=b('<label for="username">Username:</label><input type="text" id="username" name="username"><br><small class="error"></small><hr><label for="email">Email:</label><input type="text" id="email" name="email"><br><small class="error"></small><hr><label for="password">Password:</label>',11),k={id:"password-container"},L={type:"password",id:"password",ref:"password",name:"password"},T=e("br",null,null,-1),P=e("small",{class:"error"},null,-1),V=e("hr",null,null,-1),A=e("label",{for:"password2"},"Confirm Password:",-1),C={type:"password",id:"password2",ref:"password2",name:"password2"},q=e("br",null,null,-1),F=e("small",{class:"error"},null,-1),N=e("hr",null,null,-1),R=e("p",{id:"success"},null,-1),$={class:"footer-dark"},U={class:"text-center text-white"},j=e("br",null,null,-1),H={class:"container"},M={class:"row"},z={class:"col-sm-6 col-md-3 item"},D=e("h3",null,"Seiten",-1),K={class:"col-sm-6 col-md-3 item"},W=e("h3",null,"About",-1),G=e("div",{class:"col-md-6 item text"},[e("h3",null,"InParis"),e("p",null," Die Webapllikation bietet Hilfe an f\xFCr Sch\xFCler oder auch Lehrer. Arbeiten Sie ganz leicht mit unsere Tools ")],-1),J=e("p",{class:"copyright"},"InParis \xA9 2023",-1);function O(r,t,n,d,o,s){const a=h("RouterLink");return p(),y("div",null,[E,e("div",S,[B,e("form",{onSubmit:t[3]||(t[3]=w((...i)=>s.register&&s.register(...i),["prevent"]))},[I,e("div",k,[e("input",L,null,512),e("i",{class:"fa fa-eye eye-icon",id:"eye_icon",ref:"eye_icon",onClick:t[0]||(t[0]=i=>s.togglePasswordVisibility(this.$refs.password,this.$refs.eye_icon))},null,512)]),T,P,V,A,e("input",C,null,512),e("i",{class:"fa fa-eye eye-icon",id:"eye_icon2",ref:"eye_icon2",onClick:t[1]||(t[1]=i=>s.togglePasswordVisibility(this.$refs.password2,this.$refs.eye_icon2))},null,512),q,F,N,e("input",{type:"submit",value:"Submit",onClick:t[2]||(t[2]=(...i)=>s.register&&s.register(...i))}),R],32)]),e("div",$,[e("footer",U,[j,e("div",H,[e("div",M,[e("div",z,[D,e("ul",null,[e("li",null,[c(a,{to:"/",class:"footer-link"},{default:u(()=>[m("Home")]),_:1})]),e("li",null,[c(a,{to:"/login",class:"footer-link"},{default:u(()=>[m("Login")]),_:1})]),e("li",null,[c(a,{to:"/register",class:"footer-link"},{default:u(()=>[m("Register")]),_:1})])])]),e("div",K,[W,e("ul",null,[e("li",null,[c(a,{to:"/about",class:"footer-link"},{default:u(()=>[m("Firma")]),_:1})]),e("li",null,[c(a,{to:"/about",class:"footer-link"},{default:u(()=>[m("Team")]),_:1})]),e("li",null,[c(a,{to:"/about",class:"footer-link"},{default:u(()=>[m("Karriere")]),_:1})])])]),G]),J])])])])}const X=f(x,[["render",O]]);export{X as default};
