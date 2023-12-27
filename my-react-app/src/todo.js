// TodoList.js
import React, { useState } from 'react';

function TodoList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState();

    function addItem() {
        const copyList = [...list];
        copyList.push(inputValue);
        setList(copyList);
        setInputValue('');
    }

    function deleteItem(index) {
        const copyList = [...list];
        copyList.splice(index, 1);
        setList(copyList);
    }

    function editItem(index) {
        const itemValue = list[index];
        setInputValue(itemValue);
        setEditMode(true);
        setCurrentIndex(index);
    }

    function updateItem() {
        const copyList = [...list];
        copyList[currentIndex] = inputValue;
        setList(copyList);
        setEditMode(false);
        setInputValue('');
    }

    function updateText(e) {
        const value = e.target.value;
        setInputValue(value);
    }

    function deleteAll() {
        let copyList = [];
        setList(copyList);
    }

    return (
        <div className='TodoList'>
            <div className='TodoList-header'>
                <input onChange={updateText} placeholder='Enter any task' value={inputValue} />

                {editMode ? (
                    <button onClick={updateItem}>Update</button>
                ) : (
                    <button onClick={addItem}>Add</button>
                )}
                <button onClick={deleteAll}>Delete All</button>
                <ul>
                    {list.map(function (item, index) {
                        return (
                            <li key={index}>
                                {item}
                                <button onClick={() => deleteItem(index)}>Delete</button>
                                <button onClick={() => editItem(index)}>Edit</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
