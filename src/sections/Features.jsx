import React from 'react'
import { Element } from 'react-scroll'
import { features } from '../constants/index.js'

const Features = () => {
    return (
        <section>
            <Element className="features" >
                <div className="container">
                    <div className="relative flex">
                        {features.map((feature) => (
                            <div key={feature.id}>{feature.title}</div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Features