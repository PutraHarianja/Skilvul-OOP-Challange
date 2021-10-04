class SkilvulChat {
    constructor(shift){
        this.shift = shift
    }

    encrypt(text){
        var res = text.toUpperCase();
        var result = '';
        var charcode = 0;
        
        

        for (var i = 0; i < res.length; i++) {
            if((res[i] <= "A" || res[i] >= "Z") ){
                result += res[i]
                continue
            }
            charcode = (res[i].charCodeAt()) + this.shift;
            result += String.fromCharCode(charcode);
        }
        console.log(result);
    }

    decrypt(text){
        var res = text.toLowerCase();

        var charcode = 0;
        var result = '';

        for (var i = 0; i < res.length; i++) {
            if( (res[i] <= "a" || res[i] >= "z") ){
                result += res[i]
                continue
            }
            charcode = (res[i].charCodeAt()) - this.shift;
            result += String.fromCharCode(charcode);
        }
        console.log(result);
    }
}

const mySkilChat = new SkilvulChat(2);
mySkilChat.encrypt('I love JavaScript!'); // returns 'K NQXG LCXCUETKRV!'
mySkilChat.decrypt('K <3 OA ECV'); // returns 'i <3 my cat'
