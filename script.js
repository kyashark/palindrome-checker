 
 const text = document.getElementById("text-input");
 const checkBtn = document.getElementById("check-btn");
 const result = document.getElementById('result');

 


 const removePunctuation = (str)=>{
    const regex = /[!.@#$%^&*()_+\-=/,.]/g;
    const a =  str.replace(regex, "");
    console.log(a);
    return a;
 }

 const removeSpace = (str)=>{
    const spaceRegex = / /g;
    const b =  str.replace(spaceRegex, "");
    console.log(b);
    return b;
 }

 const clearText=(str)=>{
    const cleanText = removeSpace(removePunctuation(str));
    return cleanText;
 }



 const checkPalindrome = ()=>{
    const originalText = text.value; 
    console.log(originalText);
    const str = clearText(text.value.toLowerCase().trim());


    console.log(str);

    let c = "";
    for(let i=str.length-1;i>=0;i--){
         c += str[i];      
    }
    
    if(c === str){
        console.log("match");
        result.innerHTML=`${originalText} is a palindrome`
    }else{
        console.log("not match");
        result.innerHTML=`${originalText} is not a palindrome`
        
    }
    text.value="";
 }

    checkBtn.addEventListener('click',()=>{
        if(text.value===''){
            alert("Please input value");
        }else{
            checkPalindrome();
        }

    })

 


