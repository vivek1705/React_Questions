import React from "react";
import './App.css';
import JsxExample from "./Questions/Q1";
import JsxExample2 from "./Questions/Q2";
import ConditionalRendering from "./Questions/Q3";
import GreetingMsg from "./Questions/Q4";
import Counter from "./Questions/Q5";
import ObjectProp from "./Questions/Q6";
import ToDoList from "./Questions/Q7";
import ShoppingList from "./Questions/Q8";
import CommentList from "./Questions/Q9";
import ButtonClick from "./Questions/Q10";
import AddDeleteItems from "./Questions/Q11";
import NewsletterForm from "./Questions/Q12";
import PhoneForm from "./Questions/Q13";
import EmailForm from "./Questions/Q14";
import FormWithValidation from "./Questions/Q15";

function App() {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  const shoppingItems =["item1", "item2","item3"];
  const comments = [
    { id: 1, user: "User1", text: "Comment 1" },
    { id: 2, user: "User2", text: "Comment 2" },
    { id: 3, user: "User3", text: "Comment 3" },
  ];

  return (
    <>
    <JsxExample /> 
    <JsxExample2 />
    <ConditionalRendering isTrue={true} />
    <GreetingMsg />
    <Counter />
    <ObjectProp name="Vivek" />
    <ToDoList tasks={tasks}/>
    <ShoppingList shoppingItems={shoppingItems} />
    <CommentList comments = {comments} />
    <ButtonClick />
    <AddDeleteItems />
    <NewsletterForm />
    <PhoneForm />
    <EmailForm />
    <FormWithValidation />
    </>
  );
}

export default App;
