import { PTPlate } from "productivitytools.plate";

const initialValue = (content) => [
    {
      type: "p",
      children: [
        {
          text: content,
        },
      ],
    } 
  ];

function Container(){
    return(<div>
        <span>Container</span>
        <PTPlate content={initialValue("pawel")}></PTPlate>
        <span>ptplate ended</span>
    </div>)
}

export default Container;