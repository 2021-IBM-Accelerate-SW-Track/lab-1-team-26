import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Body() {

    const classes = useStyles();

    const [list, setList] = useState([]);

    const [value, NewValue] = useState("");

    const [listEdit, setListEdit] = useState([]);

    const AddOn = (i) => {

        i.preventDefault() //prevent empty task

        let flag = 0;

        for (let i = 0; i < list.length; i++){

            if (value === list[i]){
                alert("No duplicate items")

                flag = 1;

            }

        }

        if (flag === 0){

            setList(list.concat(value));

            console.log(list);

        }
        
                
        
        
        
    }

    function Delete (lists){

        const result = list.filter(value => value !== lists);

        console.log(result);

        setList(result);

    }

    function handleEdit(lists){
        setListEdit(lists);
    }

    function Update(lists){

        const newUpdate = list;

        let index_of = list.indexOf(lists);

       // const [updateText, setupdateText] = useState("");

        let value_id = document.getElementById("text-update").value;

        console.log(value_id);

        newUpdate.splice(index_of, 1, value_id);

        setList(newUpdate);

        console.log(list);

        setList(newUpdate);

        setListEdit([]);
    }
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date+' '+time;

    const tasksList = list.map((lists) => <div>
    
    <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>

    {dateTime}

    {listEdit === lists ? (<input type = "text" id="text-update" />) : <h3>{lists}</h3> }

    <Button variant="contained" color="secondary" type="button" onClick={function(){Delete(lists)}}>Delete</Button>

    <Button variant="contained" color="secondary" type="button" onClick={function(){Update(lists)}}>Update</Button>

    <Button type="button" onClick={function(){handleEdit(lists)}}>Edit</Button>

    </div>);

  
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={AddOn}>
      <TextField data-testid="new-item-input" value={value} 
      onChange={(i)=> NewValue(i.target.value)} id="standard-basic" label="TO-DO"/>
      {tasksList}
      <Button data-testid="new-item-button" variant="contained" color="primary" type = "submit" id = "save-button">Save Task</Button>
    </form>
  );
}
