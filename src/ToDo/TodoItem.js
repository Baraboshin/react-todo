
const style= {
  li: {
    display: 'flex',
  }
}

export default function TodoItem({ todo, index }) {
   return(
     <li style={style.li}>
       <div> {index + 1} </div>
       <div>
         {todo.title}
       </div>
     </li>
   )
 }
