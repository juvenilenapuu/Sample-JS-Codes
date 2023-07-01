let alertShow = false;

setInterval(() => {
    document.title = 
    alertShow ? "Welcome to MyCodeSpace"
              : "Follow for more !";


    alertShow = !alertShow;
},1000);