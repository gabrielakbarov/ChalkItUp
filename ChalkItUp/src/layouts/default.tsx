import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen justify-center">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow mt-[25%] ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
