import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // state for contacts ( [{id,name,phone,email},{id,name,phone,email}] )
  const [contacts, setContacts] = useState([])
  //state for one contact
const [formData,setFormData]=useState({name:"",phone:"",email:""})

//add the collected contact to the contacts array
const handleSubmit=(e)=>{
//prevent the page reload
e.preventDefault()
//add the new contact ({...formData,id:Date.now()}) to the array
setContacts([...contacts,{...formData,id:Date.now()}]) 
// reset the form : make all the inputs empty again 
setFormData({name:"",phone:"",email:""})
console.log(contacts)
}

// shared function for all the inputs 
const handleChange=(e)=>{
  //get the exact field changed and its value 
const{name,value}=e.target

// update only this field
setFormData((prev)=>({...prev,[name]:value}))


}

// delete a contact from the list
const handleDelete=(id)=>{
  // id :1769943771941
  // we will use .filter : to return all the contacts exept the one with the passed id
  setContacts(contacts.filter((c)=>c.id!==id))
}
  return (
    <div className='container mt-4'>
     <h2 className='text-center'>Contact Manager</h2>

     {/* Form to add contact  */}
    <form onSubmit={handleSubmit} className='mb-3'>
        <div className="row">
          {/* name input */}
          <div className="col">
          <input type="text"
           className="form-control"
           value={formData.name}
           name="name"
           placeholder='Name'
           onChange={handleChange} />
          </div>

{/* phone input */}
          <div className="col">
            <input type="text"
             className="form-control"
             name="phone"
             value={formData.phone}
             placeholder='Phone'
             onChange={handleChange} />
          </div>

          {/* email input */}
          <div className="col">
            <input type="email"
             name="email" 
             className="form-control" 
             value={formData.email}
             placeholder='Email'
             onChange={handleChange}/>
          </div>
        </div>
        <button className='btn btn-primary mt-3' type="submit">Add Contact</button>
    </form>


{/* table to display contacts  */}
<table className='table table-striped'>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
</thead>

<tbody>
  {/* loop contacts using .map */}
  {contacts.map((contact)=>(
    <tr key={contact.id}>
    <td>{contact.id}</td>
     <td>{contact.name}</td>
     <td>{contact.phone}</td>
     <td>{contact.email}</td>
     <td>
      <button className='btn btn-success'>Edit</button>
      <button className='btn btn-danger' onClick={()=>handleDelete(contact.id)}>Delete</button>
     </td>
      
    </tr>
  ))}
</tbody>
</table>
    </div>
  )
}

export default App


// {name:"test",age:52}
// json : {"name":"test","age":52}