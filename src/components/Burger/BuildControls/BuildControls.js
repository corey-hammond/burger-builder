import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            more={() => props.addIngredient(ctrl.type)}
            less={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
)

export default buildControls;