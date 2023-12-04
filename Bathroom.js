const btns=[
    {
        id:1,
        name:"Bathroom Items"
    },
    {
        id:2,
        name:"Spa Items"
    
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
            image:'B1.jpg' ,
            category:'Bathroom Aids',
            title:'Bathroom Floor Mat',
        },
        {
            id:1,
            image:'B2.jpg' ,
            category:'Bathroom Aids',
            title:'Face Towel',
        },
        {
            id:1,
            image:'B3.jpg' ,
            category:'Bathroom Aids',
            title:'Towels ',
        },
        {
            id:1,
            image:'B4.jpeg' ,
            category:'Bathroom Aids',
            title:'Bathroom Rak',
        },
        {
            id:1,
            image:'B5.jpeg' ,
            category:'Bathroom Aids',
            title:'Soap Dish',
        },
       
        {
            id:2,
            image:'b6.jpeg' ,
            category:'Spa Set',
            title:'Spa set',
        },
        {
            id:1,
            image:'toothbruch.jpg' ,
            category:'Bathroom Aids',
            title:'Toothbrush Holder',
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
                  
    
              