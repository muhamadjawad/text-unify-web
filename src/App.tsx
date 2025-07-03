import React from 'react'
import './App.css'
import Navbar from '@/components/Navbar';
import TextUnify from '@/screens/TextUnify';
import Footer from '@/components/Footer';

const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);

  return (
    <div >
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

      <TextUnify />
      <Footer />
    </div>
  )
}

export default App

