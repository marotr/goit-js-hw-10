import{i as c}from"./vendor-77e16229.js";const t=document.querySelector("button"),l=document.querySelector('input[value="fulfilled"]');t==null||t.addEventListener("click",u);const r=document.querySelector('input[name="delay"');function u(o){o.preventDefault();const e=r.value;new Promise((n,s)=>{setTimeout(()=>{l.checked?n():s()},e)}).then(()=>{i(`✅ Fulfilled promise in ${e}ms`,"#59a10d")}).catch(()=>{i(`❌ Rejected promise in ${e}ms`,"#ef4040")})}function i(o,e){c.show({message:o,messageColor:" #fff",backgroundColor:e,position:"topCenter",messageSize:"16px",messageLineHeight:"150%",iconColor:"white"})}
//# sourceMappingURL=2-snackbar-b0370ff4.js.map
