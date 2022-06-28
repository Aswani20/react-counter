const Decrease = (props) => {
    return (
        <div>
            <button className="btn btn-danger m-5" onClick={props.decrease}> Decrease </button>
        </div>
    )
}
export default Decrease;