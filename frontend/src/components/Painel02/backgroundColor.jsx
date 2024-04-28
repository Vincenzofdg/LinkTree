import { str } from "../../structure";

function BackgroundColor({action, value}) {
     return (
          <div className="bg_color_container">
               <h2 className="">{str.palletMenu.background}</h2>
               <input
                    type="color"
                    value={ !!value ? value : "#ffffff"}
                    onChange={({target: {value}}) => action(prev => ({...prev, bgColor: value}))}
                    className="bg_color_input_format"
               />
          </div>
     );
}

export default BackgroundColor;
