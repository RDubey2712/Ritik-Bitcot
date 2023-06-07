import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineDelete } from 'react-icons/ai';

  const FormData = (props) => {
    
  
    

    return (
      <>
        <div> 
      <table class="table">
      <thead >
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">Name</th>        
          <th scope="col">Email</th>        
          <th scope="col">password</th>   
          <th scope="col">Action</th>   
        </tr>  
        </thead>
        
          {props.data?.map((formItem, i)=>{
            return(
              <>            
              <tr key={i}>      
              <td>
              {i+1}
              </td>        
            <td>
              {formItem.name}
              </td>            
              <td>
              {formItem.email}
              </td>
              <td>
              {formItem.password}
              </td>
              <td>
                <button onClick={()=>{props.handleDelete(i)}}>Delete</button>
              </td>
            </tr>  
              </>
            )
          })}   
          
    </table>  
    </div>
      </>
      )
  }
  
  export  {FormData}