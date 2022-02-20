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
      <div>
        <input
          className='menu__input'
          type="text"
          placeholder='Введите задание'
          value={props.task}
          maxLength={20}
          onChange={props.handleChange}
        />
        <button
          className='button'
          onClick={props.addTask}
        >
          Добавить
        </button>
      </div>
      <select name="select" id="select" onChange={props.getSelectValue}>
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