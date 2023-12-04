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
            image:'B1.jpg' ,
            category:'Bedroom Aids',
            title:'Candle set And Decoration botttle',
        },
        {
            id:1,
            image:'B2.jpg' ,
            category:'Bedroom Aids',
            title:'Side Mirror',
        },
        {
            id:1,
            image:'b4.jpg' ,
            category:'Bedroom Aids',
            title:'Table ',
        },
        {
            id:1,
            image:'b9.jpg' ,
            category:'Bedroom Aids',
            title:'Senories',
        },
        {
            id:1,
            image:'b6.jpg' ,
            category:'Bedroom Aids',
            title:'Photo Frame',
        },
       
        {
            id:1,
            image:'b7.jpeg' ,
            category:'Bedroom Aids',
            title:'Bean Bag',
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
    
              