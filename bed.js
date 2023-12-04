const btns=[
    {
        id:1,
        name:"Bedroom Items"
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
            image:'B1.webp' ,
            category:'Bedroom Aids',
            title:'Full Bed Duvet',
        },
        {
            id:1,
            image:'B2.jpg' ,
            category:'Bedroom Aids',
            title:'Body Pillow',
        },
        {
            id:1,
            image:'b4.jpg' ,
            category:'Bedroom Aids',
            title:'Bolster Pillow ',
        },
        {
            id:1,
            image:'b1.jpeg' ,
            category:'Bedroom Aids',
            title:'Pillow Set',
        },
        {
            id:1,
            image:'b6.jpg' ,
            category:'Bedroom Aids',
            title:'Full Bed Set',
        },
       
        {
            id:2,
            image:'b7.jpg' ,
            category:'Bedroom Aids',
            title:'Clothing Rack',
        },
        {
            id:1,
            image:'b8.jpg' ,
            category:'Bedroom Aids',
            title:'Throw',
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
                  
    
              