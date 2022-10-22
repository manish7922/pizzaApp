
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
class SideDish extends Component {
 state={

 
 }

    render(){
        const {sideDishes,cart,view,onButton,optionsArray,optionsSel,onChangeOption1,name ,onMinus,onPlus,editIndex}=this.props


        let cartIndex=sideDishes.findIndex((n)=>n.name===name)
        console.log("cartIndex",cartIndex);
  
return (
    view===0 ?(
        <div className='container'>
        <div className='row'>
        <div className='col-9 '>
        <div className='row border'>
        
            {sideDishes.map((n,index)=>(
                <>
                <div className='col-6 border bg-light'>
                <img src={n.image} style={{width:"100%"}} /> 
                <h6 className="text-center">{n.name}</h6>
      
             <div className='text-center'> <button className=" btn btn-primary text-center m-2" onClick={()=>onButton(index)} >Add to cart</button>
                </div>
                </div> 
                </>
            ))}
         
        </div>
        </div>
        <div className='col-3 border'>
         </div>
        </div>
        </div>
        ):view===1 ? (
          <div className='container'>
        
        <div className='row'>
        <div className='col-9 '>
        <div className='row border'>
        
            {sideDishes.map((n,index)=>(
                <>
                <div className='col-6 border bg-light'>
                <img src={n.image} style={{width:"100%"}} /> 
                <h6 className="text-center">{n.name}</h6>
        
                { cartIndex===index ? 
                (
                  <>
                
                  <div className='text-center'>
                  <button className=" btn btn-danger btn-sm text-center" onClick={()=>onMinus(n.name)}  ><FaMinus /></button>    
                  <button className=" btn btn-secondary btn-sm text-center" >{n.Quantity}</button>
                  <button className=" btn btn-success btn-sm text-center" onClick={()=>onPlus(n.name)} ><FaPlus /></button>  
                  </div> 
                  </>
                ):(
                 <>
                
                  <div className='text-center'> <button className=" btn btn-primary text-center m-2" onClick={()=>onButton(index)} >Add to cart</button>
                </div>
                 </>
                )}
             
            
                </div>
                </>
            ))}
         
        </div>
        </div>
        <div className='col-3 border'>
        {cart.map((n)=>(
          <>
          <div className="row border">
          <div className='col-4'>
          <img src={n.image} style={{width:"40%" ,height:"20vh"}} /> 
          </div>
          
          <div className='col-8'>
                <h6 className="text-center" style={{ marginLeft:"-10%"}}>{n.name}</h6> 
                <div className='row'>{n.size} {n.crust}</div>
                <div className='text-center'>
                <div className='text-center'>
                  <button className=" btn btn-danger btn-sm text-center" onClick={()=>onMinus(n.name)}  ><FaMinus /></button>    
                  <button className=" btn btn-secondary btn-sm text-center" >{n.Quantity}</button>
                  <button className=" btn btn-success btn-sm text-center" onClick={()=>onPlus(n.name)} ><FaPlus /></button>  
                  </div> 
                  </div> 
                  </div>
                  </div>
          </>
        ))}
         </div>
        </div>
        </div>
        ):(
          ""
        )
)
    }
}
export default SideDish;