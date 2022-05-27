const express=require('express');
const app=express();
const puerto='1440';


app.listen(puerto,()=>{


    console.log('servidor inicializado en el puerto ',puerto)
})
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static('public'));
app.get("/", function(req, res) { 
       
    res.render("avisos", {
        Zonas: Datos(),
    });
});

function Datos(){
    var a= [
        { Zona: 'card',Estado:'well',Nombre:'Zona 1',p:'tt'},
        { Zona: 'card2',Estado:'warnings',Nombre:'Zona 2'},
        { Zona: 'card3',Estado:'warnings',Nombre:'Zona 3'},
        { Zona: 'card4',Estado:'error',Nombre:'Zona 4'},
        { Zona: 'card5',Estado:'error',Nombre:'Zona 5'},
        { Zona: 'card6',Estado:'well',Nombre:'Zona 6'},
        { Zona: 'card7',Estado:'well',Nombre:'Zona 7'},
        { Zona: 'card8',Estado:'well',Nombre:'Zona 8'},
        { Zona: 'card9',Estado:'well',Nombre:'Zona 9'},
        { Zona: 'card10',Estado:'well',Nombre:'Zona 10'},
       
    ];
    return a;
}

app.use((req , res, next)=>{
    res.status(404).render("404.ejs")
})
