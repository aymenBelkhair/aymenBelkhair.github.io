
document.getElementById('selectVille').onclick=()=>{
    fetch("cities.json")
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            data.cities.forEach(element => {
                let optiongroup=document.createElement('optgroup');
                optiongroup.label=element.name;
                optiongroup.setAttribute('id',element.name);
                document.getElementById('selectVille').appendChild(optiongroup);
                    element.secteur.forEach(val => {
                        let option=document.createElement('option');
                        option.innerHTML=val.secteurName;
                        option.value=element.name+' '+val.secteurName;
                        document.getElementById(element.name).appendChild(option);
                    });
            });
        })
}















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


