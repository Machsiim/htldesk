import{_ as u,d as m,o as f,c as g,b as r,w as p,F as _,e as h}from"./index.e9ad5326.js";function y(){const o=document.getElementById("username"),s=document.getElementById("email"),n=document.getElementById("password"),i=document.getElementById("password2"),t=document.querySelectorAll(".error");document.getElementById("success"),document.querySelector("#eye_icon"),d();let e=!1;o.value.length<3&&(t[0].innerText="Username must be at least 3 characters long",o.classList.add("error-border"),e=!0),l(s.value)||(t[1].innerText="Email is not valid",s.classList.add("error-border"),e=!0),n.value.length<4&&(t[2].innerText="Password must be at least 4 characters long",n.classList.add("error-border"),e=!0),i.value!==n.value&&(t[3].innerText="Passwords do not match",i.classList.add("error-border"),e=!0);function l(a){return/\S+@\S+\.\S+/.test(a)}function d(){t.forEach(a=>{a.innerText=""}),document.querySelectorAll(".error-border").forEach(a=>{a.classList.remove("error-border")})}return!e}const w={data(){return{email:"",username:"",password:"",passwordConfirmation:""}},methods:{async register(){if(!!y())try{await m.post("https://localhost:5001/api/users/register",{email:this.email,username:this.username,password:this.password}),this.$router.push("/login")}catch(o){console.error(o),this.errorMessage="Error creating user"}},togglePasswordVisibility:function(){const o=arguments[0],s=arguments[1],n=o.getAttribute("type")==="password"?"text":"password";o.setAttribute("type",n),s.classList.toggle("fa-eye-slash")},validateForm(){const o=document.getElementById("username"),s=document.getElementById("email"),n=document.getElementById("password"),i=document.getElementById("password2"),t=document.querySelectorAll(".error");document.getElementById("success"),document.querySelector("#eye_icon"),d();let e=!1;o.value.length<3&&(t[0].innerText="Username must be at least 3 characters long",o.classList.add("error-border"),e=!0),l(s.value)||(t[1].innerText="Email is not valid",s.classList.add("error-border"),e=!0),n.value.length<4&&(t[2].innerText="Password must be at least 4 characters long",n.classList.add("error-border"),e=!0),i.value!==n.value&&(t[3].innerText="Passwords do not match",i.classList.add("error-border"),e=!0);function l(a){return/\S+@\S+\.\S+/.test(a)}function d(){t.forEach(a=>{a.innerText=""}),document.querySelectorAll(".error-border").forEach(a=>{a.classList.remove("error-border")})}return!e}}},b=r("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"},null,-1),v={class:"register"},x=r("h1",{id:"reg_form"},"Registration Form",-1),E=h('<label for="username">Username:</label><input type="text" id="username" name="username"><br><small class="error"></small><hr><label for="email">Email:</label><input type="text" id="email" name="email"><br><small class="error"></small><hr><label for="password">Password:</label>',11),S={id:"password-container"},B={type:"password",id:"password",ref:"password",name:"password"},I=r("br",null,null,-1),L=r("small",{class:"error"},null,-1),T=r("hr",null,null,-1),P=r("label",{for:"password2"},"Confirm Password:",-1),F={type:"password",id:"password2",ref:"password2",name:"password2"},V=r("br",null,null,-1),k=r("small",{class:"error"},null,-1),q=r("hr",null,null,-1),A=r("p",{id:"success"},null,-1);function C(o,s,n,i,t,e){return f(),g(_,null,[b,r("div",v,[x,r("form",{onSubmit:s[3]||(s[3]=p((...l)=>e.register&&e.register(...l),["prevent"]))},[E,r("div",S,[r("input",B,null,512),r("i",{class:"fa fa-eye eye-icon",id:"eye_icon",ref:"eye_icon",onClick:s[0]||(s[0]=l=>e.togglePasswordVisibility(this.$refs.password,this.$refs.eye_icon))},null,512)]),I,L,T,P,r("input",F,null,512),r("i",{class:"fa fa-eye eye-icon",id:"eye_icon2",ref:"eye_icon2",onClick:s[1]||(s[1]=l=>e.togglePasswordVisibility(this.$refs.password2,this.$refs.eye_icon2))},null,512),V,k,q,r("input",{type:"submit",value:"Submit",onClick:s[2]||(s[2]=(...l)=>e.register&&e.register(...l))}),A],32)])],64)}const N=u(w,[["render",C]]);export{N as default};