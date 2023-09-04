import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '길이';
  const list = ['딸기', '우유', '바나나'];
  return (
    <div className="orange">
      <h1>{`Hello ${name}`}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppJSX;
