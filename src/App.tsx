import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MoneyJourney } from './pages/intro/MoneyJourney';

import { Ch1Lesson1 } from './pages/chapter1/Lesson1';
import { Ch1Lesson2 } from './pages/chapter1/Lesson2';
import { Ch1Lesson3 } from './pages/chapter1/Lesson3';
import { Ch1Lesson4 } from './pages/chapter1/Lesson4';
import { Ch1Quiz } from './pages/chapter1/QuizPage';

import { Ch2Lesson1 } from './pages/chapter2/Lesson1';
import { Ch2Lesson2 } from './pages/chapter2/Lesson2';
import { Ch2Lesson3 } from './pages/chapter2/Lesson3';
import { Ch2Quiz } from './pages/chapter2/QuizPage';

import { Ch3Lesson1 } from './pages/chapter3/Lesson1';
import { Ch3Lesson2 } from './pages/chapter3/Lesson2';
import { Ch3Lesson3 } from './pages/chapter3/Lesson3';
import { Ch3Lesson4 } from './pages/chapter3/Lesson4';
import { Ch3Quiz } from './pages/chapter3/QuizPage';

import { Ch4Lesson1 } from './pages/chapter4/Lesson1';
import { Ch4Lesson2 } from './pages/chapter4/Lesson2';
import { Ch4Lesson3 } from './pages/chapter4/Lesson3';
import { Ch4Lesson4 } from './pages/chapter4/Lesson4';
import { Ch4Quiz } from './pages/chapter4/QuizPage';

import { Ch5Lesson1 } from './pages/chapter5/Lesson1';
import { Ch5Lesson2 } from './pages/chapter5/Lesson2';
import { Ch5Lesson3 } from './pages/chapter5/Lesson3';
import { Ch5Lesson4 } from './pages/chapter5/Lesson4';
import { Ch5Lesson5 } from './pages/chapter5/Lesson5';
import { Ch5Quiz } from './pages/chapter5/QuizPage';

import { JapanStocks } from './pages/advanced/JapanStocks';
import { USStocks } from './pages/advanced/USStocks';
import { CaseStudies } from './pages/advanced/CaseStudies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="intro/money-journey" element={<MoneyJourney />} />

        <Route path="chapter/1/lesson/1" element={<Ch1Lesson1 />} />
        <Route path="chapter/1/lesson/2" element={<Ch1Lesson2 />} />
        <Route path="chapter/1/lesson/3" element={<Ch1Lesson3 />} />
        <Route path="chapter/1/lesson/4" element={<Ch1Lesson4 />} />
        <Route path="chapter/1/quiz" element={<Ch1Quiz />} />

        <Route path="chapter/2/lesson/1" element={<Ch2Lesson1 />} />
        <Route path="chapter/2/lesson/2" element={<Ch2Lesson2 />} />
        <Route path="chapter/2/lesson/3" element={<Ch2Lesson3 />} />
        <Route path="chapter/2/quiz" element={<Ch2Quiz />} />

        <Route path="chapter/3/lesson/1" element={<Ch3Lesson1 />} />
        <Route path="chapter/3/lesson/2" element={<Ch3Lesson2 />} />
        <Route path="chapter/3/lesson/3" element={<Ch3Lesson3 />} />
        <Route path="chapter/3/lesson/4" element={<Ch3Lesson4 />} />
        <Route path="chapter/3/quiz" element={<Ch3Quiz />} />

        <Route path="chapter/4/lesson/1" element={<Ch4Lesson1 />} />
        <Route path="chapter/4/lesson/2" element={<Ch4Lesson2 />} />
        <Route path="chapter/4/lesson/3" element={<Ch4Lesson3 />} />
        <Route path="chapter/4/lesson/4" element={<Ch4Lesson4 />} />
        <Route path="chapter/4/quiz" element={<Ch4Quiz />} />

        <Route path="chapter/5/lesson/1" element={<Ch5Lesson1 />} />
        <Route path="chapter/5/lesson/2" element={<Ch5Lesson2 />} />
        <Route path="chapter/5/lesson/3" element={<Ch5Lesson3 />} />
        <Route path="chapter/5/lesson/4" element={<Ch5Lesson4 />} />
        <Route path="chapter/5/lesson/5" element={<Ch5Lesson5 />} />
        <Route path="chapter/5/quiz" element={<Ch5Quiz />} />

        <Route path="advanced/japan-stocks" element={<JapanStocks />} />
        <Route path="advanced/us-stocks" element={<USStocks />} />
        <Route path="advanced/case-studies" element={<CaseStudies />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
