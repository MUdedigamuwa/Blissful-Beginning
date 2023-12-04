const btns=[
    {
        id:1,
        name:"Gift Vouchers"
    },
    {
        id:2,
        name:"New Gift"
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
            image:'k.jpg' ,
            category:'Gift Vouchers',
            title:'Gift Vouchers',
        },
        
        {
            id:2,
            image:'m.jpeg' ,
            category:'New Gift',
            title:'Guest Choice Form',

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
                        <button>add</button>
                    </div>
                </div>`
            )
        }).join('');
    }
    displayItem(categories);
    
                  
    
              