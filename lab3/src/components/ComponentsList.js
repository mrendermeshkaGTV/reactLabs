import {useState, useEffect} from "react";
import Paper from '@mui/material/Paper';
import {FixedSizeList as List} from 'react-window';
import {StackItem} from './StackItem';

export function ComponentsList(dataURL) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson.filter(item => item.title.split(' ').length <= 7)))
            .catch((error) => {
                console.error(error);
            });
    }, [dataURL])

    const Row = ({index, style}) => (
        <div style={style}>{StackItem(data[index])}</div>
    );

    return (
        <Paper sx={{mt: 4}}>
            <List
                height={612}
                itemCount={data.length}
                itemSize={154}
                width="100%"
            >
                {Row}
            </List>
        </Paper>
    )
}
