import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Gaurav Zanpure - Software Engineer',
  description: 'My name is Gaurav Zanpure. I am a professional and enthusiastic software engineer with a passion for tackling new challenges and solving complex problems. I am a quick learner with a proactive and self-learning attitude. I love to explore new technologies and continuously improve my skills. I thrive on understanding intricate systems, optimizing performance, and implementing efficient solutions. I am passionate about all aspects of web application development and strive to make the web more open and accessible. My core skills lie in Java, Spring Boot, and Python, but I am always eager to expand my expertise. I am available for any job opportunities that align with my skills and interests. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
