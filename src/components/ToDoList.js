function ToDoList() {
    const toDo = ["Fazer compras", "Renovar CNH", "Pagar contas", "Estudar React", "Fazer Minilab"];
    return (
        <div>
            <p>To Do List</p>
        <ol>
        
            {toDo.map(toDo => (
                <li key={toDo} class="list-group-item d-flex justify-content-between"><input type="checkbox" id="to-do" name="tasks" />{toDo}</li>
            )
            )}
        </ol>
        </div>
    )
}
export default ToDoList;
