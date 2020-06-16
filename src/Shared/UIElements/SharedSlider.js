import React from 'react'
import Slider from 'react-slick'

const SharedSlider = props => {
    return(
        <Slider {...props.setting}>
            {props.children}
        </Slider>
    )
}
export default SharedSlider;