import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Header from "./components/header";
import MainSection from "./components/MainSection";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <BlogSection />
        <MainSection />
        <Section />
      </main>

      {/* Footer Section */}
      <Footer className="w-full" />
    </div>
  );
}
