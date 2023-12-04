import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API

  state={
    progress: 10
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
<BrowserRouter>
<LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}  />
<Navbar/>
<Routes>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey  ={this.apiKey  }   key='news' pageSize={this.pageSize} country={'us'} category={'general'}/>}></Route>
          <Route exact path="/business" element={ <News setProgress={this.setProgress} apiKey  ={this.apiKey  }  key='business' pageSize={this.pageSize} country={'us'} category={'business'}/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey  ={this.apiKey  }  key='entertainment' pageSize={this.pageSize} country={'us'} category={'entertainment'}/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey  ={this.apiKey  } key='general' pageSize={this.pageSize} country={'us'} category={'general'}/>}> </Route>
          <Route exact path="/health" element={ <News setProgress={this.setProgress} apiKey  ={this.apiKey  }  key='health' pageSize={this.pageSize} country={'us'} category={'health'}/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey  ={this.apiKey  }  key='science' pageSize={this.pageSize} country={'us'} category={'science'}/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey  ={this.apiKey  } key='sports' pageSize={this.pageSize} country={'us'} category={'sports'}/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey  ={this.apiKey  }  key='technology' pageSize={this.pageSize} country={'us'} category={'technology'}/>}></Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
       
        
            
          </Routes>
          <Footer/>
          </BrowserRouter>
      </div>
    )
  }
}


// export default App;
