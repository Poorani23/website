import Contact from "./contact";
import Home from "./home";


function Calculator(){
    return(
        <>
        <Home/>
        <header>
        <h1>CALCULATOR</h1>
    </header>

    <nav>
        <a href="home.js"   class="page-link">Home</a>
        <a href="calculator.js"   class="page-link">Calculator</a>
        <a href="contact.js"   class="page-link">Contact Us</a>

    </nav>

    <section>
    <div class="container">
        <div class="calculator">
            <form>
                <div class="display">
                    <input type="text" name="display" disabled/>
                </div>
                <div>
                    <input type="button" value="AC" onclick="display.value =''" class="ac"/>
                    <input type="button" class="del" value="Del" onclick="display.value =display.value.toString().slice (0,-1)"/>
                    <input type="button" class="symbols" value="." onclick="display.value +='.'"/>
                    <input type="button" class="symbols" value="/" onclick="display.value +='/'"/>
                </div>
                <div>
                    <input type="button" class="NumpadBtns" value="7" onclick="display.value +='7'"/>
                    <input type="button" class="NumpadBtns" value="8" onclick="display.value +='8'"/>
                    <input type="button" class="NumpadBtns" value="9" onclick="display.value +='9'"/>
                    <input type="button" class="symbols" value="*" onclick="display.value +='*'"/>
                </div>
                <div>
                    <input type="button" class="NumpadBtns" value="4" onclick="display.value +='4'"/>
                    <input type="button" class="NumpadBtns" value="5" onclick="display.value +='5'"/>
                    <input type="button" class="NumpadBtns" value="6" onclick="display.value +='6'"/>
                    <input type="button" class="symbols" value="-" onclick="display.value +='-'"/>
                </div>
                <div>
                    <input type="button" class="NumpadBtns" value="1" onclick="display.value +='1'"/>
                    <input type="button" class="NumpadBtns" value="2" onclick="display.value +='2'"/>
                    <input type="button" class="NumpadBtns" value="3" onclick="display.value +='3'"/>
                    <input type="button" class="symbols" value="+" onclick="display.value +='+'"/>
                </div>
                <div>
                    <input type="button" class="special" value="00" onclick="display.value +='00'"/>
                    <input type="button" class="special" value="0" onclick="display.value += '0'"/>
                    <input type="button" value="=" onclick="display.value = eval(display.value)" class="equal"/>
                </div>
            </form>
        </div>
    </div>
    </section>
    <Contact/>
    </>
    );
}
export default Calculator;