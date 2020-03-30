
const Pet = (props) => {
   return React.createElement('div', {},
   [
       React.createElement('h1',{},  props.name),
       React.createElement('h2',{}, props.animal),
       React.createElement('h3',{},  props.breed)
       
   ])
}


const app = () => {
    return React.createElement(
     "div", 
     {},
     React.createElement('h1', {}, 'Adopt Me'),
     React.createElement(Pet , {}, {
         name: 'Bigoot',
         animal: 'Dog',
         breed: 'Suppro'
     }),
     React.createElement(Pet,
        {}, {
            name: 'Haveens',
            animal: 'Cat',
            breed: 'Meow'
        }),
     React.createElement(Pet,
        {}, {
            name: 'Yukess',
            animal: 'Rabbit',
            breed: 'Hiien'
        })


    )
};

ReactDOM.render(
    React.createElement(app),
    document.getElementById('root')
)