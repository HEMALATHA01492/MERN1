import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import data from '../data';
import {MdOutlineFavorite} from 'react-icons/md';
import {FaTrash} from 'react-icons/fa';
import {BiSolidEditAlt} from 'react-icons/bi';
import {IoMdAddCircle} from 'react-icons/io';
import {AiOutlineSearch} from "react-icons/ai";


function Collection() {
    const [create,setCreate] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);

    const [task, setTask] = useState({ id: '', color: '', image: ''});
    const [tasks, setTasks] = useState(data);

    const [search, setSearch] = useState('');
    // console.log(search)
    // console.log(tasks)


    useEffect(() => {
      // Load tasks from localStorage on component mount
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);

    useEffect(() => {
      // Save tasks to localStorage whenever tasks change
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

  // Function to delete an item
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  // Function to create an item
  const addTask = () => {
    if (task !== '') {
      const newTask = {
        id: tasks.length + 1, 
        color: task.color.trim(), 
        image: task.image.trim(), 
      };
      console.log(newTask)
  
      setTasks([...tasks, newTask]);
      setTask({ id: '', color: '', image: ''});
      setCreate(false)
    }
    else(
      console.log("Enter the values")
    )
  };
  
  // Function to edit an item

  const updateTask = (id) => {
    setEditingTaskId(id);
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ ...taskToEdit });
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === editingTaskId ? { ...task } : t
    );
    setTasks(updatedTasks);
    setTask({ id: '', color: '', image: '' });
    setEditingTaskId(null);
  };


 

  // Function to update fav item
  const favItem = (id) => {
    console.log(id)

    setTasks((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, fav: !item.fav } : item
    )
  );
    
  };

  
  const showcollection = (color)=>{
    setTasks(
        data.filter((item) =>{
            return item.color === color;
        })
      )
    }


  //search bar logic
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    setTasks(filteredItems);

  };

  
  const filteredItems = data.filter(item =>
    item.color.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
          <TopNav />
          <div className='collection'>
            <h2>My Collections 
                <span onClick={()=>setCreate(true)}>
                  <IoMdAddCircle size={30} title='Add'className='col-add'/>
                </span>
            </h2>
            {create ? (
            <div className='card p-3 coll-card'>
            <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    id="color"
                    value={task.color}
                    onChange={(e) => setTask({ ...task, color: e.target.value })}
                    placeholder="Enter color"
                    require
                  />
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    value={task.image}
                    onChange={(e) => setTask({ ...task, image: e.target.value })}
                    placeholder="Enter image URL"
                    require
                  />
                  <button className='btn btn-success m-2' onClick={addTask}>create</button>
            </div>
            ):""}

              {editingTaskId !== null && (
            <div className='card p-3 coll-card'>
            <h3>Edit Task</h3>
          
          <label htmlFor="editColor">Color</label>
          <input
            type="text"
            id="editColor"
            value={task.color}
            onChange={(e) => setTask({ ...task, color: e.target.value })}
          />
          <label htmlFor="editImage">Image URL</label>
          <input
            type="url"
            id="editImage"
            value={task.image}
            onChange={(e) => setTask({ ...task, image: e.target.value })}
          />
          <button onClick={saveEditedTask} className='btn btn-success m-2'>Save Changes</button>
          </div>
              )}


                
            <div className='col-main'>
                <div className='col-sub'>
                   <button
                    onClick={()=>setTasks(data)}>All</button>
                    <button
                    onClick={()=>showcollection("pink")}>Pink</button>
                      <button
                    onClick={()=>showcollection("black")}>Black</button>
                    <button
                    onClick={()=>showcollection("red")}>Red</button>
                    <button
                    onClick={()=>showcollection("blue")}>Blue</button>
                    <button
                    onClick={()=>showcollection("green")}>Green</button>
                </div>
            </div>

            <div className="searchBar p-2">
            <AiOutlineSearch size={25} />
            <input
              className="searchBar-input"
              type="text"
              placeholder="search by color"
              value={search}
              onChange={handleSearch}
            />
          </div>  
              <div className='show-col'>
                {
                    tasks.map((item) =>(
                        <div key={item.id}  className='col-div position-relative'>
                        <button className="col-fav position-absolute top-0 end-0" 
                        title={item.fav ? 'Remove from favorites' : 'Add to favorites'}
                        onClick={() => favItem(item.id)}
                        >
                        <MdOutlineFavorite size={25} style={item.fav ? ({color:'orangered'}):({color:'grey'})}/>
                        </button>

                        <button className="col-del position-absolute bottom-0 end-0" 
                        title="Delete"
                        onClick={() => deleteTask(item.id)}>
                        <FaTrash size={20} />
                        </button>

                        <button className="col-edit position-absolute bottom-0 start-0" title="Edit"
                        onClick={() => updateTask(item.id)}>
                            <BiSolidEditAlt size={20} />
                        </button>

                        <img src={item.image} className='col-img'/>
                        </div>
                            
                        
                    )
                        
                    )
                }
              </div>
          </div>

          <Footer />

    </>  
)
}

export default Collection