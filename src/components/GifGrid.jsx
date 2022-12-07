import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category,borrarGif}) => {

    const {images,isLoading} =useFetchGifs(category);

 
    
    return (
    <>  

        
        <div className="title-container">
            <h3>{category}</h3>
            <button onClick={() => {borrarGif(category)}} className = "button-all">X</button>
        </div>
        {
            isLoading&&(<h2>Cargando...</h2> )
           
        }
        <div className="card-grid">
            
            {
                images.map((image)=>(
                    <GifItem 
                        key={image.id}
                        {...image}
                    />     
                ))
            }
        </div> 
    </>
    )
}
