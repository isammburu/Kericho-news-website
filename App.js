import { Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/home';
import { NewsPage } from './pages/news';
import { Navbarr } from './pages/navi';
import { Agric } from './pages/agriculture';
import { Sportsp } from './pages/sports';
import { TravelPage } from './pages/travel';
import { CulturePage } from './pages/culture';
import { FuturePage } from './pages/future';
import './pages/nav.css'
function App() {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/agriculture' element={<Agric />} />
        <Route path='/sports' element={<Sportsp />} />
        <Route path='/travel' element={<TravelPage />} />
        <Route path='/culture' element={<CulturePage />} />
        <Route path='/future' element={<FuturePage />} />
      </Routes>
    </div>

  );

}
export default App;
