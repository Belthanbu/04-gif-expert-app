import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState(''); 
  
  const onInputChanged = ({target}) => {
        setinputValue(target.value);
  }

  const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories]);
        setinputValue('');
        onNewCategory(inputValue.trim());
  }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
        <br></br>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChanged }
        />
    </form>
    
  )
}
