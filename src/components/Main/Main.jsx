import {Greeting} from "../Greeting/Greeting"
import {Slider} from "../Slider/Slider"

export const Main = (props) =>{
    
    const {groupedSliderItems} = props


    return(
        <div>
        <Greeting />
        <div>
            {Object.entries(groupedSliderItems).map(([title,items]) => (
            <div key={title}>
                <Slider items={items} />
                <hr style={{color:"white", width:"90%", height:"0px"}} />
            </div>
            ))}
        </div>
        </div>
    )
}