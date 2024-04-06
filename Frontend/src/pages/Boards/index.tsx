import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Columns } from '../../types';
import { Board } from '../../data/board';
import { AddOutline } from 'react-ionicons';
import Task from '../../components/Task';
import AddModal from '../../components/Modals/AddModal';
import { onDragEnd } from '../../helpers/onDragEnd';

const Boards = () => {
    const [columns, setColumns] = useState<Columns>(Board);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState("");

    const openModal = (columnId: any) => {
        setSelectedColumn(columnId);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleAddTask = (taskData: any) => {
        debugger;
        console.log("handle add task", taskData);
        const newBoard = { ...columns };
        newBoard[selectedColumn].items.push(taskData);
    }

    return (
        <>
            <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)} >
                <div className='w-full flex items-start justify-between px-5 pb-8 md:gap-5 gap-10'>
                    {Object.entries(columns).map(([columnId, column]: any) => (
                        <div key={columnId} className='w-full flex flex-col'>
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided: any) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}
                                        className='flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5 position-sticky'>
                                        <div className='flex flex-row md:w-full'>
                                            <div className='flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] mx-2'>
                                                {column.name}

                                            </div>
                                            <div onClick={() => openModal(columnId)} className='flex cursor-pointer items-center justify-center gap-1 py-[10px] px-[10px] bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]'>
                                                <AddOutline color={"#555"} />
                                            </div>
                                        </div>
                                        {column.items.map((task: any, index: any) => (
                                            <Draggable key={task.id.toString()} draggableId={task.id} index={index}>
                                                {(provided: any) => (<><Task provided={provided} task={task} /></>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>

                        </div>
                    ))}
                </div>
            </DragDropContext>

            <AddModal isOpen={modalOpen} onClose={closeModal} setopen={setModalOpen} handleAddTask={handleAddTask} />
        </>
    )
}

export default Boards