import React, { Component } from 'react';
import Filters from "./Filters";
import Card from "./Card"
class FilterAndCard extends Component {
    state = {
        productsToShow:[],
          filteredArr:[],
            allBrands: {
                "KROSS": 0,
                "LE GRAND BIKES": 0,
                "EXPLORER":0,
                "VISITOR":0,
                "FORCE":0,
                "PONY":0,
                "E-BIKES":0,
                "IDEAL":0
            },
            counterAll:0,
            countTypes:0
        }
    componentDidMount() {
        fetch('https://json-project3.herokuapp.com/products')
        .then(res=> res.json())
        .then(data => {
          data.forEach(el => {
            if (this.state.allBrands[el.brand] < 2) {
            this.state.productsToShow.push(el);
              this.state.allBrands[el.brand] ++;
            }
          });
                       this.setState({
               productsToShow:this.state.productsToShow,
              filteredArr:this.state.productsToShow,
             counterAll:this.state.productsToShow.length    
            });
          });
        }
        //Badges Numbers
        countTypeMale = () => {
                  this.state.countTypes = this.state.productsToShow.filter(el => el.gender === "MALE");
                  return this.state.countTypes.length;       
        }
        countTypeFemale=()=> {
          this.state.countTypes = this.state.productsToShow.filter(el => el.gender === "FEMALE");
                      return this.state.countTypes.length;}
          
                      countTypeGrandBikes=()=> {
                        this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "LE GRAND BIKES");
                          return  this.state.countTypes.length;}
          
                          countTypeKross=()=> {
                            this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "KROSS");
                              return  this.state.countTypes.length;}

                              countTypeExplorer=()=> {
                                this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "EXPLORER");

                                  return  this.state.countTypes.length;}
                                  countTypeVisitor=()=> {
                                    this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "VISITOR");
                                    return  this.state.countTypes.length;}

                                      countTypePony=()=> {
                                        this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "PONY");
                                          return  this.state.countTypes.length;}

                                          countTypeForce=()=> {
                                            this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "FORCE");
                                              return  this.state.countTypes.length;}

                                              countTypeEBikes=()=> {
                                                this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "E-BIKES");
                                                  return  this.state.countTypes.length;}

                                                  countTypeIdeal=()=> {
                                                    this.state.countTypes = this.state.productsToShow.filter(el => el.brand === "IDEAL");
                                                      return  this.state.countTypes.length;}

    handleClick = (e) => {
        const origin = e.currentTarget.name;
        let filteredArr = [];
        if(e.currentTarget.name === 'Show All'){   
       filteredArr = this.state.productsToShow;
                document.querySelector(".show a").firstChild.classList.add("bolder");
                document.querySelector(".show a").lastChild.classList.add("color");
                document.querySelectorAll('.link').forEach(el => {
                    if(el.firstChild.classList.contains("bolder") && el.lastChild.classList.contains("color")){
                        el.firstChild.classList.remove('bolder');
                   el.lastChild.classList.remove('color');
                      }
                    })
        } else{
          filteredArr = this.state.productsToShow.filter(el=> el.brand === origin)
      this.isClicked(e);
        }
        this.setState({filteredArr: filteredArr})
      }

        onGender = (e) =>{
            let filteredArr = [];
        const origin = e.currentTarget.name;
        filteredArr = this.state.productsToShow.filter(el=> el.gender === origin)
            this.setState({filteredArr: filteredArr})
            this.isClicked(e);
        }

        isClicked= (e) => {
          document.querySelectorAll('.link').forEach((el)=>{
            el.firstChild.classList.remove('bolder');
            el.lastChild.classList.remove('color');
          })
         this.setState({clicked: true});
         e.currentTarget.firstChild.classList.add("bolder");
                     e.currentTarget.lastChild.classList.add('color');     
                     document.querySelector(".show a").firstChild.classList.remove("bolder");
                     document.querySelector(".show a").lastChild.classList.remove("color");
          }
      // Hover orange 
onHover = (e) => {
  e.currentTarget.firstChild.classList.add("colorOrange");
  e.currentTarget.lastChild.classList.add("bgOrange");
}

leaveHover = (e) => {
    e.currentTarget.firstChild.classList.remove("colorOrange");
    e.currentTarget.lastChild.classList.remove("bgOrange");     
    }
            
    render() {
    return(
        <div className="row">
            <Filters counter={this.state.counterAll} countTypeMale={this.countTypeMale} countTypeFemale={this.countTypeFemale} countTypeGrandBikes={this.countTypeGrandBikes} countTypeKross={this.countTypeKross} 
            countTypeExplorer={this.countTypeExplorer}  countTypeVisitor={this.countTypeVisitor} countTypePony={this.countTypePony} countTypeForce={this.countTypeForce} countTypeEBikes={this.countTypeEBikes} countTypeIdeal={this.countTypeIdeal} onButton={this.handleClick} onGender={this.onGender} onHover={this.onHover} leaveHover={this.leaveHover}/>
            <Card result={this.state.filteredArr}/>
        </div>
    )
}
}
export default FilterAndCard;