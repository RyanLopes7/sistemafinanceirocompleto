function cadastrar(){
   const email=document.querySelector('#email').value 
   const senha = document.querySelector('#password').value
   const csenha = document.querySelector('#cpassword').value



if(senha.length < 6){
console.log('a senha tem que ter 6 caracteres')


}else{
   
   if(senha== csenha  ){
      firebase.auth().createUserWithEmailAndPassword(
         email, senha
     ).then(() => {
       
         window.location.href = "https://focoensino.github.io/Dev.finances/";
     }).catch(error => {
     
     })

}else{
console.log('as senhas são diferentes')
}
}






}