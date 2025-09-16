function ToDo(){
    function callFun(){
        alert("function is called")
    }
    return(
        <div>
            <h1>Anil sidhu toods</h1>
            <img src="https://i.pinimg.com/1200x/a3/cd/ca/a3cdcab5cbb90c25b907c47a9eb6bc5c.jpg" alt="liger " class="photo">
            </img>
            <ul>
                <Li>hello</Li>
                <Li>yesh</Li>
                <Li>jaja</Li>
            </ul>
            <button onClick={callFun}>click ME</button>
        </div>
    )
}
export default ToDo;