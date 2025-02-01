import "./button.css"

export default function Button({passwordCopied, onButtonClick, state}){
    return(
        <button className={`${passwordCopied} button`} onClick={onButtonClick}>{state}</button>
    )
}