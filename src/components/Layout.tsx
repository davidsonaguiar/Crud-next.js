import Header from "./Header"

interface LayoutProps {
    children: any,
}

export default function Layout({ 
    children
}: LayoutProps) {

    return(
        <>
            <Header></Header>
            <main className={`
            relative
            w-full mx-auto px-6 py-4`}>
                {children}
            </main>
        </>
    )
}