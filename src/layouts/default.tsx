import { Footer } from '../components/footer.tsx';
import Navbar from '../components/navbar';

export default function DefaultLayout({
                                          children,
                                          title,
                                      }: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar title={title} />
            <main className="flex-grow container mx-auto max-w-7xl px-6 mt-[100px]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
