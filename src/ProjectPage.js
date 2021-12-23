import React, { useState, onChange } from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Popup from './components/Popup'
import { useParams } from 'react-router';

function ProjectPage() {
    const params = useParams()
    //used to show / not show the add item popup
    const [popUp, setPopUp] = useState(false);

    //complete list of items
    const [items, setItems] = useState([{
        id: 0,
        title: "Define header",
        description: "Make sure the header is updated (correct size - color - width)",
        user: "Mark",
        difficulty: "7",
        hours: 2,
        minutes: 30
    }, {
        id: 1,
        title: "Update the nav bar",
        description: "The navigation bar should have a new color and logo",
        user: "Mark",
        difficulty: "6",
        hours: 1,
        minutes: 15
    },{
        id: 2,
        title: "New home page image",
        description: "Look in google streetview for some nice streetview images, and include this in the homepage",
        user: "Pieter",
        difficulty: "6",
        hours: 2,
        minutes: 0
    },{
        id: 3,
        title: "Responsive layout",
        description: "The website should be nice whenever viewed with a phone",
        user: "Marieke",
        difficulty: "9",
        hours: 5,
        minutes: 30
    }]);

    //used to edit difficulty / hours / minutes values
    //of tasks
    //updates the items
    const editValue = index => e => {
        console.log(e.target.value);
        console.log('property name: '+ e.target.name);
        var new_items = [...items];
        new_items[index][e.target.name] = e.target.value;
        setItems(new_items);

        items.map((item, i) => {
            if (i === index) {
                console.log(new_items[i][e.target.name])
            }
        })
    };

    //compute the average of the difficulty of every
    //task and return this as a float
    const averageDifficulty = () => {

        var total = 0;
        var size = 0;
        items.map(item => {
            total+=Number(item.difficulty);
            console.log("Total:", total)
            size+=1;
        })

        var avg = total / size;
        return avg;
    };

    //calculate the total time:
    //add up every hour and minutes of every task
    const totalTime = () => {

        var totalHours = 0;
        var totalMinutes = 0;
        var size = 0;
        items.map(item => {
            totalHours+=Number(item.hours);
            totalMinutes+=Number(item.minutes);
            size+=1;
        })

        //add the extra minutes to these hours
        var e_hours = (totalMinutes - (totalMinutes % 60)) / 60;
        totalHours += e_hours

        //and return the total hours and the remainder of the minutes 
        var total = totalHours + ":" + totalMinutes % 60
        return total;
    };

    const computeMaxID = () => {

        var max_id = 0;
        items.map(item => {
            if (item.id > max_id) {
                max_id = item.id;
            }
        })
        console.log(max_id)
        return(max_id);

    }

    //prevents the form from submitting
    //however, saves the values in a new
    //array and add this to the complete
    //list of items
    const handleSubmit = (e) => {
        e.preventDefault()

        var newlist = items;
        newlist.push({
            id: e.target.aid.value,
            title: e.target.atitle.value,
            description: e.target.adescription.value,
            user: e.target.auser.value,
            difficulty: e.target.adifficulty.value,
            hours: e.target.ahours.value,
            minutes: e.target.aminutes.value,
        })
        setItems(newlist)
        setPopUp(!popUp)
    }

    //return the html page
    return (
        <div className="styling" style={{color: "black"}}>
            <NavBar />
            <div className="container">
                <form>
                    <table>
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>User</th>
                            <th>Difficulty (1-10)</th>
                            <th>Hours</th>
                            <th>Minutes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.user}</td>
                                <td>
                                    <input type="range" max="10" min="0" value={item.difficulty} name="difficulty" onChange={editValue(index)}/>
                                </td>
                                <td>
                                    <input type="number" max="72" min="0" value={item.hours} name="hours" onChange={editValue(index)}/>
                                </td>
                                <td>
                                    <input type="number" min="0" max="60" value={item.minutes} name="minutes" onChange={editValue(index)}/>
                                </td>
                            </tr>
                        )) }
                        <tr>
                            <td></td>
                            <td>Average / total</td>
                            <td></td>
                            <td>{averageDifficulty()}</td>
                            <td>{totalTime()}</td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                {popUp && <Popup content={

                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label>ID</label>
                        <input className=''  value={computeMaxID()} type='text' name='aid' placeholder={computeMaxID()}/><br/>
                        <label>Title</label>
                        <input className=''  type='text' name='atitle' placeholder='Title'/><br/>
                        <label>Description</label>
                        <input className=''  type='text' name='adescription' placeholder='Description'/><br/>
                        <label>User</label>
                        <input className=''  type='text' name='auser' placeholder='User'/><br/>
                        <label>Difficulty</label>
                        <input className=''  type='range' max="10" min="0" name='adifficulty' placeholder='Difficulty'/><br/>
                        <label>Hours</label>
                        <input className=''  type='number' max="72" min="0" name= 'ahours' placeholder='00'/><br/>
                        <label>Minutes</label>
                        <input className=''  type='number' max="60" min="0" name= 'aminutes' placeholder='00'/>
                        <button className="button-add" type="submit">Add</button>
                    </form>
                }
                handleClose={handleSubmit}
                />}
            </div>
            {!popUp && <Button className="button-add-item" text="Add New Item" onClick={() => setPopUp(!popUp)}/>}
        </div>
    )
}

export default ProjectPage
