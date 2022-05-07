interface Props {
    count: number,
    onIncrease: () => void,
    onDecrease: () => void
}
function Counter({ count, onIncrease, onDecrease }: Props): JSX.Element {
    return(
        <div>
            <h2>{ count }</h2>
            <button onClick={ onIncrease }>+</button>
            <button onClick={ onDecrease }>-</button>
        </div>
    )
}

export default Counter;