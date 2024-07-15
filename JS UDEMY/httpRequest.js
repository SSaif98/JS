const request = new XMLHttpRequest();

/*
request.addEventListener('readyStateChange', ()=>{
    console.log(request, request.readyState)
})
*/

request.open('Type of Request: GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()  //It sends the request