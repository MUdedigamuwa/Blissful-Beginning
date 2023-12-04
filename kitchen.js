const btns=[
{
    id:1,
    name:"Kitchen Aids"
},
{
    id:2,
    name:"Dinning Essentials"

},
{
    id:3,
    name:"Tableware"

},
{
    id:4,
    name:"Drinkware"

},
{
    id:5,
    name:"Serveware"

},

]
const filters=[...new Set(btns.map((btn)=>{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var{name,id}=btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
        )
    }).join('');
    
const product=[
    {
        id:1,
        image:'ricecooker.jpg' ,
        category:'Kitchen Essential',
        title:'Rice Cooker',
    },
    {
        id:1,
        image:'kettle.jpg' ,
        category:'Kitchen Essential',
        title:'1.25L Small Space Electric Kettle ',
    },
    {
        id:1,
        image:'Grinder4Jars.jpg' ,
        category:'Kitchen Essential',
        title:'Grinder 4 Jars ',
    },
    {
        id:1,
        image:'A.jpg' ,
        category:'Kitchen Essential',
        title:'Grinding Bowl',
    },
    {
        id:1,
        image:'FryPanSetof3.jpg' ,
        category:'Kitchen Essential',
        title:'Fry Pan | Set of 3',
    },
    {
        id:1,
        image:'Pop-UpToaster.jpg' ,
        category:'Kitchen Essential',
        title:'Pop-Up Toaster',
    },
    {
        id:1,
        image:'SaucepanwithLid.jpg' ,
        category:'Kitchen Essential',
        title:'Sauce pan with Lid',
    },
    {
        id:1,
        image:'CeramicNon-StickCookwareSet-10Pcs.jpg' ,
        category:'Kitchen Essential',
        title:'Ceramic Non-Stick Cookware Set-10Pcs',
    },
    {
        id:1,
        image:'HandMixer.jpg' ,
        category:'Kitchen Essential',
        title:'Hand Mixer',
    },
    {
        id:1,
        image:'MeatMincer.jpg' ,
        category:'Kitchen Essential',
        title:'Meat Mincer',
    },
    {
        id:1,
        image:'GlassTop2BumerGascooker.jpg' ,
        category:'Kitchen Essential',
        title:'Glass Top 4 Bumer Gas cooker',
    },
    {
        id:1,
        image:'teamaker.jpg' ,
        category:'Kitchen Essential',
        title:'Automatic Tea Maker',
    },
    {
        id:1,
        image:'PresssureCookerHardAnodized3L.jpg' ,
        category:'Kitchen Essential',
        title:'Presssure Cooker Hard Anodized 3L',
    },

 {
        id:1,
        image:'IronRoundMiniCasserole0.35L.jpg' ,
        category:'Kitchen Essential',
        title:'Iron Round Mini Casserole 0.35L',
    },
    {
        id:1,
        image:'FoodProcessor.jpg' ,
        category:'Kitchen Essential',
        title:'Food Processor',
    },
    {
        id:1,
        image:'stqandmixer.jpg' ,
        category:'Kitchen Essential',
        title:'Stand Mixer',
    },
    {
        id:1,
        image:'WaffleMaker.jpg' ,
        category:'Kitchen Essential',
        title:'Waffle Maker',
    },

    {
        id:2,
        image:'D1.jpg' ,
        category:'Dinning Essentials',
        title:'Colored Food Plate',
    },
    {
        id:2,
        image:'D2.jpg' ,
        category:'Dinning Essentials',
        title:'Curry Dishes',
    },
    {
        id:2,
        image:'D3.jpg' ,
        category:'Dinning Essentials',
        title:'Oval shape Plates',
    },
    {
        id:2,
        image:'D4.jpg' ,
        category:'Dinning Essentials',
        title:'Soup Bowl',
    },
    {
        id:2,
        image:'D5.jpg' ,
        category:'Dinning Essentials',
        title:'French Dish set',
    },
    {
        id:2,
        image:'D6.jpg' ,
        category:'Dinning Essentials',
        title:'Oval salad set',
    },
    {
        id:2,
        image:'DD.jpg' ,
        category:'Dinning Essentials',
        title:'Dinning Cutter set',
    },
    {
        id:2,
        image:'D8.jpg' ,
        category:'Dinning Essentials',
        title:'Spicers Bottles',
    },
    {
        id:2,
        image:'D9.jpg' ,
        category:'Dinning Essentials',
        title:'Fruit Plates',
    },
   
    {
        id:3,
        image:'TTT.jpg' ,
        category:'Tableware',
        title:'Place mat rattan',
    },

 {
        id:3,
        image:'T2.jpg' ,
        category:'Tableware',
        title:'Napkins',
    },
    {
        id:3,
        image:'TTTT.jpg' ,
        category:'Tableware',
        title:'Coaster Set',
    },
    {
        id:3,
        image:'T4.jpg' ,
        category:'Tableware',
        title:'Table Runner',
    },
    {
        id:3,
        image:'T5.jpg' ,
        category:'Tableware',
        title:'Table Mat set',
    },

    {
        id:4,
        image:'C.jpg' ,
        category:'Drinkware',
        title:'Clear Glass Set',
    },
    {
        id:4,
        image:'C1.jpg' ,
        category:'Drinkware',
        title:'Coffee set',
    },
    {
        id:4,
        image:'C2.jpg' ,
        category:'Drinkware',
        title:'Tea Set',
    },

 {
        id:4,
        image:'C3.jpg' ,
        category:'Drinkware',
        title:'Milk ,Sugar, Coffee set',
    },
    {
        id:4,
        image:'C4.jpg' ,
        category:'Drinkware',
        title:'8 Tea Cups SET',
    },
    {
        id:4,
        image:'C5.jpg' ,
        category:'Drinkware',
        title:'Goblet Set',
    },
    {
        id:4,
        image:'C6.jpg' ,
        category:'Drinkware',
        title:'Wine glass set',
    },
{
    id:5,
    image:'F.jpg' ,
    category:'Serveware',
    title:'Cake Stander',
},

{
    id:5,
    image:'F3.jpg' ,
    category:'Serveware',
    title:'Butter Plate',
},

{
    id:5,
    image:'F5.jpg' ,
    category:'Serveware',
    title:'Serving Tray',
},
{
    id:5,
    image:'FF.jpg' ,
    category:'Serveware',
    title:'Serving Plate',
},
{
    id:5,
    image:'FFF.jpg' ,
    category:'Serveware',
    title:'Cookie Tray',
},

{
    id:5,
    image:'FFFF.jpg' ,
    category:'Serveware',
    title:'Egg Holder',
},

]      ;
const categories=[...new Set(product.map((item)=>{return item}))]

const filterItems=(a)=>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(filterCategories)
}
const displayItem=(items)=>{
    document.getElementById('root').innerHTML=items.map((item)=>
    {
        var{image,title}=item;
        return(
            `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                    <img class='images' src= ${image}></img>
                </div>
                <div class='bottom'>
                <button class="open-button" onclick="openForm()">add</button>
                </div>
            </div>`
        )
    }).join('');
}
displayItem(categories);
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
              

            

              

             