import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
    return (
        <div>
            <h2>Select Color</h2>
            <ColorConsumer>
                {({actions}) => (
                <div style={{ display: 'flex'}}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                width: "24px",
                                height: "24px",
                                background: color,
                                cursor: 'pointer',
                            }}
                            onClick={() => actions.setColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                actions.setSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                )}
            </ColorConsumer>
        </div>
    );
};

export default SelectColor;