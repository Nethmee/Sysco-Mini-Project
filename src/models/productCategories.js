export  const main_categories = [
    "Food",
    "Supplies_&_Equipement",
    "Paper_&_Disposal",
    "Chemical_&_Janitorial",
    "Healthcare_&_Hospitality"
]
const food_categories = [
    "Meats",
    "Seafood",
    "Poultry",
    "Dairy",
    "Produce",
    "Canned $ Dry ",
    "Frozen",
    "Dispenser Beverage"
]
 



const productCategories = new Map()
main_categories.map(c=>{
   if(c=="Food"){
    productCategories.set(c,food_categories)
   }
   else{
    productCategories.set(c,null)
   }
    
 return   productCategories})
//export default productCategories;