export default function Header() {
    return (
        <div className="w-full flex flex-row justify-between p-4">
            <div>Zane</div>
            <div>Header</div>
            <div className="flex flex-row justify-between gap-4">
                <div>Projects</div>
                <div>Contact</div>
                <div>Blog</div>
                <div>|</div>
                <div>Email</div>
            </div>
        </div>
    )
}