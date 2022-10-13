import Link from "@mui/material/Link";

export function Image(props) {
    const {url, thumbnailUrl} = props
    return (
        <Link href={url}><img src={thumbnailUrl} alt={url}/></Link>
    )
}
