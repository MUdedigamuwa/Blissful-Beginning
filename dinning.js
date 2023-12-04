const btns=[
    {
        id:1,
        name:"Living Room Items"
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
            image:'b1.jpg' ,
            category:'Livingroom Aids',
            title:'TV Stand',
        },
        {
            id:1,
            image:'B2.jpg' ,
            category:'Livingroom Aids',
            title:'Floor Mat',
        },
        {
            id:1,
            image:'B3.jpg' ,
            category:'Livingroom Aids',
            title:'Living room chair ',
        },
        {
            id:1,
            image:'B4.jpg' ,
            category:'Livingroom Aids',
            title:'Full set Living room Sofa',
        },
        {
            id:1,
            image:'B5.jpg' ,
            category:'Livingroom Aids',
            title:'TV Sofa',
        },
       
        {
            id:1,
            image:'b6.jpg' ,
            category:'LivingRoom Aids',
            title:'Vase',
        },
        {
            id:1,
            image:'cof.jpg' ,
            category:'Livingroom Aids',
            title:'coffee Table',
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
                  
    
              