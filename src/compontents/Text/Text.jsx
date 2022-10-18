import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Text = ({ children, className }) => {
    return (
        <TextTransition springConfig={presets.default} style={{textAlign:'center'}} >
            <p className={'text-center' + ' ' + className ?? ''} >
                {children}
            </p>
        </TextTransition>
    )
}
export default Text;