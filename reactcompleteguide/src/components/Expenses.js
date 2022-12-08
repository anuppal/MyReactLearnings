// import App from "../App";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from './Card'

function Expense(props) {
  return (

    // Method-1
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    
    //Method - 2 

        // <div className="expenses">
        //     {props.items &&
        //         props.items.map((item) => (
        //             <ExpenseItem
        //                 title={item.title}
        //                 amount={item.amount}
        //                 date={item.date}
        //                 key={item.id}
        //             />
        //         ))}
        // </div>
  );
}
export default Expense;
