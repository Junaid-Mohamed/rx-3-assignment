
import './App.css';

import school from "./assets/school.jpg";
import Header from './components/Header';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally centers the image
    alignItems: 'center',      // Vertically centers the image
    // height: '100vh',           // Takes full viewport height to center the image
  },
  image: {
    maxWidth: '100%',          // Ensures image is responsive and doesn't overflow
    maxHeight: '100%',         // Ensures image doesn't exceed container height
    objectFit: 'contain',      // Maintains aspect ratio of the image
  }
};

function App() {
 

  return (
    <>
    <Header/>
    <div  style={styles.container}>
    <img style={styles.image} width={500} height={500} src={school} alt="school" />
    </div>
    {/* <StudentView/> */}
    </>
  )
}

export default App
