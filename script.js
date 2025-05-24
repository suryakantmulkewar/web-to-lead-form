function beforesubmit(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');

    console.log('inputdate.value', inputdate.value); // script ==> date(en_IN)

    let formatteddate = new Date(inputdate.value).toLocaleDateString('en-IN');

    console.log(formatteddate);

    outputdate.value = formatteddate;
    
    
}