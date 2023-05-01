self.addEventListener('message', (ev)=>{

    let data = ev.data.do;
    switch(data){

        case 'fetch':
            let url = 'http://mydatabase/post';
            console.log('fetch');
            
            fetch(url)
            .then(response=>response.json() )
            .then( data =>{
                self.postMessage( JSON.stringify(data) );
            })
            .catch(err=>console.log(err));
            
            break;
        default:
            console.log('Invalid access');
            self.postMessage('Closing web worker');
            self.close();
    }
    
})