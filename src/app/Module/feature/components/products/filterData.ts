export const filters =[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"white"},
            {value:"beige",label:"beige"},
            {value:"blue",label:"blue"},
            {value:"brown",label:"brown"},
            {value:"green",label:"green"},
            {value:"yellow",label:"yellow"},
            {value:"purple",label:"purple"},
            {value:"black",label:"black"}
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"}
        ],
    },
]

export const singleFilter=[
    {
        id:"price",
        name:"price",
        options:[
            {value:"159-399",label:"159-399"},
            {value:"399-999",label:"399-999"},
            {value:"999-1999",label:"999-1999"},
            {value:"1999-2999",label:"1999-2999"},
            {value:"3999-4999",label:"3999-4999"},
        ],
    },
    {
        id:"discount",
        name:"DISCOUNT RANGE",
        options:[
            {value:"10%",label:"10% And Above"},
            {value:"20%",label:"20% And Above"},
            {value:"30%",label:"30% And Above"},
            {value:"40%",label:"40% And Above"},
            {value:"50%",label:"50% And Above"},
            {value:"60%",label:"60% And Above"},
            {value:"70%",label:"70% And Above"},
        ],
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {valye:"out_of_stock",label:"Out Of Stock"},
        ],
    },
]

export const sortOptions=[
    {name:"Price: Low to High",query:"price_low",current:false},
    {name:"Pricec High to Low",query:"Price_high",current:false}
]