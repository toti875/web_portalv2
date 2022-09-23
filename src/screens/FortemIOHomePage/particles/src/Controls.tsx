import React, { FC, useCallback } from 'react'
import throttle from 'lodash/throttle'
import Slider from '@material-ui/core/Slider'
import styles from './Controls.module.css'

export interface Values {
    scale: number;
    entropy: number;
    numParticles: number;
}

interface Props {
    values: Values;
    onChange: <T>(key: string, value: T) => void
}

const Controls: FC<Props> = ({values, onChange}) => {

    const throttledOnChange = useCallback(throttle(onChange, 25), [onChange])

    return (
        <div className={styles.root}>
            <div className={styles.header}>Controls</div>
            <div className={styles.controls}>
                <p>Entropy</p>
                <Slider
                    aria-label="Entropy"
                    min={0}
                    max={100}
                    value={values.entropy}
                />
                <p>Scale</p>
                <Slider
                    aria-label="Scale"
                    min={.5}
                    max={1.5}
                    step={.1}
                    value={values.scale}
                />
                <p>Number of Particles</p>
                <Slider
                    aria-label="Number of Particles"
                    min={1000}
                    max={6000}
                    step={500}
                    value={values.numParticles}
                />
            </div>
        </div>
    )
}

export default Controls