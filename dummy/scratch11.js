const datos = [{
  id:1,
  title:'Iron man',
  year:2008
},{
    id:2,
  title:'Spider',
  year:2058
},{
   id:3,
  title:'Endgame',
  year:2019
}
];
const getDatos = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(datos);
    },2000);
    });
}
getDatos().then((datos)=> console.log(datos));