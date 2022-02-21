import React from 'react'
import { selectOptions } from '../../constants/constats'
import './Menu.css'

interface IMenu {
  task: string,
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void,
  getSelectValue(e: React.ChangeEvent<HTMLSelectElement>): void,
  addTask(): void
}

const Menu = (props: IMenu) => {
  return (
    <div className='menu'>
      <div className="input-group input-group-size">
        <input
          type="text"
          className="form-control"
          value={props.task}
          maxLength={20}
          onChange={props.handleChange}
          placeholder='Введите задание'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={props.addTask}
          >Добавить
          </button>
        </div>
      </div>
      <select className="custom-select select-size" name="select" id="select" onChange={props.getSelectValue}>
        {
          selectOptions.map(elem =>
            <option key={elem.value} value={elem.value}>
              {elem.text}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default Menu