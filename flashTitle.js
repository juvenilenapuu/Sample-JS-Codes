//This lines of code change the title of your webpage at a certain interval.
let alertShow = false;

setInterval(() => {
    document.title = 
    alertShow ? "Welcome to MyCodeSpace"
              : "Follow for more !";


    alertShow = !alertShow;
},1000);
