

export default function Post({post}) {
    return (
        <div>
            Aceasta este postarea:
            {JSON.stringify(post)}
        </div>
    )
}