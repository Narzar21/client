import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Table} from 'antd';
import App from './App';
import * as serviceWorker from './serviceWorker';
import auth_0 from './img/1.jpg';
import auth_1 from './img/2.jpg';
import auth_2 from './img/3.jpg';
import auth_3 from './img/4.jpg';
import auth_4 from './img/5.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

var col=[
  {
    title: 'Наименование книги',
    dataIndex: 'book',
  },
  {
    title: 'Автор(ы)',
    dataIndex: 'author',
    render: text => <a href={text}>{text}</a>,
  },
  {
    title: 'Годы жизни',
    dataIndex: 'year',
  }
];

  var requestify = require('requestify');
  requestify.get('http://localhost:8888/tableData')
    .then(function(response) {
        response.getBody();
        const data=JSON.parse(response.body);
//        console.log(data);
/*        class Taba extends Component{
          render(){
            return(
              <Table dataSource={data} columns={col} />
            )
          }
        }*/
        class Main extends React.Component {
          render() {
          return(<div><App /><Table dataSource={data} columns={col} /></div>);
          }
        }
        class Author1 extends React.Component{
          render(){
            return(
              <div align="center">
                <img src={auth_0} alt={data[0].author} />
                <br />
                <p>
                  {data[0].year}
                </p>
                <a href="http:\\localhost:3000"><button>Назад</button></a>
            </div>);
            }
        }
        class Author2 extends React.Component{
          render(){
            return(
              <div align="center">
                <img src={auth_1}  alt={data[1].author}/>
                <br />
                <p>
                  {data[1].year}
                </p>
                <a href="http:\\localhost:3000"><button>Назад</button></a>
              </div>);
            }
        }
        class Author3 extends React.Component{
          render(){
            return(
              <div align="center">
                <img src={auth_2}  alt={data[2].author}/>
                <br />
                <p>
                  {data[2].year}
                </p>
                <a href="http:\\localhost:3000"><button>Назад</button></a>
              </div>);
            }
        }
        class Author4 extends React.Component{
          render(){
            return(
              <div align="center">
                <img src={auth_3}  alt={data[3].author}/>
                <br />
                <p>
                  {data[3].year}
                </p>
                <a href="http:\\localhost:3000"><button>Назад</button></a>
              </div>);
            }
        }
        class Author5 extends React.Component{
          render(){
            return(
              <div align="center">
                <img src={auth_4} alt={data[4].author} />
                <br />
                <p>
                  {data[4].year}
                </p>
                <a href="http:\\localhost:3000"><button>Назад</button></a>
              </div>);
            }
        }
        class NotFound extends React.Component{
            render(){
                return (<div align="center"><p>Ресурс не найден</p><a href="http:\\localhost:3000"><button>Назад</button></a></div>);
            }
        }
        ReactDOM.render(
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/author_0" component={Author1}/>
            <Route path="/author_1" component={Author2}/>
            <Route path="/author_2" component={Author3}/>
            <Route path="/author_3" component={Author4}/>
            <Route path="/author_4" component={Author5}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        , document.getElementById('tabl'));
      }
  );

//ReactDOM.render(<App />, document.getElementById('hello'));
//ReactDOM.render(<Taba />,document.getElementById('tabl'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
