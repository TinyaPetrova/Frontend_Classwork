// импорт специального типа FC (functional component)

import { FC } from "react";

// этот компонент - стрелочная функция, которая возвращает теги вёрстки
// эти теги похожи на tml, но это xml - другой распространённый язык разметки
// но особой разницы нет, можно сказать, что это html внутри типизированного JS

const CityPage: FC = () => (
  // эти теги в tsx нужно ОБЯЗАТЕЛЬНО помещать в родителя - иначе будет ошибка
  // есть даже специальный пустой тег для этих целей, типа просто <></>
  <div className="App">
    <h1>Barcelona</h1>
    <img
      className="barcelonaImage"
      src="https://media.traveler.es/photos/63838947050e0f92cd80c982/16:9/w_2560%2Cc_limit/GettyImages-1392907424.jpg"
      alt="barcelonaImage"
    />
    <p>Capital of Catalonia, Spain</p>
  </div>
);

export default CityPage;
