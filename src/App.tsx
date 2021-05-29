import { GlobalStyles } from './assets/globalStyles';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {
  return (
    <section className="container">
      <GlobalStyles />
      <Header/>
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
    </section>
  );
}

export default App;
