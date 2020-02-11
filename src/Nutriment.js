import React from 'react';

const Nutriment =({label,quantite,unit})=>{
    return(
        <p>
        {label}:
        {quantite}{unit}
        </p>
    );

};
export default Nutriment;