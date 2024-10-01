import {MainPage} from '../../pages/mainPage/mainPage.tsx';

type AppProps = {
  cardCount: number;
};

function App({cardCount}: AppProps): JSX.Element {
  return (
    <MainPage cardsCount={cardCount}/>
  );
}

export default App;
