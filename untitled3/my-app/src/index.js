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
        visible:true,
        appTitle:'Phones'
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
    titleChangeHandler(title){
        if (title.trim() === ''){
            return
        }
        this.setState({
            appTitle:title
        })
    }
    render() {
        const style ={
            marginRight:20
        };
        return (
            <div className ='app'>
                <h1>{this.state.appTitle}</h1>
                <button onClick={() =>  this.toggleHandler()} style={style}> On/Off </button>
                <input
                    type='text'
                    placeholder='Change Title'
                    onChange={(event)=> this.titleChangeHandler(event.target.value)}
                    value={this.state.appTitle}
                   />
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

