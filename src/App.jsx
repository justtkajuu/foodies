import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F0] font-thin text-[#7A7A7A] overflow-x-hidden">
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  );
};


export default App
