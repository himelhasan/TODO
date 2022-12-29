const TaskListItem = ({ handelTick, checked }) => {
  return (
    <div class="flex items-center mb-4 border my-4 w-auto">
      <input
        type="checkbox"
        id="scales"
        onChange={() => handelTick()}
        value={checked}
        className="w-6 h-6 ml-4 my-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="scales"
        className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  py-2  ${
          checked ? "" : "line-through"
        }`}
      >
        Scales
      </label>
    </div>
  );
};

export default TaskListItem;
