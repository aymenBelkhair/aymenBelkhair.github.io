


document.getElementById('input1').addEventListener('input',()=>{
    fetch('cities.json')
        .then(res=>res.json())
        .then(data=>{
            data.cities.forEach(element => {
                let datalist=document.getElementById('inputList1');
                    let option=document.createElement('option');
                    option.innerHTML=element.name;
                    option.value=element.name;
                    datalist.appendChild(option);
                
                element.secteur.forEach(val=>{
                        if(element.secteur.length!=0){
                            let option=document.createElement('option');
                            option.innerHTML=element.name+', '+val.secteurName;
                            option.value=element.name+', '+val.secteurName;
                            datalist.appendChild(option);    
                        }
                })
            });
        })

},{once:true});

document.getElementById('input2').addEventListener('input',()=>{
    fetch('cities.json')
        .then(res=>res.json())
        .then(data=>{
            data.cities.forEach(element => {
                let datalist=document.getElementById('inputList2');
                    let option=document.createElement('option');
                    option.innerHTML=element.name;
                    option.value=element.name;
                    datalist.appendChild(option);
                
                element.secteur.forEach(val=>{
                        if(element.secteur.length!=0){
                            let option=document.createElement('option');
                            option.innerHTML=element.name+', '+val.secteurName;
                            option.value=element.name+', '+val.secteurName;
                            datalist.appendChild(option);    
                        }
                })
            });
        })

},{once:true});

let addressDepart={
    lon:0,
    lat:0
}

let addresArriver={
    lon:0,
    lat:0
}



document.getElementById('myButton').onclick=()=>{

    let input1=document.getElementById('input1').value;
    fetch('https://nominatim.openstreetmap.org/?addressdetails=1&q='+input1+' maroc&format=json&limit=1')
        .then(res=>res.json())
        .then(data=>{
            addressDepart.lat=data[0].lat;
            addressDepart.lon=data[0].lon;
            let input2=document.getElementById('input2').value;
            fetch('https://nominatim.openstreetmap.org/?addressdetails=1&q='+input2+' maroc&format=json&limit=1')
                .then(res=>res.json())
                .then(data=>{
                    addresArriver.lat=data[0].lat;
                    addresArriver.lon=data[0].lon;
                    if(input1!='' && input2!=''){
                        fetch('https://graphhopper.com/api/1/route?point='+addressDepart.lat+','+addressDepart.lon+'&point='+addresArriver.lat+','+addresArriver.lon+'&profile=car&calc_points=false&key=b5be22cc-d348-4f5d-80a2-ff736de9a953')
                            .then(res=>res.json())
                            .then(data=>{
                                document.getElementById('output').innerHTML= data.paths[0].distance+'m';
                            })
                    }
                    else{
                        document.getElementById('output').classList.add('text-danger')
                        document.getElementById('output').innerHTML='Veuillez remplir le formulaire'
                    }
                })
        })

    

    
}
    



















// document.getElementById('selectVille').onclick=()=>{
//     fetch("cities.json")
//         .then(res=> res.json())
//         .then(data=>{
            
//             data.cities.forEach(element => {
//                 let optiongroup=document.createElement('optgroup');
//                 optiongroup.label=element.name;
//                 optiongroup.setAttribute('id',element.name);
//                 document.getElementById('selectVille').appendChild(optiongroup);
//                     element.secteur.forEach(val => {
//                         let option=document.createElement('option');
//                         option.innerHTML=val.secteurName;
//                         option.value=element.name+' '+val.secteurName;
//                         document.getElementById(element.name).appendChild(option);
                        

                        

//                     });
//             });
//         })
// }















// document.getElementById('selectVille').onclick=()=>{
//     fetch("cities.json")
//         .then(res=> res.json())
//         .then(data=>{
//             data.cities.forEach(element => {
//                 let option=document.createElement('option');
//                 option.innerHTML=element.name;
//                 option.value=element.name;
//                 document.getElementById('selectVille').appendChild(option);
//             });
//         })
// }

// document.getElementById('selectVille').onchange=()=>{
//     fetch("cities.json")
//         .then(res=> res.json())
//         .then(data=>{
//             let select = document.getElementById('selectVille');
//             let value = select.options[select.selectedIndex].value;
//             data.cities.forEach(element => {
//                 if(element.name==value){
//                     element.secteur.forEach(val => {
//                         let option=document.createElement('option');
//                         option.innerHTML=val.secteurName;
//                         option.value=val.secteurName;
//                         document.getElementById('selectSecteur').appendChild(option);
//                     });
//                 }
//             });
//         })
// }


