import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import './App.css'
import { useState } from 'react'
import Column from './components/column/column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Input from './components/input'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1, title: 'Add a new task'
    },
    {
      id: 2, title: 'Delete a task'
    },
    {
      id: 3, title: 'Update a task'
    },
    {
      id: 4, title: 'Complete a task'
    },
    {
      id: 5, title: 'Drag and drop a task'
    },
  ])

  const getTaskPos = id => tasks.findIndex(task => task.id === id);



  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const addNewTask = (title) => {
    setTasks(tasks => [...tasks, {
      id: tasks.length + 1,
      title
    }])
  }

  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addNewTask} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  )
}

export default App
