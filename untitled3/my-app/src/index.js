import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Phone (props){
    const classes =['card'];

    if (props.phone.marked){
        classes.push('marked')
    }
    return(
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className='card-img'>
                <img
                    src = {props.phone.img}
                    alt = {props.phone.name}/>
            </div>
            <h3 >{props.phone.name}</h3>
            <h3>{props.phone.price}$</h3>
            <div className ='metro'>
                <h1>Купить</h1>
            </div>
        </div>
    )}

class PhoneList extends React.Component {
    state = {
        phones:[
            {marked: false, name:'Iphone X', price:'1000',img:'picture.jpeg'},
            {marked: false, name:'Xiaomi mi8',price:'500',img:'mi.jpeg'},
            {marked: false, name:'Samsung S9',price:'900',img:'samsung.jpeg'}
        ],
        visible:true
    };
    handleSearch(event){
          console.log(event.target.value);
    }
    handleMarked(name){
        const phones = this.state.phones.concat();
        const phone = phones.find(c => c.name === name);
        phone.marked = true;

        this.setState({ phones })
    }
    toggleHandler(){
        this.setState({visible: !this.state.visible})
        console.log('working')
    }
    renderPhones(){

     if (!this.state.visible) {
         return null
     }

     return this.state.phones.map(phone => {
         return (
             < Phone phone={phone} key={phone.name + Math.random()}
             onMark={this.handleMarked.bind(this,phone.name)}/>
         )
     })
    }
    render() {
        return (
            <div className ='app'>
                <button onClick={() =>  this.toggleHandler()}> Toggle </button>
                <input type='text' className='mac' onChange={this.handleSearch}/>
                <div className='list'>
                    {this.renderPhones()}
                </div>
            </div>)
    }
}


ReactDOM.render(
<PhoneList />,
    document.getElementById('root')
);

