import { useState ,useRef} from 'react'
import './App.css'


function App() {
  const [result, setResult] =useState('')
  const  [themeValue , setThemeValue] = useState('theme3')
  
  const calc = ()=>{
    setResult('')
    setResult(eval(result))
  }

  const del =()=>{
    setResult(result.slice(0, -1))
  }

  const themeSwitchesRef = useRef([]); // Use an array to store multiple refs
  // const toggleRef = useRef(null);

  const handleThemeSwitchClick = (event) => {
    const theme = event.currentTarget;
    if (theme.dataset.theme === "first") {
      setThemeValue("theme1");
    } else if (theme.dataset.theme === "second") {
      setThemeValue("theme2");
    } else if (theme.dataset.theme === "third") {
      setThemeValue("theme3");
    }
  };

  
  
  const handleClick =(e)=>{
    setResult(result + e.target.name)
  }
  return (
    
    <div className={`app ${themeValue}`}>
        <div className="calc_theme">
          <div className="calc">calc</div>
          <div className="theme">
            <p>THEME</p>

            <div className="container">
              <div className="switcher">
                <p ref={(el) => themeSwitchesRef.current.push(el)} className="theme-switch" data-theme="first" onClick={handleThemeSwitchClick}>
                1
                </p>
                <p ref={(el) => themeSwitchesRef.current.push(el)} className="theme-switch" data-theme="second" onClick={handleThemeSwitchClick}>
                  2
                </p>
                <p ref={(el) => themeSwitchesRef.current.push(el)} className="theme-switch" data-theme="third" onClick={handleThemeSwitchClick}>
                  3
                </p>
              </div>
              <div className="toggle">
                <div className="toggle-switch" ></div>
              </div>
            </div>

          </div>
        </div>

      <div className='calc_result'>
        <p>{result ? result :0}</p>
        
      </div>
      <div className="calc_buttons">
        
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button onClick={del}>DEL</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='-' onClick={handleClick}>-</button>
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='/' onClick={handleClick}>/</button>
        <button name='*' onClick={handleClick}>X</button>
        <button onClick={()=>setResult(0)}>RESET</button>
        <button onClick={calc}>=</button>
      </div>
      
      
    </div>
  )
      
}

export default App
