const btns=[
    {
        id:1,
        name:"Home Applieance"
    },
    {
        id:2,
        name:"Kitchen Appliance"
    
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
            category:'Home Appilance Aids',
            title:'Washing Machine',
        },
        {
            id:1,
            image:'B2.jpg' ,
            category:'Home Appilance Aids',
            title:'Electric Iron',
        },
        {
            id:1,
            image:'B3.jpg' ,
            category:'Home Appilance Aids',
            title:'Vaccum Cleaner',
        },
        {
            id:2,
            image:'B4.jpG' ,
            category:'Home Appilance Aids',
            title:'Oven',
        },
        {
            id:1,
            image:'B5.jpg' ,
            category:'Home Appilance Aids',
            title:'Broom and Stand Dust Pan',
        },
       
        {
            id:1,
            image:'B6.jpg' ,
            category:'Home Appilance Aids',
            title:'Stand Fan',
        },
        {
            id:1,
            image:'B7.jpg' ,
            category:'Home Appilance Aids',
            title:'Computer Table',
        },
        {
            id:2,
            image:'B8.jpg' ,
            category:'Home Appilance Aids',
            title:'Dish Washer',
        },
        {
            id:1,
            image:'B9.jpg' ,
            category:'Home Appilance Aids',
            title:'Pressure Gun',
        },
       
        {
            id:2,
            image:'B10.jpg' ,
            category:'Home Appilance Aids',
            title:'Eectric automate Oven',
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
                  
    
                  
    
              