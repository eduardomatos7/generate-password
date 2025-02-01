import { useState } from 'react'
import './App.css'
import Title from './components/title/Title'
import Button from './components/buttons/Button'
let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;=?@[]_'
function App() {
    const [passwordValue, setPasswordValue] = useState("")
    const [copied, setCopied] = useState("Copiar")
    const [classe, setClasse] = useState("button")
    function generatePassword(){
        let password = ""
        for (let i = 0, n = charset.length; i < 12; i++){
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        setPasswordValue(password)
        setCopied("Copiar")
        setClasse("button")
    }
    
    function copyToClipBoard(){
        navigator.clipboard.writeText(passwordValue)
        setCopied("Copiado!")
        setClasse("passwordCopied")
      }
    
  return (
    <>
    <div className='content'>
      <Title title="Gerador de senhas"/>
      <div className='buttons'>
        <Button state="Gerar!" 
        onButtonClick={generatePassword}/>

        <Button state={copied} onButtonClick={copyToClipBoard} 
        passwordCopied={classe}/>
      </div>

        <p className='password'>{passwordValue}</p>
    </div>
    </>
  )
}

export default App
