import Navbar from "./Navbar";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto mb-16 w-full max-w-5xl flex-1 px-4 py-24 sm:px-8">
        {children}
      </main>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 glowing-gradient w-full h-16"></div>
    </>
  );
}
