//connection a un fichier json
$.getJSON('test.json',function(data){

    let infos = [];
    
    //inserer des données dans le fichier json
    let coco = {"name":"jean","email":"jean@live.fr","animaux":["poisson"]};
/*
    data.push(coco);
    $.ajax({
        url: "test.json",
        type: 'POST',
        data:  coco
    });
*/
data.push(coco);

    
    console.log(data[0].name);

    $.each(data,function(key , val){
       // affichage des données en json
       // console.log(val.name); 
    })
   // console.log(infos);
});

