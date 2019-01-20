import React, {Fragment} from 'react'
import Swiper from 'react-id-swiper'

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }

    this.textInput = React.createRef();

  }

  componentWillMount() {
    localStorage.getItem('list') && this.setState({
      list: JSON.parse(localStorage.getItem('list'))
    });

  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('list', JSON.stringify(nextState.list))
  }

  onChangeInput(input) {
    this.setState({userInput: input})
  }

  addTask(input, e) {

    e.preventDefault()
    let listCopy = this.state.list.slice();
    let obj = {
      'task': input,
      'id': Date.now(),
      'completed': false
    }

    if (input !== '') {
      listCopy.push(obj)
    }
    this.setState({list: listCopy, userInput: ''})
    this.textInput.current.focus();
    console.log(this.state.list)
    console.log(obj.id)
  }

  deleteTask(i) {

    this.setState(prevState => ({
      list: prevState.list.filter(task => task.id !== i)
    }));
    console.log(i)
    console.log(this.state.list)
  }



  completeTask(i) {

    let todo = {
      ...this.state.list.filter((e) => e.id === i)
    }
    if (todo[0].completed === false) {
      todo[0].completed = true
    } else {
      todo[0].completed = false
    }
    this.setState({todo})
    console.log(todo)
  }



  render() {

      const params = {
simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + (
          menu[index]) + '</span>';
        }
      }
    }

    const menu = ['All', 'Tasks', 'Completed']

    let allTasks = this.state.list.map((item, i) => <li className={`task
              ${item.completed
        ? 'completed'
        : ''}
           `} key={i} onClick={() => this.completeTask(item.id)}>

      <p className="m-0 text-truncate">{item.task}</p>

      <button onClick={() => this.deleteTask(item.id)} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

    </li>)

    let unfinishedTasks = this.state.list.filter((e) => e.completed === false).map((item, i) => <li className={`task
              ${item.completed
        ? 'completed'
        : ''}
           `} key={i} onClick={() => this.completeTask(item.id)}>
      <p className="m-0 text-truncate">{item.task}</p>

      <button onClick={() => this.deleteTask(item.id)} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

    </li>)

    let completedTasks = this.state.list.filter((e) => e.completed === true).map((item, i) => <li className={`task
        ? 'completed'
        : ''}
       `} key={i} onClick={() => this.completeTask(item.id)}>

      <p className="m-0 text-truncate">{item.task}</p>

      <button onClick={() => this.deleteTask(item.id)} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

    </li>)

    let countTodos = this.state.list.filter((e) => e.completed === false).length

    return (<Fragment>
      <form className="input-group" onSubmit={(e) => this.addTask(this.state.userInput, e)}>
        <input ref={this.textInput} placeholder="Add todo" value={this.state.userInput} onChange={(e) => this.onChangeInput(e.target.value)} type="text"/>
      </form>

      <Swiper {...params}>

          <ul className="p-0 col-12">
            {allTasks}
          </ul>

          <ul className="p-0 col-12">
            {unfinishedTasks}
          </ul>

          <ul className="p-0 col-12">
            {completedTasks}
          </ul>



      </Swiper>


      <p className="muted">
        {countTodos} tasks left
      </p>

  </Fragment>)
  }
}

export default Todo;
