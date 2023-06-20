import { useState } from "react"
import styles from  './Principal.module.css';


const FormCalculaIMC = () => {
    
    const CalculaIMC = (altura, massa) => {
        let imc = massa / (altura * altura);

        if (imc < 18.5) {
            alert(`Você está abaixo do peso ideal. Seu IMC é ${imc.toFixed(3)}`)
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert(`Você está no peso ideal. Seu IMC é ${imc.toFixed(3)}`)
        } else if (imc > 24.9 && imc <= 29.9) {
            alert(`Você está acima do peso ideal. Seu IMC é ${imc.toFixed(3)}`)
        } else if (imc > 29.9 && imc <= 34.9) {
            alert(`Você está com obesidade grau I. Seu IMC é ${imc.toFixed(3)}`)
        } else if (imc > 34.9 && imc <= 39.9) {
            alert(`Você está com obesidade grau II. Seu IMC é ${imc.toFixed(3)}`)
        }else{
            alert(`Você está com obesidade grau III. Seu IMC é ${imc.toFixed(3)}`)
        }
    };
    
    let [massa, setMassa] = useState(0);
    let [altura, setAltura] = useState(0);

    return (
        <div className="container">
            <h1 className={styles.h1}>Calculadora IMC</h1>
            <form  className={styles.form} onSubmit={e => e.preventDefault()}>
                <label className={styles.label} htmlFor="massa">Insira quanto você pesa: </label>
                <input className={styles.input} type="text" id="massa" onChange={e => setMassa(parseFloat(e.target.value))}/>
                <label className={styles.label} htmlFor="massa">Insira qual sua altura: </label>
                <input className={styles.input} type="text" id="altura" onChange={e => setAltura(parseFloat(e.target.value))}/>
                <button type="submit" className={styles.button} id="buttonIMC" onClick={()=> {CalculaIMC(altura, massa)}}>Calcular seu IMC</button>
            </form> 
        </div>
    )
}


export default FormCalculaIMC