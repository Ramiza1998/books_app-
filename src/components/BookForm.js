import React from 'react'

function BookForm() {
  return (
    <div className='row'>
   <span className='col s2'/>
   <form className='card col s8'>
   <div className='row'>
   
   
   <div className='input-field col s6'>
   <input id='books_title' type='text' className='validate'/>
   <label htmlFor='books_category'>Books Title</label>
   </div>

   <div className='input-field col s6'>
   <input id='books_Author' type='text' className='validate'/>
   <label htmlFor='books_title'>Books Author</label>
   </div>
   </div>



   <div className='row'>

   <div className='input-field col s6'>
   <input id='books_category' type='text' className='validate'/>
   <label htmlFor='books_category'>Books category</label>
   </div>

   <div className='input-field col s6'>
   <input id='books_isbn' type='text' className='validate'/>
   <label htmlFor='books_title'>Books ISBN</label>
   </div>
   </div>



   <div className='row'>
   <div className='input-field col s12'>
   <textarea id='book_summary' className='materialise-textarea'></textarea>
   <label htmlFor='book_summary'>Book_Summary</label>
   </div>
   </div>



   <div className='row'>
   <span className='col s1'/>
   <button className='btn waves-effect col s10'>Submit</button>
   <span className='col s1'/>
   </div>
   
   </form>
   <span className='col s2'/>
    
    </div>
  )
}

export default BookForm