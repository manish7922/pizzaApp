import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./navbar";
import Veg from "./veg";
import NonVeg from "./nonVeg";
import OtherItems from "./otheritems";
import SideDish from "./sideDishes";

class MainComponent1 extends Component {
  state = {
    otherItems: [
      {
        id: "MIR101",
        image: "https://i.ibb.co/SR1Jzpv/mirinda.png",
        type: "Beverage",
        name: "Mirinda",
        desc: "Mirinda",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PEP001",
        image: "https://i.ibb.co/3vkKqsF/pepsiblack.png",
        type: "Beverage",
        name: "Pepsi Black Can",
        desc: "Pepsi Black   Can",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "LIT281",
        image: "https://i.ibb.co/27PvTng/lit.png",
        type: "Beverage",
        name: "Lipton Iced Tea",
        desc: "Lipton   Iced    Tea",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PEP022",
        image: "https://i.ibb.co/1M9xDZB/pepsi-new20190312.png",
        type: "Beverage",
        name: "Pepsi New",
        desc: "Pepsi    New",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "BPCNV1",
        image: "https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png",
        type: "Burger Pizza",
        name: "Classic    Non Veg",
        desc: "Oven-baked   buns    with    cheese, peri-peri   chicken,    tomato  &   capsicum    in  creamy  mayo",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "BPCV03",
        image: "https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png",
        type: "Burger Pizza",
        name: "Classic    Veg",
        desc: "Oven-baked   buns    with    cheese, tomato  &   capsicum    in  creamy  mayo",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "BPPV04",
        image: "https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png",
        type: "Burger Pizza",
        name: "Premium    Veg",
        desc: "Oven-baked   buns    with    cheese, paneer, tomato, capsicum    &   red paprika in  creamy  mayo",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "DES044",
        image: "https://i.ibb.co/gvpDKPv/Butterscotch.png",
        type: "Dessert",
        name: "Butterscotch    Mousse  Cake",
        desc: "Sweet   temptation! Butterscotch    flavored    mousse",
        veg: "Yes",
        Quantity: 1,
      },
    ],
    sideDishes: [
      {
        id: "DIP033",
        image: "https://i.ibb.co/0mbBzsw/new-cheesy.png",
        type: "Side Dish",
        name: "Cheesy  Dip",
        desc: "An   all-time    favorite    with    your    Garlic  Breadsticks &   Stuffed Garlic  Bread   for a   Cheesy  indulgence",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "DIP072",
        image: "https://i.ibb.co/fY52zBw/new-jalapeno.png",
        type: "Side   Dish",
        name: "Cheesy  Jalapeno    Dip",
        desc: "A    spicy,  tangy   flavored    cheese  dip is  a   an  absolute    delight with    your    favourite   Garlic  Breadsticks",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "GAR952",
        image: "https://i.ibb.co/BNVmfY9/Garlic-bread.png",
        type: "Side   Dish",
        name: "Garlic  Breadsticks",
        desc: "Baked    to  perfection. Your    perfect pizza   partner!    Tastes  best    with    dip",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PARCH1",
        image: "https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png",
        type: "Side  Dish",
        name: "Chicken Parcel",
        desc: "Snacky    bites!  Pizza   rolls   with    chicken sausage &   creamy  harissa sauce",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "PARVG7",
        image: "https://i.ibb.co/JHhrM7d/Parcel-Veg.png",
        type: "Side Dish",
        name: "Veg Parcel",
        desc: "Snacky    bites!  Pizza   rolls   with    paneer  &   creamy  harissa sauce",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PATNV7",
        image: "https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png",
        type: "Side    Dish",
        name: "White   Pasta   Italiano    Non-Veg",
        desc: "Creamy   white   pasta   with    pepper  barbecue    chicken",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "PATVG4",
        image: "https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png",
        type: "Side    Dish",
        name: "White   Pasta   Italiano    Veg",
        desc: "Creamy   white   pasta   with    herb    grilled mushrooms",
        veg: "Yes",
        Quantity: 1,
      },
    ],
    chinken: [
      {
        id: "PIZNCP",
        image: "https://i.ibb.co/b5qBJ9d/cheesepepperoni.png",
        type: "Pizza",
        name: "Chicken    Pepperoni",
        desc: "A  classic American    taste!  Relish  the delectable  flavor  of  Chicken Pepperoni,  topped  with    extra   cheese",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "PIZNCD",
        image: "https://i.ibb.co/GFtkbB1/ChickenDominator10.png",
        type: "Pizza",
        name: "Chicken Dominator",
        desc: "Loaded with    double  pepper  barbecue    chicken,    peri-peri   chicken,    chicken tikka   &   grilled chicken rashers",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "PIZNPB",
        image: "https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png",
        type: "Pizza",
        name: "Pepper  Barbecue    &   Onion",
        desc: "A  classic favourite   with    pepper  barbeque    chicken &   onion",
        veg: "No",
        Quantity: 1,
      },
      {
        id: "PIZNIC",
        image: "https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png",
        type: "Pizza",
        name: "Indi  Chicken Tikka",
        desc: "The    wholesome   flavour of  tandoori    masala  with    Chicken tikka,  onion,  red paprika &   mint    mayo",
        veg: "No",
        Quantity: 1,
      },
    ],
    vegPizza: [

      {
        id: "PIZVDV",
        image: "https://i.ibb.co/F0H0SWG/deluxeveg.png",
        type: "Pizza",
        name: "Deluxe   Veggie",
        desc: "Veg   delight - onion,    capsicum,   grilled mushroom,   corn    &   paneer",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PIZVFH",
        image: "https://i.ibb.co/4mHxB5x/farmhouse.png",
        type: "Pizza",
        name: "Farmhouse",
        desc: "Delightful  combination of  onion,  capsicum,   tomato  &   grilled mushroom",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PIZVIT",
        image: "https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png",
        type: "Pizza",
        name: "Indi Tandoori    Paneer",
        desc: "It    is  hot.    It  is  spicy.  It  is  oh-soIndian.    Tandoori    paneer  with    capsicum,   red paprika &   mint    mayo",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PIZVMG",
        image: "https://i.ibb.co/MGcHnDZ/mexgreen.png",
        type: "Pizza",
        name: "Mexican   Green   Wave",
        desc: "Mexican herbs   sprinkled   on  onion,  capsicum,   tomato  &   jalapeno",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PIZVPP",
        image: "https://i.ibb.co/cb5vLX9/peppypaneer.png",
        type: "Pizza",
        name: "Peppy  Paneer",
        desc: "Flavorful trio    of  juicy   paneer, crisp   capsicum    with    spicy   red paprika",
        veg: "Yes",
        Quantity: 1,
      },
      {
        id: "PIZVVE",
        image: "https://i.ibb.co/gTy5DTK/vegextra.png",
        type: "Pizza",
        name: "Veg   Extravaganza",
        desc: "Black   olives, capsicum,   onion,  grilled mushroom,   corn,   tomato, jalapeno & extra cheese",
        veg: "Yes",
        Quantity: 1,
      },
    ],
    cart: [],
    view: 0,
    editIndex: -1,
    options: {},
    optionsArray: {
      size: ["Regular", "Medium", "Large"],
      crust: [
        "NewHand",
        "WheatThinCrust",
        "CheeseBurst",
        "WheatThinCrust",
        "ClassicHandTossed",
      ],
    },
    optionsSel: {
      size: "",
      crust: "",
      name:"",
    },
    name: "",
    MatchName:["Deluxe   Veggie","Farmhouse","Indi Tandoori    Paneer","Mexican   Green   Wave","Peppy  Paneer","Veg   Extravaganza"],

  };

  handleButton = (index) => {
    let s1 = { ...this.state };
    if(s1.options.size||s1.options.crust  ){

      if(s1.options.size.length===0){
       return  alert("select the size")
      }
      if(s1.options.crust.length===0){
       return alert("select the crust")
      }
         
    s1.editIndex = index;
    let myProduct = {};

    myProduct = s1.vegPizza[index];
    console.log("nyproduct", myProduct);
    let size = s1.options.size;
    let crust = s1.options.crust;
    console.log(" s1.options.size", s1.options.size);
    let name4 = myProduct.name;
    let json1 = {
      image: myProduct.image,
      name: myProduct.name,
      Quantity: myProduct.Quantity,
      size: size,
      crust: crust,
    };
    console.log("json1", json1);
    s1.cart.push(json1);
    // s1.vegPizza[index]=json1;
    s1.name = name4;
    s1.view = 1;
  }  else{
    return  alert("select the size")
   }

    this.setState(s1);
  };
  handleButton1 = (index) => {
    let s1 = { ...this.state };
    if(s1.options.size||s1.options.crust  ){

if(s1.options.size.length===0){
 return  alert("select the size")
}
if(s1.options.crust.length===0){
 return alert("select the crust")
}
    

    s1.editIndex = index;
    let myProduct = {};

    myProduct = s1.chinken[index];
    console.log("nyproduct", myProduct);
    let size = s1.options.size;
    let crust = s1.options.crust;
    console.log(" s1.options.size", s1.options.size);
    let name4 = myProduct.name;
    let json1 = {
      image: myProduct.image,
      name: myProduct.name,
      Quantity: myProduct.Quantity,
      size: size,
      crust: crust,
    };
    console.log("json1", json1);
    s1.cart.push(json1);
    s1.name = name4;
    s1.view = 1;
  
  }
  else{
   return  alert("select the size")
  }
  this.setState(s1);
  }
  handleButton2 = (index) => {
    let s1 = { ...this.state };
    s1.editIndex = index;
    let myProduct = {};

    myProduct = s1.sideDishes[index];

    let name4 = myProduct.name;
    let json1 = {
      image: myProduct.image,
      name: myProduct.name,
      Quantity: myProduct.Quantity,
    };
    console.log("json1", json1);
    s1.cart.push(json1);
    s1.name = name4;
    s1.view = 1;
    this.setState(s1);
  };
  handleButton3 = (index) => {
    let s1 = { ...this.state };
    s1.editIndex = index;
    let myProduct = {};

    myProduct = s1.otherItems[index];

    let name4 = myProduct.name;
    let json1 = {
      image: myProduct.image,
      name: myProduct.name,
      Quantity: myProduct.Quantity,
    };
    console.log("json1", json1);
    s1.cart.push(json1);
    s1.name = name4;
    s1.view = 1;
    this.setState(s1);
  };
  handleChangeOption = (optionsSel) => {
    let s1 = { ...this.state };

    //  let a=s1.vegPizza.find((n)=>n.name===s1.name)
    //  console.log("a",a);
  //  return s1.editIndex ? ( s1.optionsSel = optionsSel) : (optionsSel);
    s1.optionsSel = optionsSel
    s1.options = optionsSel;
    console.log(s1.options);
    this.setState(s1);
  };
  handlePlus = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.vegPizza.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex = index1;
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1 = s1.vegPizza[index1];
    myProduct.Quantity = myProduct.Quantity + 1;
    myProduct1.Quantity = myProduct1.Quantity + 1;
    s1.cart[index] = myProduct;
    s1.vegPizza[index1] = myProduct1;
    this.setState(s1);
  };
  handleMinus = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.vegPizza.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex=index1
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1=s1.vegPizza[index1]
    myProduct.Quantity = myProduct.Quantity - 1;
    myProduct1.Quantity=myProduct1.Quantity-1 

if (s1.editIndex > -1) {
      s1.cart[index] = myProduct
      s1.vegPizza[index1]=myProduct1
      if (myProduct.Quantity == 0) {
        s1.cart.splice(index, 1);
        myProduct1.Quantity=myProduct1.Quantity+1
        s1.vegPizza[index1]=myProduct1
      }
    }
    if (s1.cart.length === 0) {
      s1.view = 0;
    }
    this.setState(s1);
  };

  handlePlus1 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.chinken.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex = index1;
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1 = s1.chinken[index1];
    myProduct.Quantity = myProduct.Quantity + 1;
    myProduct1.Quantity = myProduct1.Quantity + 1;
    s1.cart[index] = myProduct;
    s1.chinken[index1] = myProduct1;
    this.setState(s1);
  };
  handleMinus1 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.chinken.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex=index1
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1=s1.chinken[index1]
    myProduct.Quantity = myProduct.Quantity - 1;
    myProduct1.Quantity=myProduct1.Quantity-1
    if (s1.editIndex > -1) {
      s1.cart[index] = myProduct;
      s1.chinken[index1]=myProduct1
      if (myProduct.Quantity == 0) {
        s1.cart.splice(index, 1);
        myProduct1.Quantity=myProduct1.Quantity+1
        s1.chinken[index1]=myProduct1
      }
    }
    if (s1.cart.length === 0) {
      s1.view = 0;
    }
    this.setState(s1);
  };
  handlePlus2 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.sideDishes.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex = index1;
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1 = s1.sideDishes[index1];
    myProduct.Quantity = myProduct.Quantity + 1;
    myProduct1.Quantity = myProduct1.Quantity + 1;
    s1.cart[index] = myProduct;
    s1.sideDishes[index1] = myProduct1;
    this.setState(s1);
  };
  handleMinus2 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.sideDishes.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex=index1
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1=s1.sideDishes[index1]
    myProduct.Quantity = myProduct.Quantity - 1;
    myProduct1.Quantity=myProduct1.Quantity-1
    if (s1.editIndex > -1) {
      s1.cart[index] = myProduct;
      s1.sideDishes[index1]=myProduct1
      if (myProduct.Quantity == 0) {
        s1.cart.splice(index, 1);
        myProduct1.Quantity=myProduct1.Quantity+1
        s1.sideDishes[index1]=myProduct1
      }
    }
    if (s1.cart.length === 0) {
      s1.view = 0;
    }
    this.setState(s1);
  };
  handlePlus3 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.otherItems.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex = index1;
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1 = s1.otherItems[index1];
    myProduct.Quantity = myProduct.Quantity + 1;
    myProduct1.Quantity = myProduct1.Quantity + 1;
    s1.cart[index] = myProduct;
    s1.otherItems[index1] = myProduct1;
    this.setState(s1);
  };
  handleMinus3 = (name) => {
    let s1 = { ...this.state };
    let index = s1.cart.findIndex((n) => n.name === name);
    let index1 = s1.otherItems.findIndex((n) => n.name === name);
    s1.editIndex = index;
    s1.editIndex=index1
    let myProduct = {};
    let myProduct1 = {};
    myProduct = s1.cart[index];
    myProduct1=s1.otherItems[index1]
    myProduct.Quantity = myProduct.Quantity - 1;
 
    if (s1.editIndex > -1) {
      s1.cart[index] = myProduct;
      // if(myProduct1.Quantity>=1){
        myProduct1.Quantity=myProduct1.Quantity-1
        s1.otherItems[index1]=myProduct1
      // }
   
      if (myProduct.Quantity == 0) {
        s1.cart.splice(index, 1);
        myProduct1.Quantity=myProduct1.Quantity+1
        s1.otherItems[index1]=myProduct1
      }
    }
    if (s1.cart.length === 0) {
      s1.view = 0;
    }
    this.setState(s1);
  };

  render() {
    const {
      vegPizza,
      chinken,
      otherItems,
      sideDishes,
      cart,
      view,
      editIndex,
      options,
      optionsArray,
      optionsSel,
      name,
      size,
      crust
    } = this.state;

    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route
            path="/veg"
            render={(props) => (
              <Veg
                {...props}
                vegPizza={vegPizza}
                cart={cart}
                view={view}
                name={name}
                optionsSel={optionsSel}
                optionsArray={optionsArray}
                onChangeOption1={this.handleChangeOption}
                onButton={this.handleButton}
                onMinus={this.handleMinus}
                onPlus={this.handlePlus}
                editIndex={editIndex}
     
              />
            )}
          />
          <Route
            path="/nonveg"
            render={(props) => (
              <NonVeg
                {...props}
                chinken={chinken}
                cart={cart}
                view={view}
                name={name}
                optionsSel={optionsSel}
                optionsArray={optionsArray}
                onChangeOption1={this.handleChangeOption}
                onButton={this.handleButton1}
                onMinus={this.handleMinus1}
                onPlus={this.handlePlus1}
                editIndex={editIndex}
        
              />
            )}
          />
          <Route
            path="/sidedish"
            render={(props) => (
              <SideDish
                {...props}
                sideDishes={sideDishes}
                cart={cart}
                view={view}
                name={name}
                onButton={this.handleButton2}
                onMinus={this.handleMinus2}
                onPlus={this.handlePlus2}
              />
            )}
          />
          <Route
            path="/others"
            render={(props) => (
              <OtherItems
                {...props}
                otherItems={otherItems}
                cart={cart}
                view={view}
                name={name}
                onButton={this.handleButton3}
                onMinus={this.handleMinus3}
                onPlus={this.handlePlus3}
              />
            )}
          />
          {/* <Redirect form="/" to="/emps" /> */}
        </Switch>
      </div>
    );
  }
}
export default MainComponent1;
