// Define the initial state
const initialState = {
  tasks: [
    {
      id: "1",
      prefix: "Todo",
      content: {
        Title: "Item 1",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "hour",
        Importance: "Medium",
      },
    },
    {
      id: "2",
      prefix: "Todo",
      content: {
        Title: "Item 2",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "3",
      prefix: "Todo",
      content: {
        Title: "Item 3",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "4",
      prefix: "Done",
      content: {
        Title: "Item 4",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "5",
      prefix: "Doing",
      content: {
        Title: "Item 5",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "Medium",
      },
    },
    {
      id: "6",
      prefix: "Todo",
      content: {
        Title: "Item 1",
        Category: "Education",
        DueDate: "2022-02-01",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "7",
      prefix: "Todo",
      content: {
        Title: "Item 2",
        Category: "Education",
        DueDate: "2022-02-01",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "Low",
      },
    },
    {
      id: "8",
      prefix: "Todo",
      content: {
        Title: "Item 3",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "9",
      prefix: "Done",
      content: {
        Title: "Item 4",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "Medium",
      },
    },
    {
      id: "10",
      prefix: "Doing",
      content: {
        Title: "Item 5",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "11",
      prefix: "Todo",
      content: {
        Title: "Item 12",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "12",
      prefix: "Todo",
      content: {
        Title: "Item 2",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "13",
      prefix: "Todo",
      content: {
        Title: "Item 3",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "14",
      prefix: "Done",
      content: {
        Title: "Item 4",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
    {
      id: "15",
      prefix: "Doing",
      content: {
        Title: "Item 5",
        DueDate: "2022-02-01",
        Category: "Education",
        Estimate: "1",
        EstimateUnit: "Minute",
        Importance: "High",
      },
    },
  ],
};

// Define the root reducer
export default function RootReducer1(state = initialState, action) {
  switch (action.type) {
    case "FILTER_TASKS_BY_STATUS":
      const filteredTasks = state.tasks.filter(
        (x) => x.prefix === action.payload.status
      );
      const updatedState = { ...state };

      // Assign the filtered tasks to the appropriate property based on status
      switch (action.payload.status) {
        case "Todo":
          updatedState.todoTasks = filteredTasks;
          break;
        case "Doing":
          updatedState.doingTasks = filteredTasks;
          break;
        case "Done":
          updatedState.doneTasks = filteredTasks;
          break;
        // Add more cases if needed for other statuses
        default:
          break;
      }
      return updatedState;
    case "UPDATE_TASK_PREFIX":
      const { id, status } = action.payload;

      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, prefix: status } : task
      );
      return { ...state, tasks: updatedTasks };

    case "SEARCH":
      const searchItem = state.tasks.reduce((acc, task) => {
        if (
          task.content.Title.toLowerCase().includes(action.value.toLowerCase())
        ) {
          return [...acc, task];
        }
        return acc;
      }, []);
      return { ...state, tasks: searchItem };
      case "ADD_TASK":
      const AddeedTasks = [...state.tasks, action.payload.newTask ];
      return { ...state, tasks: AddeedTasks };
      
      case "EDIT_TASK":
      // Find the task in your state and update it with the edited content
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.editedContent.id ? action.payload.editedContent : task
      );
      return {
        ...state,
        tasks: editedTasks,
      };

    default:
      return state;
  }
}
