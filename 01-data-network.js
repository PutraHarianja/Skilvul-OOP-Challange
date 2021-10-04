class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;

        this.data = data - (5 * users);
    }

    movieTime(){
        console.log((this.data >= 50))
    }

    videoCall(){
        console.log((this.data >= 10))
    }

    connection(){
        let intervalTimerId = setInterval(() => console.log('You must reconnect the Internet Connection'), 2000); 
        // after 10 seconds stop
        setTimeout(() => {
        clearInterval(intervalTimerId);
        console.log('Kuota Habis');
        }, 10001);
    }

    
}

const library = new Network(50, 8) 

library.movieTime()
library.videoCall()
library.connection();
  