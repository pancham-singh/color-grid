import { memo, useEffect, useState } from 'react';
import './index.css';

const Colors = memo((props) => {
     // image dim
    const  {height,width} = props

    const [img, setImg] = useState(<div>
        Loading image
    </div>);

    //to set rgb color value
    const getColorValue = (row, col) => {
        return `rgb(${row},${col},${width})`;
    };

    //set color background value
    const setBackgroundColor = (row, col) => {
        document.body.style.backgroundColor = getColorValue(row, col);
    };

    //logic to generate image
    const generateImage = () => {
        const gridRows = [];
        for (let y = 1; y < height; y++) {
            const gridCols = [];

            for (let x = 1; x < width; x++) {

                gridCols.push(
                    <div
                        className="grid-col"
                key={`col-${x}`}
                onClick={() => setBackgroundColor(x, y)}
                style={{backgroundColor: getColorValue(x, y)}} />
            );
            }

            gridRows.push(
                <div className="grid-row" key={`row-${y}`}>
            {gridCols}
            </div>
        );
        }

        setImg(gridRows);
    };

    //to hit image generation
    useEffect(() => {
        generateImage();
    }, []);

    return (
        <div className="colors">
            {img}
            </div>
    );
});

export default Colors;
