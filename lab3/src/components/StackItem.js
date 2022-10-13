import Stack from '@mui/material/Stack';
import {Image} from "./Image";

export function StackItem(props) {
    const {albumId, id, title, url, thumbnailUrl, style} = props
    return (
        <Stack direction="row" style={style} spacing={{xs: 1, sm: 2, md: 4}}>
            <div>{albumId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{Image({url, thumbnailUrl})}</div>
        </Stack>
    )
}
