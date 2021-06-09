
const apiKey = 'RA0w0JMW5UkLdqjZwLiuW4HxpQgNY9qe';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        console.log(img);
        //<img src="https://media0.giphy.com/media/1irdcpMjHjU8KkdpUT/giphy.gif?cid=514191cc3d1aae61f96b78470a05107328d2df7b3e15e4f4&amp;rid=giphy.gif&amp;ct=g">

        document.body.append( img );


    })
    .catch( console.warn );

