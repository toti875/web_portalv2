import React, { FC, useState, HTMLProps } from "react";


interface Props extends HTMLProps<HTMLDivElement> {
    text: string;
    arrowPlacement: 'left' | 'right';
    arrowDirection: 'left' | 'right';
    color?: string;
    width?: number;
}

const ArrowButton: FC<Props> = ({text, arrowPlacement, arrowDirection, color = 'white', width = 80, ...otherProps}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div {...otherProps} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width}}>
      <span style={{margin: 0}}>{text}</span>
 
    </div>
  )
}

export default ArrowButton