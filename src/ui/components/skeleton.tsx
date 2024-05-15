import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={1}
        width={864}
        height={596}
        viewBox="0 0 864 596"
        backgroundColor="#302c2c"
        foregroundColor="#7c7979"
    >
        <rect x="16" y="0" rx="0" ry="0" width="160" height="250" />
        <rect x="16" y="260" rx="0" ry="0" width="160" height="24" />
        <rect x="242" y="0" rx="0" ry="0" width="160" height="250" />
        <rect x="242" y="260" rx="0" ry="0" width="160" height="24" />
        <rect x="468" y="0" rx="0" ry="0" width="160" height="250" />
        <rect x="468" y="260" rx="0" ry="0" width="160" height="24" />
        <rect x="694" y="0" rx="0" ry="0" width="160" height="250" />
        <rect x="694" y="260" rx="0" ry="0" width="160" height="24" />

        <rect x="16" y="316" rx="0" ry="0" width="160" height="250" />
        <rect x="16" y="576" rx="0" ry="0" width="160" height="24" />
        <rect x="242" y="316" rx="0" ry="0" width="160" height="250" />
        <rect x="242" y="576" rx="0" ry="0" width="160" height="24" />
        <rect x="468" y="316" rx="0" ry="0" width="160" height="250" />
        <rect x="468" y="576" rx="0" ry="0" width="160" height="24" />
        <rect x="694" y="316" rx="0" ry="0" width="160" height="250" />
        <rect x="694" y="576" rx="0" ry="0" width="160" height="24" />
    </ContentLoader>
)

export default Skeleton