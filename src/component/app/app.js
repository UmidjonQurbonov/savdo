import React, { Component } from 'react';
import './app.css';
import Container from '../container/container';
import ListGroup from '../list-group/list-group';
import FormGroup from '../form-group/form-group';

class App extends Component{

    state = {
        mahsulotlar:[
            {nomi:'Kartoshka', puli:2000,id:1},
            {nomi:'Sabzi', puli:3000,id:2},
            {nomi:'Guruch', puli:10000,id:3},
            {nomi:'Mosh', puli:9000,id:4},
        ],
        yangiNom:'',
        yangiPul:''
    }

    nominiQoshish = (yangiNomi) => {
        this.setState({
            yangiNom:yangiNomi
        })    
    }

    puliniQoshish = (yangiPuli) => {
        if(Number(yangiPuli)){
            this.setState({yangiPul:yangiPuli})
        }else{
            alert("Iltimos son kiriting !");
        }
    }

    stategaQoshish = () => {
        const nomi = this.state.yangiNom;
        const puli = this.state.yangiPul;
        let id = this.state.mahsulotlar[this.state.mahsulotlar.length - 1].id + 1;
        let mahsulotlar = this.state.mahsulotlar;
        mahsulotlar = [...mahsulotlar,{nomi,puli,id}];
        if(nomi !== ''){
            if(puli !== ''){
                if(Number(puli)){
                    this.setState({
                        mahsulotlar:mahsulotlar,
                        yangiNom:'',
                        yangiPul:''
                    })
                }else{
                    alert("Iltimos xarid summasiga faqat raqam kiriting !");
                }
            }else{
                alert("Iltimos xarid summasini kiriting !");
            }
        }else{
            alert("Iltimos mahsulot nomini kiriting !");
        }
        
    }
    


    render(){
        let {mahsulotlar,yangiNom,yangiPul} =  this.state;
        return(
            <div className="App">
                <Container>
                    <h4 className="text-center text-warning py-2">Savdolar Ro'yhati</h4>
                    <FormGroup nominiOlish={this.nominiQoshish} puliniOlish={this.puliniQoshish} saqlash={this.stategaQoshish} yangiNomi={yangiNom} yangiPuli={yangiPul}/>
                    <ListGroup mahsulotlar={mahsulotlar} delete={this.delete}/>
                </Container>
            </div>
        )
    }
}

export default App;
