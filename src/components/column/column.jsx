/* eslint-disable react/prop-types */
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import './column.css';
import Task from '../task/task';


const Column = ({ tasks }) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task, index) => (
                    <Task key={index} {...task} />
                ))}
            </SortableContext>
        </div>
    );
};

export default Column;