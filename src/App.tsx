import { GlobalStyles } from './assets/globalStyles';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <section className="container">
        <Header/>
      </section>
    </>
  );
}

export default App;
