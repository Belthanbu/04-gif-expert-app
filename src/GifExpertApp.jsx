import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch Man','Dragon Ball','Cyberpunk Edgerunners']);

  const  onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory)) return;

        // console.log(newCategory)
        // categories.push(NewCategory);
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
        <button onClick={borrarTodo} className = "button-all">Borrar Todo</button>
        

        <AddCategory
            onNewCategory={ value => onAddCategory(value)}
        />

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
