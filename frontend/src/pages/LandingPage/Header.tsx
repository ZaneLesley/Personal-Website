export default function Header() {
    return (
        <div className="w-full flex flex-row justify-between items-center bg-gunmetal border-b-2 border-indigo-dye">
            <div className="w-1/6 p-4 border-r-2 border-indigo-dye">Logo?</div>
            <div className="w-full">Header</div>
            <div className="w-1/6 flex flex-row justify-between p-4 gap-4 border-l-2 border-indigo-dye">
                <div>Projects</div>
                <div>Contact</div>
                <div>Blog</div>
                <div>|</div>
                <div>Email</div>
            </div>
        </div>
    )
}