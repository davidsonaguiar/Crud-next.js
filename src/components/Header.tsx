export default function Header() {
    return(
        <header 
            className={`
            p-3
            bg-gradient-to-r from-purple-600 to-purple-800`}>
            <nav 
            className={`
            w-fit mx-auto
            py-3 px-4
            bg-slate-100 rounded shadow-md`}>
                <ul className={`flex gap-6 justify-end`}>
                    <li className="text-lg font-semibold">Home</li>
                    <li className="text-lg font-semibold">About</li>
                    <li className="text-lg font-semibold text-purple-600">Clients</li>
                    <li className="text-lg font-semibold">Contact</li>
                </ul>
            </nav>
        </header>
    )
}