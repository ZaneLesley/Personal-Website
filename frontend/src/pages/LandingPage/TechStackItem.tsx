type techStackProps = {
    url: string,
    src: string,
    alt: string,
    size?: number,
}

export default function TechStackItem({url, src, alt, size = 30}: techStackProps) {
    return (
        <a href={url} rel="noreferrer noopener" target="_blank"><img
            src={src}
            width={size}
            height={size}
            alt={alt}/></a>
    )
}