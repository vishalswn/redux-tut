import { useState } from "react"

interface IProps{
};
export function ToggleButton(){
    const [checked, toggleButton] = useState(false);
    return <div>
        <input type ="checkbox" checked={checked} onClick={(event:any)=> toggleButton(event.target.checked)} />
    </div> 
}