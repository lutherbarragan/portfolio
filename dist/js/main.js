particlesJS.load('particles-js', 'dist/js/assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

function copyEmail() {
    /* Get the text field */
    var copyText = document.getElementById("myEmail");
    var myEmailText = document.getElementById("myEmailText");
    /* Select the text field */
    copyText.select();
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    myEmailText.innerText = "Email copied!"
        
    setTimeout(function() {
        myEmailText.innerText = "lutherbarragan@gmail.com"
    }, 2000)

}