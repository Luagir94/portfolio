import React from 'react'

const CustomImg = ({img, name ,id, clase, fn}) => (
    <img src={img} alt={name} id={id} className={clase}  title={name} draggable="false" onClick={() =>fn} />
)

export default CustomImg