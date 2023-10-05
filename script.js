let j=0;
let q=35;
let a=0;
let username="";
let gmail="";
let pass="";
audioelement=new Audio('sound.wav');
imgif=document.querySelector('.imggif');
container=document.querySelector('.container');
inp=document.getElementById('realname');
inputs=document.querySelector('.inputs');
dispinfo=document.querySelector('.displayinfo');
mpb=document.querySelector('#myprogressbar');
unt=document.querySelector('#usernametag');
tag1=document.querySelector('#tag1');
tag2=document.querySelector('#tag2');
tag3=document.querySelector('#tag3');
butnext=document.querySelector('#change');
img1=document.querySelector('#img1');
img2=document.querySelector('#img2');
img3=document.querySelector('#img3');
img4=document.querySelector('#img4');
und=document.getElementById('usernamedisp');
gmd=document.getElementById('gmaildisp');
pdis=document.getElementById('passdisp');
success=document.getElementById('success');
dispfinal=document.querySelector('.displayfinal');
warif=document.querySelector('.warningif');
console.log(username);

butnext.addEventListener('click',()=>{
   
    
    if(inp.value == '' && inp.value!='save'){
        warif.style.display='block';
        warif.innerHTML='Enter the required field';
        warif.style.color='red';
        inp.style.borderColor='red';
        q=q-35;
    }
    
    else if(a==0){
        inp=document.getElementById('realname');
       
        username=inp.value;
        inp.value='';
        unt.innerHTML='Gmail Id';

        tag1.innerHTML='Add your Google mail so you stay updated. ';
        tag2.innerHTML='Your Gmail is safe with us.';
        tag3.innerHTML='Be sure to add @gmail.com at the end.';
        a=a+1;
        img1.src="img5.png";
        img2.src="img7.png";
       
        
    }
    else if(a==1){
        inp=document.getElementById('realname');
        
        gmail=inp.value;
        inp.value='';
        unt.innerHTML='Password';
       
   
        tag1.innerHTML='A strong password protects all that you hold precious.Form a password of 8 characters';
        tag2.innerHTML='Use a combination of lowercase , uppercase , numbers and special characters.';
        tag3.innerHTML='Remember it and rest assured.'
        a=a+1;
        img3.src="img8.png";
        
       

    }
    else if(a==2){
        inp=document.getElementById('realname');
        pass=inp.value;
        inp.value='';
        unt.innerHTML='Final Submit';
        tag1.innerHTML='Ready for a final step .';
        tag2.innerHTML='Check your details and press Save';
        tag3.innerHTML="You'll recieve an E-mail containing some special badges from Us."
        butnext.innerHTML='Save';
        img4.src="img9.png";
       
        inputs.style.display="none";
        dispinfo.style.display="block";
        console.log(username);
        console.log(gmail);
        console.log(pass);
        und.textContent=`Username : ${username}`;
        gmd.textContent=`Gmail    : ${gmail}`;
        pdis.textContent=`Password : ${pass}`;
        a=a+1;
        inp.value='save';
        
    }
    else{
        
        container.style.display='none';
        imgif.style.display='block';
       
        
       
        function func1(){
            if(a==4){
                imgif.style.display='none';
                console.log('working')
                dispfinal.style.display='block';
                dispfinal.textContent=`Welcome ${username} . Thank you for joining Semicile .`
                
                
            }
            
        
        
        }
        function func2(){
            if(j==1){
                audioelement.play();
            }

        }
        
        setTimeout(func1,2400);
        setTimeout(func2,1200)
        a=a+1;
        j=j+1;
      


    }
    mpb.value=q;
    q=q+35;

})
inp.addEventListener('click',()=>{
    warif.style.display='none';
    inp.style.borderColor='darkslategrey';
})
