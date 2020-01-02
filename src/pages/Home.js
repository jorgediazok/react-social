import React, { Component } from "react";
import Comments from "./Comments";

class Home extends Component {
    render() {
        return (
<div className="ui container comments">
    <h4>LAST USERS COMMENTS. JOIN THEM!</h4>
    <Comments author="Sam" timeAgo="Today at 2:03 pm" post="Tengo unas ganas de salir de joda, quien se prende?"/>
    <Comments author="Alex" timeAgo="Today at 1:12 pm" post="Alguien para ir a tomar unas birras y fumarse un churro?"/>
    <Comments author="Jane" timeAgo="Today at 2:35 am" post="Necesito ir a ver la nueva de Star Wars y estoy buscando alguien que me acompañe"/>
    <Comments author="Leandro" timeAgo="Yesterday at 3:35 pm" post="Yo tomo licor yo tomo cerveza y me gustan las chicas"/>
    <Comments author="Romina" timeAgo="Yesterday at 2:14 pm" post="Estoy aprendiendo a usar React y es más dificil que jugar al GO chino"/>

</div>
    )

}}


export default Home;