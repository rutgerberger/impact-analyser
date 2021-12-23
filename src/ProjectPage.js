import React, { useState, onChange } from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import { useParams } from 'react-router';

function ProjectPage() {
    const params = useParams()

    function helloWorld(){
        return "hello"
    }
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

    const averageDifficulty = () => {

        var total = 0;
        var size = 0;
        items.map(item => {
            total+=Number(item.difficulty);
            size+=1;
        })

        var avg = total / size;
        return avg;
    };

    const averageTime = () => {

        var totalHours = 0;
        var totalMinutes = 0;
        var size = 0;
        items.map(item => {
            totalHours+=Number(item.hours);
            totalMinutes+=Number(item.minutes);
            size+=1;
        })

        var avg = (totalHours*60 + totalMinutes) / size;
        return (avg/60);
    };

    return (
        <div class="styling" style={{color: "black"}}>
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
                            <td className="averageDifficulty">{averageDifficulty()}</td>
                            <td>{averageTime()}</td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <Button className="button-add-item" text="Add New Item"/>
        </div>
    )
}

export default ProjectPage
