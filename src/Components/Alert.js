import React from 'react'

function Alert (props) 
{
    return (
        <div style={{height: '50px'}}>
        
      {  props.show &&                                       // this is because aur default vake of message is null intially in the state so to counter
                                                            // that ifprops.show is false then empty div will be returned and nothing will be displayed       
       
        <div className={`alert alert-${props.show.typ} alert-dismissible fade show`}role="alert">
        <strong>{props.show.typ} : </strong>{props.show.msg} 
        </div>}
        </div>
    )
}


export default Alert;