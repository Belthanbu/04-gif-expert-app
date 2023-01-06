import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch Man','Dragon Ball','Cyberpunk Edgerunners']);

  const  onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories, ]);
  }

  const  borrarTodo = () => {
    setCategories ([])
  }
  
  const borrarGif = (gifCategory) => {
    setCategories (
      categories.filter(categoria => categoria !== gifCategory)
    )
  }
 
  return (
    <>
        <h1>GifExpertApp</h1> 
        <AddCategory
            onNewCategory={ value => onAddCategory(value)}
        />
        <br></br>
        <button onClick={borrarTodo} className = "button-all">Borrar Todo</button>
        {   
            categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                    borrarGif = {borrarGif}
                />
            ))      
        }
    </>
  )
}
