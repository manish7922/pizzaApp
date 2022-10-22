

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";

class ShowOptions extends Component {
 state={
 
 }
handleChange=(e)=>{
let s1 ={...this.props.optionsSel}
let {currentTarget:input}=e
s1[input.name]=input.value;
this.props.onchangeOption(s1)
}

    render(){
        const{optionsSel,optionsArray}=this.props
return (
 <div className='container'>

<div className="row">
<div className='col-6'>
        <div className='from-group'>
        <select className='form-control' name="size" value={optionsSel.size} id="size" onChange={this.handleChange}>
            <option selected  value="">Select your Size</option>
            {optionsArray.size.map((c1)=>(
                      <option>{c1}</option>
            ))}
        </select>
        </div>
    </div>
    <div className='col-6'>
        <div className='from-group'>
        <select className='form-control' name="crust" value={optionsSel.crust} id="crust" onChange={this.handleChange}>
            <option selected value="">Select your Crust</option>
            {optionsArray.crust.map((c1)=>(
                <option >{c1}</option>
          
            ))}
        </select>
        </div>
    </div>

   
</div>


 </div>
)
    }

}
export default ShowOptions;