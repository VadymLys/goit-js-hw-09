const e=document.querySelector(".feedback-form"),s="feedback-form-state",t=JSON.parse(localStorage.getItem(s));t&&(e.elements.email.value=t.email||"",e.elements.message.value=t.message||"");e.addEventListener("input",l=>{const a={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem(s,JSON.stringify(a))});e.addEventListener("submit",l=>{l.preventDefault();const a={email:e.elements.email.value,message:e.elements.message.value};console.log(a),localStorage.removeItem(s),e.reset()});
//# sourceMappingURL=2-form-4dd2cbaa.js.map