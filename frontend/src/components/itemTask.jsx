const ItemTask = ({ task}) => {
  return (
    <div >
      <h1> {task.title} </h1>
      <p> {task.description} </p>
      {task.completed ? <h1>Completado </h1> : <h1>Pendiente</h1>}
    </div>
  );
};

export default ItemTask;
