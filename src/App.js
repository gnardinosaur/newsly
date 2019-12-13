import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: "cards",
    theme: "light"
  }

  changeView = () => {
    this.setState({
      view: this.state.view === "cards" ? "list" : "cards"
    })
  }
  
  changeTheme = (event) => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    })
  }
  
  renderArticles = () => {
    return this.state.articles.map(article => {
      if (this.state.view === "cards") {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              theme="card {this.state.theme}"
              />
      } else {
        return <ArticleItem theme="item {this.state.theme}" key={article.id} title={article.title} />
      }
    })
  }

  render(){
    return (
      <div className={this.state.theme}>
        <button onClick={this.changeTheme}>{this.state.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
        <button onClick={this.changeView}>{this.state.view === "cards" ? "Switch to List View" : "Switch to Card View"}</button>
      <div className={this.state.view}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
